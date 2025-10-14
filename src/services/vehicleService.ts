import { Vehicle, VehicleDetail, Car } from '@/types/vehicle';

export const mockVehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Mercedes',
    type: 'Sedan',
    price: 25,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-d9fca8cede8225d45f58.png',
    transmission: 'Automat',
    fuel: 'PB 95',
    airConditioner: true,
    seats: 4,
    rating: 4.5,
    reviews: 12,
    available: true
  },
  {
    id: 2,
    name: 'Mercedes',
    type: 'Sport',
    price: 50,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-48cdef73b7059de36379.png',
    transmission: 'Manual',
    fuel: 'PB 95',
    airConditioner: true,
    seats: 2,
    rating: 4.8,
    reviews: 8,
    available: true
  },
  {
    id: 3,
    name: 'Mercedes',
    type: 'Sedan',
    price: 45,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-d9fca8cede8225d45f58.png',
    transmission: 'Automat',
    fuel: 'PB 95',
    airConditioner: true,
    seats: 4,
    rating: 4.6,
    reviews: 15,
    available: true
  },
  {
    id: 4,
    name: 'Porsche',
    type: 'SUV',
    price: 40,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8831631dde-fad8e357b7fa2c110b59.png',
    transmission: 'Automat',
    fuel: 'PB 95',
    airConditioner: true,
    seats: 5,
    rating: 4.7,
    reviews: 20,
    available: true
  },
  {
    id: 5,
    name: 'Toyota',
    type: 'Sedan',
    price: 35,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f65c04fa3f-ff11127263029d9ccb17.png',
    transmission: 'Manual',
    fuel: 'PB 95',
    airConditioner: true,
    seats: 5,
    rating: 4.4,
    reviews: 25,
    available: true
  },
  {
    id: 6,
    name: 'Porsche',
    type: 'SUV',
    price: 50,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8831631dde-fad8e357b7fa2c110b59.png',
    transmission: 'Automat',
    fuel: 'PB 95',
    airConditioner: true,
    seats: 5,
    rating: 4.9,
    reviews: 18,
    available: true
  },
  {
    id: 7,
    name: 'Mercedes',
    type: 'Van',
    price: 50,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-f7ed9ca8ae092aab6059.png',
    transmission: 'Automat',
    fuel: 'PB 95',
    airConditioner: true,
    seats: 7,
    rating: 4.3,
    reviews: 10,
    available: true
  },
  {
    id: 8,
    name: 'Toyota',
    type: 'Sport',
    price: 60,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f65c04fa3f-ef744d3e412e1a733ece.png',
    transmission: 'Manual',
    fuel: 'PB 95',
    airConditioner: true,
    seats: 2,
    rating: 4.8,
    reviews: 14,
    available: true
  },
  {
    id: 9,
    name: 'Maybach',
    type: 'Sedan',
    price: 70,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-aff323a4d54037e04cec.png',
    transmission: 'Automat',
    fuel: 'PB 95',
    airConditioner: true,
    seats: 4,
    rating: 5.0,
    reviews: 22,
    available: false
  }
];

export const mockVehicleDetails: VehicleDetail[] = [
  {
    id: 1,
    name: 'BMW',
    type: 'Sedan',
    price: 25,
    images: [
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/18d0463bd8-7f2699ab8aca65fe00a9.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-f4acf43bccbd7aaeb551.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-5406c26771f8dc9c8139.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-fe5df914ccd539a2263d.png'
    ],
    transmission: 'Automat',
    fuel: 'Petrol',
    doors: 2,
    airConditioner: true,
    seats: 5,
    distance: 500,
    equipment: ['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner']
  },
  {
    id: 2,
    name: 'Mercedes',
    type: 'Sedan',
    price: 25,
    images: [
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-e05063664a2e198ef0d1.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-f4acf43bccbd7aaeb551.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-5406c26771f8dc9c8139.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-fe5df914ccd539a2263d.png'
    ],
    transmission: 'Automat',
    fuel: 'PB 95',
    doors: 4,
    airConditioner: true,
    seats: 5,
    distance: 500,
    equipment: ['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner']
  },
  {
    id: 3,
    name: 'Mercedes',
    type: 'Sport',
    price: 50,
    images: [
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-2e7d03469d687b8ccf94.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-f4acf43bccbd7aaeb551.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-5406c26771f8dc9c8139.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-fe5df914ccd539a2263d.png'
    ],
    transmission: 'Automat',
    fuel: 'PB 95',
    doors: 2,
    airConditioner: true,
    seats: 2,
    distance: 500,
    equipment: ['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner']
  },
  {
    id: 4,
    name: 'Mercedes',
    type: 'Sedan',
    price: 45,
    images: [
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-e05063664a2e198ef0d1.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-f4acf43bccbd7aaeb551.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-5406c26771f8dc9c8139.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-fe5df914ccd539a2263d.png'
    ],
    transmission: 'Automat',
    fuel: 'PB 95',
    doors: 4,
    airConditioner: true,
    seats: 5,
    distance: 500,
    equipment: ['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner']
  },
  {
    id: 5,
    name: 'Porsche',
    type: 'SUV',
    price: 40,
    images: [
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/8831631dde-c8eaf3e9ad98a23b18d7.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-f4acf43bccbd7aaeb551.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-5406c26771f8dc9c8139.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-fe5df914ccd539a2263d.png'
    ],
    transmission: 'Automat',
    fuel: 'PB 95',
    doors: 4,
    airConditioner: true,
    seats: 5,
    distance: 500,
    equipment: ['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner']
  },
  {
    id: 6,
    name: 'Toyota',
    type: 'Sedan',
    price: 35,
    images: [
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/f65c04fa3f-12f54ab1aa038e5ac597.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-f4acf43bccbd7aaeb551.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-5406c26771f8dc9c8139.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-fe5df914ccd539a2263d.png'
    ],
    transmission: 'Automat',
    fuel: 'PB 95',
    doors: 4,
    airConditioner: true,
    seats: 5,
    distance: 500,
    equipment: ['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner']
  },
  {
    id: 7,
    name: 'Porsche',
    type: 'SUV',
    price: 50,
    images: [
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/8831631dde-c8eaf3e9ad98a23b18d7.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-f4acf43bccbd7aaeb551.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-5406c26771f8dc9c8139.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/5b396017ed-fe5df914ccd539a2263d.png'
    ],
    transmission: 'Automat',
    fuel: 'PB 95',
    doors: 4,
    airConditioner: true,
    seats: 5,
    distance: 500,
    equipment: ['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner']
  }
];

