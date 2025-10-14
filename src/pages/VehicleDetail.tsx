import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import VehicleDetailSection from '@/components/VehicleDetailSection';
import RelatedVehiclesSection from '@/components/RelatedVehiclesSection';
import BrandsShowcase from '@/components/BrandsShowcase';
import Footer from '@/components/Footer';
import GradientLayout from '@/components/GradientLayout';
import { VehicleDetail as VehicleDetailType } from '@/types/vehicle';
import { vehicleService } from '@/services/vehicleService';

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<VehicleDetailType | null>(null);
  const [relatedVehicles, setRelatedVehicles] = useState<VehicleDetailType[]>([]);

  useEffect(() => {
    const vehicleId = parseInt(id || '0');
    
    const foundVehicle = vehicleService.getVehicleById(vehicleId);
    
    if (foundVehicle) {
      setVehicle(foundVehicle);
      const related = vehicleService.getRelatedVehicles(foundVehicle.id, 6);
      setRelatedVehicles(related);
    } else {
      navigate('/vehicles');
    }
  }, [id, navigate]);

  const handleRent = () => {
    console.log(`Renting vehicle: ${vehicle?.name}`);
  };

  if (!vehicle) {
    return (
      <Layout>
        <GradientLayout>
          <Header />
          <div className="relative z-10 container py-32">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Vehicle Not Found</h1>
              <p className="text-gray-300 mb-8">The vehicle you're looking for doesn't exist or has been removed.</p>
              <button
                onClick={() => navigate('/vehicles')}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Back to Vehicles
              </button>
            </div>
          </div>
        </GradientLayout>
      </Layout>
    );
  }

  return (
    <Layout>
      <GradientLayout>
        <Header />
        <VehicleDetailSection
          vehicle={vehicle}
          onRent={handleRent}
        />
        <RelatedVehiclesSection
          vehicles={relatedVehicles}
        />
        <BrandsShowcase />
        <Footer />
      </GradientLayout>
    </Layout>
  );
};

export default VehicleDetail;