import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import VehicleGallery from '@/components/VehicleGallery';
import VehicleSpecs from '@/components/VehicleSpecs';
import RelatedVehicles from '@/components/RelatedVehicles';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  price: number;
  images: string[];
  transmission: string;
  fuel: string;
  doors: number;
  airConditioner: boolean;
  seats: number;
  distance: number;
  equipment: string[];
}

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [relatedVehicles, setRelatedVehicles] = useState<Vehicle[]>([]);

  // Mock data for vehicles
  const allVehicles: Vehicle[] = React.useMemo(() => [
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
  ], []);

  useEffect(() => {
    // Find the vehicle with the matching ID
    const foundVehicle = allVehicles.find(v => v.id === parseInt(id || '0'));
    
    if (foundVehicle) {
      setVehicle(foundVehicle);
      // Find related vehicles (exclude the current one)
      const related = allVehicles.filter(v => v.id !== foundVehicle.id).slice(0, 6);
      setRelatedVehicles(related);
    } else {
      // If vehicle not found, redirect to vehicles page
      navigate('/vehicles');
    }
  }, [id, navigate, allVehicles]);

  const handleRent = () => {
    console.log(`Renting vehicle: ${vehicle?.name}`);
    // In a real app, this would navigate to a booking form or open a modal
  };

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <section className="py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <VehicleGallery 
            images={vehicle.images} 
            name={vehicle.name} 
          />
          <VehicleSpecs 
            price={vehicle.price}
            transmission={vehicle.transmission}
            fuel={vehicle.fuel}
            doors={vehicle.doors}
            airConditioner={vehicle.airConditioner}
            seats={vehicle.seats}
            distance={vehicle.distance}
            equipment={vehicle.equipment}
            onRent={handleRent}
          />
        </div>
      </section>

      <RelatedVehicles vehicles={relatedVehicles} />
    </Layout>
  );
};

export default VehicleDetail;