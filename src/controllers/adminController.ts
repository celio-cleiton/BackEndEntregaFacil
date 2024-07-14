import { Request, Response } from 'express';
import adminService from '../services/adminService';

// Controlador para lidar com requisições relacionadas a adminstradores 
class adminController {
  // Método para criar um novo usuário
  async createAdmin(req: Request, res: Response) {
    try {
      const user = await adminService.createAdmin(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para buscar todos os adminstradores 
  async getAdmins(req: Request, res: Response) {
    try {
      const users = await adminService.getAdmins();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para buscar um adminstradores por ID
  async getAdminById(req: Request, res: Response) {
    try {
      const user = await adminService.getAdminById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para atualizar um adminstrador
  async updateAdmin(req: Request, res: Response) {
    try {
      const updatedUser = await adminService.updateAdmin(req.params.id, req.body);
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para deletar um adminstrador
  async deleteAdmin(req: Request, res: Response) {
    try {
      const deletedUser = await adminService.deleteAdmin(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new adminController();
