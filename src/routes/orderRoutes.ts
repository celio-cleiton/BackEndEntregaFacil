import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import OrderController from '../controllers/orderController';

const router = Router();

router.post('/orders', authMiddleware, OrderController.createOrder);
router.get('/orders', authMiddleware, OrderController.getOrders);
router.get('/orders/:id', authMiddleware, OrderController.getOrderById);
router.put('/orders/:id', authMiddleware, OrderController.updateOrder);
router.delete('/orders/:id', authMiddleware, OrderController.deleteOrder);

export default router;
