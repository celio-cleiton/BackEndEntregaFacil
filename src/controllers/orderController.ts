import { Request, Response } from 'express';
import mongoose from 'mongoose';
import OrderService from '../services/orderService';

class OrderController {
    // Cria um novo pedido
    async createOrder(req: Request, res: Response): Promise<Response> {
        try {
            const order = await OrderService.createOrder(req.body);
            return res.status(201).json(order);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Retorna todos os pedidos
    async getOrders(req: Request, res: Response): Promise<Response> {
        try {
            const orders = await OrderService.getOrders();
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Retorna um pedido pelo ID
    async getOrderById(req: Request, res: Response): Promise<Response> {
        try {
            const order = await OrderService.getOrderById(req.params.id);
            if (!order) return res.status(404).json({ message: 'Order not found' });
            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Atualiza um pedido
    async updateOrder(req: Request, res: Response): Promise<Response> {
        try {
            const order = await OrderService.updateOrder(req.params.id, req.body);
            if (!order) return res.status(404).json({ message: 'Order not found' });
            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Deleta um pedido
    async deleteOrder(req: Request, res: Response): Promise<Response> {
        try {
            const order = await OrderService.deleteOrder(req.params.id);
            if (!order) return res.status(404).json({ message: 'Order not found' });
            return res.status(200).json({ message: 'Order deleted' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Atribui um veículo a um pedido
    async assignVehicle(req: Request, res: Response): Promise<Response> {
        try {
            const orderId: string = req.params.orderId; // Alteração aqui
            const vehicleId = new mongoose.Types.ObjectId(req.params.vehicleId);

            const order = await OrderService.assignVehicle(orderId, vehicleId);

            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            return res.status(200).json(order);
        } catch (error) {
            console.error('Error assigning vehicle:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new OrderController();
