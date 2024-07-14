import mongoose, { Document, Schema } from 'mongoose';

// Interface que define a estrutura do documento Company
export interface ICompany extends Document {
  name: string;
  address: string;
  email: string;
  phone: string;
}

// Schema do Company
const CompanySchema = new Schema<ICompany> ({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

const CompanyModel = mongoose.model<ICompany>('Company', CompanySchema);

export default CompanyModel;
