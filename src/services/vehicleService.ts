import VehicleModel,{IVehicle} from '../models/vehicleModels';

// Serviço para lidar com operações relacionadas a veículos
class VehicleService {
  // Cria um novo veículo
  async createVehicle(vehicleData: IVehicle): Promise<IVehicle> {
    const vehicle = new VehicleModel(vehicleData);
    return vehicle.save();
  }

  // Retorna todos os veículos
  async getVehicles(): Promise<IVehicle[]> {
    return VehicleModel.find().populate('owner', 'name email');
  }

  // Retorna um veículo pelo ID
  async getVehicleById(id: string): Promise<IVehicle | null> {
    return VehicleModel.findById(id).populate('owner', 'name email');
  }

  // Atualiza um veículo
  async updateVehicle(id: string, vehicleData: Partial<IVehicle>): Promise<IVehicle | null> {
    return VehicleModel.findByIdAndUpdate(id, vehicleData, { new: true });
  }

  // Deleta um veículo
  async deleteVehicle(id: string): Promise<IVehicle | null> {
    return VehicleModel.findByIdAndDelete(id);
  }
}

export default new VehicleService();
