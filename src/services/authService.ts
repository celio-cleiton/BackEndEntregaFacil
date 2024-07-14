import UserModel, { IUser } from '../models/userModels';

class AuthService {
  public async loginUser(email: string, password: string): Promise<IUser | null> {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    return user;
  }
}

export default new AuthService();
