import { jest } from '@jest/globals';
import VehicleService from '../services/vehicleService';
import VehicleModel, { IVehicle } from '../models/vehicleModels'; // Verifique se o caminho está correto
import mongoose from 'mongoose';

jest.mock('../models/vehicleModels', () => ({
  create: jest.fn()
}));

describe('VehicleService', () => {
  it('should create a vehicle', async () => {
    jest.setTimeout(15000); // Aumenta o tempo limite para 15 segundos

    const vehicleData: IVehicle = {
      make: 'Honda',
      model: 'CB500',
      year: 2021,
      vin: '1234567890',
      owner: new mongoose.Types.ObjectId(),
    } as IVehicle;

    // Corrige a tipagem do mock da função create
    (VehicleModel.create as jest.Mock).mockResolvedValue(vehicleData);
    const vehicle = await VehicleService.createVehicle(vehicleData);
    expect(vehicle).toHaveProperty('_id');
    expect(vehicle.make).toBe(vehicleData.make);
  });
});
