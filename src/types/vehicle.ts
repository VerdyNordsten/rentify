export interface BaseVehicle {
  id: number;
  name: string;
  type: string;
  category?: string;
  price: number;
  transmission: string;
  fuel: string;
  airConditioner: boolean;
  year?: number;
  brand?: string;
  model?: string;
  color?: string;
  engine?: string;
  horsepower?: number;
  acceleration?: string;
  topSpeed?: string;
  fuelEfficiency?: string;
  luggageCapacity?: string;
  features?: string[];
  description?: string;
}

export interface Vehicle extends BaseVehicle {
  image: string;
  thumbnail?: string;
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
  rentalTerms?: {
    minimumAge: number;
    licenseRequired: boolean;
    securityDeposit: number;
    insuranceIncluded: boolean;
    mileageLimit: number;
    additionalDriverFee: number;
  };
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