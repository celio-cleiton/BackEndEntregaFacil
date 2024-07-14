import { Request, Response } from 'express';
import CompanyService from '../services/companyService';

// Controlador para lidar com requisições relacionadas a empresas
class CompanyController {
  // Método para criar uma nova empresa
  async createCompany(req: Request, res: Response) {
    try {
      const company = await CompanyService.createCompany(req.body);
      res.status(201).json(company);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para buscar todas as empresas
  async getCompanies(req: Request, res: Response) {
    try {
      const companies = await CompanyService.getCompanies();
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para buscar uma empresa por ID
  async getCompanyById(req: Request, res: Response) {
    try {
      const company = await CompanyService.getCompanyById(req.params.id);
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
      res.status(200).json(company);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para atualizar uma empresa
  async updateCompany(req: Request, res: Response) {
    try {
      const updatedCompany = await CompanyService.updateCompany(req.params.id, req.body);
      if (!updatedCompany) {
        return res.status(404).json({ message: 'Company not found' });
      }
      res.status(200).json(updatedCompany);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para deletar uma empresa
  async deleteCompany(req: Request, res: Response) {
    try {
      const deletedCompany = await CompanyService.deleteCompany(req.params.id);
      if (!deletedCompany) {
        return res.status(404).json({ message: 'Company not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new CompanyController();
