import { jest } from '@jest/globals';
import UserService from '../services/userService';
import UserModel, { IUser } from '../models/userModels'; // Verifique se o caminho está correto
import mongoose from 'mongoose';

jest.mock('../models/userModels', () => ({
  create: jest.fn()
}));

describe('UserService', () => {
  it('should create a user', async () => {
    jest.setTimeout(15000); // Aumenta o tempo limite para 15 segundos

    const userData:  IUser = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'securepassword',
      _id: new mongoose.Types.ObjectId(),
    };

    // Corrige a tipagem do mock da função create
    (UserModel.create as jest.Mock).mockResolvedValue(userData);

    const user = await UserService.createUser(userData);
    expect(user).toHaveProperty('_id');
    expect(user.name).toBe(userData.name);
  });
});
