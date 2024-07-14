import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Interface que define o esquema do admin
export interface IAdmin extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const adminSchema = new Schema<IAdmin>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin'], default: 'admin' },
});

// Middleware para hash da senha antes de salvar
adminSchema.pre('save', async function (next) {
  const admin = this as IAdmin;

  if (!admin.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password, salt);
    next();
  } catch (err) {
    next();
  }
});

// Método para comparar senhas
adminSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

const AdminModel = model<IAdmin>('Admin', adminSchema);

export default AdminModel;
