import { Router } from 'express';
import UserController from '../controllers/userController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

// Rota para criar um novo usuário
router.post('/users', UserController.createUser);

// Rota para buscar todos os usuários
router.get('/users', authMiddleware, UserController.getUsers);

// Rota para buscar um usuário por ID
router.get('/users/:id', authMiddleware, UserController.getUserById);

// Rota para atualizar um usuário
router.put('/users/:id', authMiddleware, UserController.updateUser);

// Rota para deletar um usuário
router.delete('/users/:id', authMiddleware, UserController.deleteUser);

export default router;