export const mockCars: Car[] = [
  {
    id: 1,
    name: 'Mercedes E-Class',
    type: 'Luxury Sedan',
    price: 89,
    image: 'https://cdn.pixabay.com/photo/2021/08/31/19/37/lamborghini-aventador-6589974_1280.png',
    transmission: 'Automatic',
    fuel: 'Premium',
    airConditioner: true,
    seats: 5,
    rating: 4.8,
    reviews: 124,
    available: true
  },
  {
    id: 2,
    name: 'Mercedes AMG GT',
    type: 'Sports Car',
    price: 150,
    image: 'https://cdn.pixabay.com/photo/2021/08/31/19/37/lamborghini-aventador-6589974_1280.png',
    transmission: 'Automatic',
    fuel: 'Premium',
    airConditioner: true,
    seats: 2,
    rating: 4.9,
    reviews: 89,
    available: true
  },
  {
    id: 3,
    name: 'Mercedes S-Class',
    type: 'Ultra Luxury',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2021/08/31/19/37/lamborghini-aventador-6589974_1280.png',
    transmission: 'Automatic',
    fuel: 'Premium',
    airConditioner: true,
    seats: 5,
    rating: 4.9,
    reviews: 156,
    available: false
  },
  {
    id: 4,
    name: 'Porsche Cayenne',
    type: 'Premium SUV',
    price: 110,
    image: 'https://cdn.pixabay.com/photo/2021/08/31/19/37/lamborghini-aventador-6589974_1280.png',
    transmission: 'Automatic',
    fuel: 'Premium',
    airConditioner: true,
    seats: 7,
    rating: 4.7,
    reviews: 203,
    available: true
  },
  {
    id: 5,
    name: 'Toyota Camry',
    type: 'Comfort Sedan',
    price: 65,
    image: 'https://pictures.dealer.com/fd-DIG_IMAGES/e13f44c9b358594bb1df4d98bab1d6f2.png',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    airConditioner: true,
    seats: 5,
    rating: 4.5,
    reviews: 312,
    available: true
  },
  {
    id: 6,
    name: 'Porsche Macan',
    type: 'Sport SUV',
    price: 95,
    image: 'https://di-uploads-pod4.dealerinspire.com/porscheexchange/uploads/2024/03/2024-Porsche-718-Cayman.png',
    transmission: 'Automatic',
    fuel: 'Premium',
    airConditioner: true,
    seats: 5,
    rating: 4.8,
    reviews: 178,
    available: true
  }
];

export const vehicleService = {
  getVehicles: (): Vehicle[] => {
    return mockVehicles;
  },

  getVehicleById: (id: number): VehicleDetail | undefined => {
    return mockVehicleDetails.find(vehicle => vehicle.id === id);
  },

  getRelatedVehicles: (currentId: number, limit: number = 6): VehicleDetail[] => {
    return mockVehicleDetails
      .filter(vehicle => vehicle.id !== currentId)
      .slice(0, limit);
  },

  getCars: (): Car[] => {
    return mockCars;
  },

  filterVehiclesByType: (vehicles: Vehicle[], filterType: string): Vehicle[] => {
    if (filterType === 'all') {
      return vehicles;
    }
    
    return vehicles.filter(vehicle => 
      vehicle.type.toLowerCase() === filterType
    );
  }
};