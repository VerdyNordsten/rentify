export interface BaseVehicle {
  id: number;
  name: string;
  type: string;
  price: number;
  transmission: string;
  fuel: string;
  airConditioner: boolean;
}

export interface Vehicle extends BaseVehicle {
  image: string;
  seats?: number;
  rating?: number;
  reviews?: number;
  available?: boolean;
}

export interface VehicleDetail extends BaseVehicle {
  images: string[];
  doors: number;
  seats: number;
  distance: number;
  equipment: string[];
}

export interface Car {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  transmission: string;
  fuel: string;
  airConditioner: boolean;
  seats: number;
  rating: number;
  reviews: number;
  available: boolean;
}

export type VehicleFilter = 'all' | 'sedan' | 'suv' | 'sport' | 'van';

export const VEHICLE_TYPES: VehicleFilter[] = ['all', 'sedan', 'suv', 'sport', 'van'];

export const VEHICLE_FILTER_LABELS: Record<VehicleFilter, string> = {
  all: 'All vehicles',
  sedan: 'Sedan',
  suv: 'SUV',
  sport: 'Sport',
  van: 'Van'
};