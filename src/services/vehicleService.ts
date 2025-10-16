import { Vehicle, VehicleDetail } from '@/types/vehicle';
import {
  vehicleSeedData,
  vehicleDetailSeedData,
  getVehicleDetailById as getVehicleDetailByIdFromSeed,
  getRelatedVehicles as getRelatedVehiclesFromSeed,
  filterVehiclesByType as filterVehiclesByTypeFromSeed,
  getVehiclesByCategory,
  getFeaturedVehicles
} from '@/data/vehicleSeedData';

export const mockVehicles: Vehicle[] = vehicleSeedData;
export const mockVehicleDetails: VehicleDetail[] = vehicleDetailSeedData;

export const vehicleService = {
  getVehicles: (): Vehicle[] => {
    return mockVehicles;
  },

  getVehicleById: (id: number): VehicleDetail | undefined => {
    return getVehicleDetailByIdFromSeed(id);
  },

  getRelatedVehicles: (currentId: number, limit: number = 6): VehicleDetail[] => {
    return getRelatedVehiclesFromSeed(currentId, limit);
  },

  filterVehiclesByType: (vehicles: Vehicle[], filterType: string): Vehicle[] => {
    return filterVehiclesByTypeFromSeed(vehicles, filterType);
  },

  getVehiclesByCategory: (category: string): Vehicle[] => {
    return getVehiclesByCategory(category);
  },

  getFeaturedVehicles: (limit: number = 6): Vehicle[] => {
    return getFeaturedVehicles(limit);
  },

  async fetchVehicles(): Promise<Vehicle[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.getVehicles();
  },

  async fetchVehicleById(id: number): Promise<VehicleDetail | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const vehicle = this.getVehicleById(id);
    return vehicle || null;
  },

  async fetchRelatedVehicles(currentId: number, limit: number = 6): Promise<VehicleDetail[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return this.getRelatedVehicles(currentId, limit);
  },

  async fetchVehiclesByCategory(category: string): Promise<Vehicle[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return this.getVehiclesByCategory(category);
  },

  async fetchFeaturedVehicles(limit: number = 6): Promise<Vehicle[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.getFeaturedVehicles(limit);
  }
};