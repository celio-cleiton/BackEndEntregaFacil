import { Request, Response } from 'express';
import ProductService from '../services/productService';

// Controlador para lidar com requisições relacionadas a produtos
class ProductController {
  // Método para criar um novo produto
  async createProduct(req: Request, res: Response) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para buscar todos os produtos
  async getProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para buscar um produto por ID
  async getProductById(req: Request, res: Response) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para atualizar um produto
  async updateProduct(req: Request, res: Response) {
    try {
      const updatedProduct = await ProductService.updateProduct(req.params.id, req.body);
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para deletar um produto
  async deleteProduct(req: Request, res: Response) {
    try {
      const deletedProduct = await ProductService.deleteProduct(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new ProductController();
