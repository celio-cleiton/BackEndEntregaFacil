import { jest } from '@jest/globals';
import AdminService from '../services/adminService';
import AdminModel, { IAdmin } from '../models/adminModels'; // Verifique se o caminho está correto
import mongoose from 'mongoose';

jest.mock('../models/adminModels', () => ({
  findByIdAndUpdate: jest.fn()
}));

describe('AdminService', () => {
  let adminData: IAdmin;

  beforeAll(() => {
    adminData = {
      _id: new mongoose.Types.ObjectId(),
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'securepassword',
      role: 'admin',
    } as IAdmin;
  });

  it('should update an admin', async () => {
    const updatedData = { name: 'Updated Admin' };

    // Corrige a tipagem do mock da função findByIdAndUpdate
    (AdminModel.findByIdAndUpdate as jest.Mock).mockResolvedValue({ ...adminData, ...updatedData } as IAdmin);

    const admin = await AdminService.updateAdmin(adminData._id.toString(), updatedData);
    expect(admin).not.toBeNull();
    if (admin) {
      expect(admin.name).toBe(updatedData.name);
    }
  });
});
