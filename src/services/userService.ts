import UserModel, { IUser } from '../models/userModels';

class UserService {
  // Método para criar um novo usuário
  async createUser(userData: any): Promise<IUser> {
    const user = new UserModel(userData);
    await user.save();
    return user;
  }

  // Método para buscar todos os usuários
  async getUsers(): Promise<IUser[]> {
    return UserModel.find();
  }

  // Método para buscar um usuário por ID
  async getUserById(id: string): Promise<IUser | null> {
    return UserModel.findById(id);
  }

  // Método para atualizar um usuário
  async updateUser(id: string, userData: any): Promise<IUser | null> {
    return UserModel.findByIdAndUpdate(id, userData, { new: true });
  }

  // Método para deletar um usuário
  async deleteUser(id: string): Promise<IUser | null> {
    return UserModel.findByIdAndDelete(id);
  }
}

export default new UserService();
