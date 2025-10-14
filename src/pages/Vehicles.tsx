import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import VehicleFilters from '@/components/VehicleFilters';
import VehicleCard from '@/components/VehicleCard';
import BrandsShowcase from '@/components/BrandsShowcase';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  transmission: string;
  fuel: string;
  airConditioner: boolean;
}

const Vehicles = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const vehicles: Vehicle[] = React.useMemo(() => [
    {
      id: 1,
      name: 'Mercedes',
      type: 'Sedan',
      price: 25,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-d9fca8cede8225d45f58.png',
      transmission: 'Automat',
      fuel: 'PB 95',
      airConditioner: true
    },
    {
      id: 2,
      name: 'Mercedes',
      type: 'Sport',
      price: 50,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-48cdef73b7059de36379.png',
      transmission: 'Manual',
      fuel: 'PB 95',
      airConditioner: true
    },
    {
      id: 3,
      name: 'Mercedes',
      type: 'Sedan',
      price: 45,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-d9fca8cede8225d45f58.png',
      transmission: 'Automat',
      fuel: 'PB 95',
      airConditioner: true
    },
    {
      id: 4,
      name: 'Porsche',
      type: 'SUV',
      price: 40,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8831631dde-fad8e357b7fa2c110b59.png',
      transmission: 'Automat',
      fuel: 'PB 95',
      airConditioner: true
    },
    {
      id: 5,
      name: 'Toyota',
      type: 'Sedan',
      price: 35,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f65c04fa3f-ff11127263029d9ccb17.png',
      transmission: 'Manual',
      fuel: 'PB 95',
      airConditioner: true
    },
    {
      id: 6,
      name: 'Porsche',
      type: 'SUV',
      price: 50,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8831631dde-fad8e357b7fa2c110b59.png',
      transmission: 'Automat',
      fuel: 'PB 95',
      airConditioner: true
    },
    {
      id: 7,
      name: 'Mercedes',
      type: 'Van',
      price: 50,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-f7ed9ca8ae092aab6059.png',
      transmission: 'Automat',
      fuel: 'PB 95',
      airConditioner: true
    },
    {
      id: 8,
      name: 'Toyota',
      type: 'Sport',
      price: 60,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f65c04fa3f-ef744d3e412e1a733ece.png',
      transmission: 'Manual',
      fuel: 'PB 95',
      airConditioner: true
    },
    {
      id: 9,
      name: 'Maybach',
      type: 'Sedan',
      price: 70,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ed13550e-aff323a4d54037e04cec.png',
      transmission: 'Automat',
      fuel: 'PB 95',
      airConditioner: true
    }
  ], []);

  const filteredVehicles = useMemo(() => {
    if (activeFilter === 'all') {
      return vehicles;
    }
    
    return vehicles.filter(vehicle => 
      vehicle.type.toLowerCase() === activeFilter
    );
  }, [activeFilter, vehicles]);

  return (
    <Layout>
      <section className="py-16">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-brand-dark">Select a vehicle group</h1>
        </div>
        <VehicleFilters 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />
      </section>

      <section className="pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      <BrandsShowcase />
    </Layout>
  );
};

export default Vehicles;