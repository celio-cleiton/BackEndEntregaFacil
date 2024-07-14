import CompanyService from '../services/companyService';
import CompanyModel, { ICompany } from '../models/companyModels';
import mongoose from 'mongoose';

// Mock do modelo Company
jest.mock('../models/companyModels');

describe('CompanyService', () => {
  // Dados de exemplo para uma empresa
  const companyData = {
    name: 'Company',
    address: '1234 Street',
    phone: '123-456-7890',
  };

  // Limpa todos os mocks após cada teste
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Testa a criação de uma nova empresa
  it('should create a new company', async () => {
    // Mock do método save do CompanyModel
    (CompanyModel.prototype.save as jest.Mock).mockResolvedValue(companyData);

    const company = await CompanyService.createCompany(companyData as ICompany);

    expect(company).toEqual(companyData);
    expect(CompanyModel.prototype.save).toHaveBeenCalledTimes(1);
  });

  // Testa a recuperação de todas as empresas
  it('should return all companies', async () => {
    // Mock do método find do CompanyModel
    (CompanyModel.find as jest.Mock).mockResolvedValue([companyData]);

    const companies = await CompanyService.getCompanies();

    expect(companies).toEqual([companyData]);
    expect(CompanyModel.find).toHaveBeenCalledTimes(1);
  });

  // Testa a recuperação de uma empresa pelo ID
  it('should return a company by ID', async () => {
    // Mock do método findById do CompanyModel
    (CompanyModel.findById as jest.Mock).mockResolvedValue(companyData);

    const company = await CompanyService.getCompanyById('12345');

    expect(company).toEqual(companyData);
    expect(CompanyModel.findById).toHaveBeenCalledTimes(1);
    expect(CompanyModel.findById).toHaveBeenCalledWith('12345');
  });

  // Testa a atualização de uma empresa
  it('should update a company', async () => {
    // Mock do método findByIdAndUpdate do CompanyModel
    (CompanyModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(companyData);

    const company = await CompanyService.updateCompany('12345', { name: 'Updated Company' });

    expect(company).toEqual(companyData);
    expect(CompanyModel.findByIdAndUpdate).toHaveBeenCalledTimes(1);
    expect(CompanyModel.findByIdAndUpdate).toHaveBeenCalledWith('12345', { name: 'Updated Company' }, { new: true });
  });

  // Testa a deleção de uma empresa
  it('should delete a company', async () => {
    // Mock do método findByIdAndDelete do CompanyModel
    (CompanyModel.findByIdAndDelete as jest.Mock).mockResolvedValue(companyData);

    const company = await CompanyService.deleteCompany('12345');

    expect(company).toEqual(companyData);
    expect(CompanyModel.findByIdAndDelete).toHaveBeenCalledTimes(1);
    expect(CompanyModel.findByIdAndDelete).toHaveBeenCalledWith('12345');
  });
});
