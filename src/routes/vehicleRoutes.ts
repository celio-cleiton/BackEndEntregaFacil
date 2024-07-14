import express from 'express';
import VehicleController from '../controllers/vehicleController';

const router = express.Router();

// Rota para criar um novo veículo
router.post('/vehicles', VehicleController.createVehicle);

// Rota para buscar todos os veículos
router.get('/vehicles', VehicleController.getVehicles);

// Rota para buscar um veículo por ID
router.get('/vehicles/:id', VehicleController.getVehicleById);

// Rota para atualizar um veículo por ID
router.put('/vehicles/:id', VehicleController.updateVehicle);

// Rota para deletar um veículo por ID
router.delete('/vehicles/:id', VehicleController.deleteVehicle);

export default router;
