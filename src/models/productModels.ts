import mongoose, { Document, Schema } from 'mongoose';

// Interface do Produto
export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  store: mongoose.Types.ObjectId;
}

// Esquema do Produto
const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
});

export default mongoose.model<IProduct>('Product', ProductSchema);
