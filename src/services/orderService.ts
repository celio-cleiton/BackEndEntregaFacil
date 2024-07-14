import mongoose from 'mongoose';
import OrderModel, { IOrder } from '../models/orderModels';

// Serviço para lidar com operações relacionadas a pedidos
class OrderService {
  // Cria um novo pedido
  async createOrder(orderData: IOrder): Promise<IOrder> {
    const order = new OrderModel(orderData);
    return order.save();
  }

  // Retorna todos os pedidos
  async getOrders(): Promise<IOrder[]> {
    return OrderModel.find()
      .populate('user', 'name email')
      .populate('store', 'name address')
      .populate('products.product', 'name price')
      .populate('assignedVehicle', 'type licensePlate');
  }

  // Retorna um pedido pelo ID
  async getOrderById(id: string): Promise<IOrder | null> {
    return OrderModel.findById(id)
      .populate('user', 'name email')
      .populate('store', 'name address')
      .populate('products.product', 'name price')
      .populate('assignedVehicle', 'type licensePlate');
  }

  // Atualiza um pedido
  async updateOrder(id: string, orderData: Partial<IOrder>): Promise<IOrder | null> {
    return OrderModel.findByIdAndUpdate(id, orderData, { new: true });
  }

  // Deleta um pedido
  async deleteOrder(id: string): Promise<IOrder | null> {
    return OrderModel.findByIdAndDelete(id);
  }

  // Atribui um veículo a um pedido
  async assignVehicle(orderId: string, vehicleId: mongoose.Types.ObjectId): Promise<IOrder | null> {
    return OrderModel.findByIdAndUpdate(orderId, { assignedVehicle: vehicleId, status: 'in_transit' }, { new: true });
  }
}

export default new OrderService();
