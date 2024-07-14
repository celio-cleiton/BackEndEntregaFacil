import express from 'express';
import ProductController from '../controllers/productController';

const router = express.Router();

// Rota para criar um novo produto
router.post('/products', ProductController.createProduct);

// Rota para buscar todos os produtos
router.get('/products', ProductController.getProducts);

// Rota para buscar um produto por ID
router.get('/products/:id', ProductController.getProductById);

// Rota para atualizar um produto por ID
router.put('/products/:id', ProductController.updateProduct);

// Rota para deletar um produto por ID
router.delete('/products/:id', ProductController.deleteProduct);

export default router;
