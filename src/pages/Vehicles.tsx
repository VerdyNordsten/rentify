import { useState, useMemo, useEffect } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import VehicleHeroSection from '@/components/VehicleHeroSection';
import VehicleGridSection from '@/components/VehicleGridSection';
import BrandsShowcase from '@/components/BrandsShowcase';
import Footer from '@/components/Footer';
import GradientLayout from '@/components/GradientLayout';
import { VehicleFilter } from '@/types/vehicle';
import { vehicleService } from '@/services/vehicleService';

const Vehicles = () => {
  const [activeFilter, setActiveFilter] = useState<VehicleFilter>('all');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('vehicles-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const vehicles = useMemo(() => vehicleService.getVehicles(), []);

  const filteredVehicles = useMemo(() => {
    return vehicleService.filterVehiclesByType(vehicles, activeFilter);
  }, [activeFilter, vehicles]);

  return (
    <Layout>
      <GradientLayout>
        <Header />
        <VehicleHeroSection
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          isAnimated={isAnimated}
        />
        <VehicleGridSection
          vehicles={filteredVehicles}
          isAnimated={isAnimated}
        />
        <BrandsShowcase />
        <Footer />
      </GradientLayout>
    </Layout>
  );
};

export default Vehicles;