import { Router } from 'express';
import adminController from '../controllers/adminController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

// Rota para criar um novo adminstrador
router.post('/adm', adminController.createAdmin);

// Rota para buscar todos os adminstradores
router.get('/admins', authMiddleware, adminController.getAdmins);

// Rota para buscar um adminstrador por ID
router.get('/adm/:id', authMiddleware, adminController.getAdminById);

// Rota para atualizar um adminstrador
router.put('/adm/:id', authMiddleware, adminController.updateAdmin);

// Rota para deletar um adminstrador
router.delete('/adm/:id', authMiddleware, adminController.deleteAdmin);

export default router;
