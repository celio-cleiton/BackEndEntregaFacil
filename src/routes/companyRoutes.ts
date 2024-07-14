import express from 'express';
import CompanyController from '../controllers/companyController';

const router = express.Router();

// Rota para criar uma nova empresa
router.post('/companies', CompanyController.createCompany);

// Rota para buscar todas as empresas
router.get('/companies', CompanyController.getCompanies);

// Rota para buscar uma empresa por ID
router.get('/companies/:id', CompanyController.getCompanyById);

// Rota para atualizar uma empresa por ID
router.put('/companies/:id', CompanyController.updateCompany);

// Rota para deletar uma empresa por ID
router.delete('/companies/:id', CompanyController.deleteCompany);

export default router;
