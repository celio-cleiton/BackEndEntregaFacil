import adminModel, { IAdmin } from '../models/adminModels';

export class AdminService {
  static updateAdmin(arg0: string, updatedData: { name: string; }) {
    throw new Error('Method not implemented.');
  }
  // Método para criar um novo usuário
  async createAdmin(adminData: any): Promise<IAdmin> {
    const user = new adminModel(adminData);
    await user.save();
    return user;
  }

  // Método para buscar todos os usuários
  async getAdmins(): Promise<IAdmin[]> {
    return adminModel.find();
  }

  // Método para buscar um usuário por ID
  async getAdminById(id: string): Promise<IAdmin | null> {
    return adminModel.findById(id);
  }

  // Método para atualizar um usuário
  async updateAdmin(id: string, adminData: any): Promise<IAdmin | null> {
    return adminModel.findByIdAndUpdate(id, adminData, { new: true });
  }

  // Método para deletar um usuário
  async deleteAdmin(id: string): Promise<IAdmin | null> {
    return adminModel.findByIdAndDelete(id);
  }
}

export default new AdminService();
