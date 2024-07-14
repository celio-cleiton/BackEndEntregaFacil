import { Request, Response } from 'express';
import VehicleService from '../services/vehicleService';


// Controlador para lidar com requisições relacionadas a veículos
class VehicleController {
  // Método para criar um novo veículo
  async createVehicle(req: Request, res: Response) {
    try {
      const vehicle = await VehicleService.createVehicle(req.body);
      res.status(201).json(vehicle);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para buscar todos os veículos
  async getVehicles(req: Request, res: Response) {
    try {
      const vehicles = await VehicleService.getVehicles();
      res.status(200).json(vehicles);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para buscar um veículo por ID
  async getVehicleById(req: Request, res: Response) {
    try {
      const vehicle = await VehicleService.getVehicleById(req.params.id);
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para atualizar um veículo
  async updateVehicle(req: Request, res: Response) {
    try {
      const updatedVehicle = await VehicleService.updateVehicle(req.params.id, req.body);
      if (!updatedVehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }
      res.status(200).json(updatedVehicle);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Método para deletar um veículo
  async deleteVehicle(req: Request, res: Response) {
    try {
      const deletedVehicle = await VehicleService.deleteVehicle(req.params.id);
      if (!deletedVehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new VehicleController();
