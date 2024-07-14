import mongoose, { Document } from 'mongoose';
import { IProduct } from '../models/productModels'; // Certifique-se de que o caminho está correto

// Definição da interface ProductDocument
interface ProductDocument extends IProduct, Document {}

// Mock do modelo de produto
jest.mock('../models/productModels', () => ({
  default: {
    create: jest.fn().mockResolvedValue({
      _id: new mongoose.Types.ObjectId(),
      name: 'Test Product',
      price: 100,
      store: new mongoose.Types.ObjectId(),
      description: 'Product description',
      stock: 10,
    } as ProductDocument),
  },
}));

describe('ProductService', () => {
  it('should create a product', async () => {
    // Teste para criar um produto
  });
});
