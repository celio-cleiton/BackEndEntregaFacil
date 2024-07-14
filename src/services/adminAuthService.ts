import AdminModel, { IAdmin } from '../models/adminModels';

class AdminAuthService {
  public async loginAdmin(email: string, password: string): Promise<IAdmin | null> {
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      throw new Error('Admin not found');
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    return admin;
  }
}

export default new AdminAuthService();
