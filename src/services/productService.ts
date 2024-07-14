import ProductModel, { IProduct } from '../models/productModels';

// Serviço para lidar com operações relacionadas a produtos
class ProductService {
  // Cria um novo produto
  async createProduct(productData: IProduct): Promise<IProduct> {
    const product = new ProductModel(productData);
    return product.save();
  }

  // Retorna todos os produtos
  async getProducts(): Promise<IProduct[]> {
    return ProductModel.find().populate('store', 'name address');
  }

  // Retorna um produto pelo ID
  async getProductById(id: string): Promise<IProduct | null> {
    return ProductModel.findById(id).populate('store', 'name address');
  }

  // Atualiza um produto
  async updateProduct(id: string, productData: Partial<IProduct>): Promise<IProduct | null> {
    return ProductModel.findByIdAndUpdate(id, productData, { new: true });
  }

  // Deleta um produto
  async deleteProduct(id: string): Promise<IProduct | null> {
    return ProductModel.findByIdAndDelete(id);
  }
}

export default new ProductService();
