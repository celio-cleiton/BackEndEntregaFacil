import mongoose, { Schema, Document } from 'mongoose';

// Definição da interface IVehicle
export interface IVehicle extends Document {
  make: string;
  vehicleModel: string;
  year: number;
  vin: string;
  owner: mongoose.Types.ObjectId;
}

// Schema do Vehicle
const VehicleSchema = new Schema<IVehicle>({
  make: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  year: { type: Number, required: true },
  vin: { type: String, required: true, unique: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

// Criação do modelo
const VehicleModel = mongoose.model<IVehicle>('Vehicle', VehicleSchema);

export default VehicleModel;
