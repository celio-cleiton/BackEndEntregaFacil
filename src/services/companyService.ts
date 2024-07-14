import CompanyModel, { ICompany } from '../models/companyModels';

// Serviço para lidar com operações relacionadas a empresas
class CompanyService {
  // Cria uma nova empresa
  async createCompany(companyData: ICompany): Promise<ICompany> {
    const company = new CompanyModel(companyData);
    return company.save();
  }

  // Retorna todas as empresas
  async getCompanies(): Promise<ICompany[]> {
    return CompanyModel.find();
  }

  // Retorna uma empresa pelo ID
  async getCompanyById(id: string): Promise<ICompany | null> {
    return CompanyModel.findById(id);
  }

  // Atualiza uma empresa
  async updateCompany(id: string, companyData: Partial<ICompany>): Promise<ICompany | null> {
    return CompanyModel.findByIdAndUpdate(id, companyData, { new: true });
  }

  // Deleta uma empresa
  async deleteCompany(id: string): Promise<ICompany | null> {
    return CompanyModel.findByIdAndDelete(id);
  }
}

export default new CompanyService();
