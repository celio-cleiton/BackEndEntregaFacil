import mongoose, { Document, Schema } from 'mongoose';

// Interface do Pedido
export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  store: mongoose.Types.ObjectId;
  products: { product: mongoose.Types.ObjectId; quantity: number }[];
  status: string;
  assignedVehicle?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Esquema do Pedido
const OrderSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
  }],
  status: { type: String, required: true, enum: ['pending', 'accepted', 'in_transit', 'delivered', 'cancelled'], default: 'pending' },
  assignedVehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
}, { timestamps: true });

export default mongoose.model<IOrder>('Order', OrderSchema);
