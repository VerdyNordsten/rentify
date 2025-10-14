import { Button } from '@/components/ui/button';
import { Settings, Fuel, DoorOpen, Snowflake, Users, Route, Check } from 'lucide-react';

interface VehicleSpecsProps {
  price: number;
  transmission: string;
  fuel: string;
  doors: number;
  airConditioner: boolean;
  seats: number;
  distance: number;
  equipment: string[];
  onRent: () => void;
}

const VehicleSpecs = ({ 
  price, 
  transmission, 
  fuel, 
  doors, 
  airConditioner, 
  seats, 
  distance, 
  equipment,
  onRent 
}: VehicleSpecsProps) => {
  return (
    <div className="pt-4">
      <p className="text-3xl font-bold text-brand-purple mb-8">
        ${price}<span className="text-base font-normal text-brand-gray-medium"> / day</span>
      </p>
      
      <h2 className="text-2xl font-bold mb-6 text-brand-dark">Technical Specification</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <Settings className="w-6 h-6 mb-2 text-brand-gray-medium" />
          <h3 className="font-semibold text-brand-dark">Gear Box</h3>
          <p className="text-sm text-brand-gray-medium">{transmission}</p>
        </div>
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <Fuel className="w-6 h-6 mb-2 text-brand-gray-medium" />
          <h3 className="font-semibold text-brand-dark">Fuel</h3>
          <p className="text-sm text-brand-gray-medium">{fuel}</p>
        </div>
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <DoorOpen className="w-6 h-6 mb-2 text-brand-gray-medium" />
          <h3 className="font-semibold text-brand-dark">Doors</h3>
          <p className="text-sm text-brand-gray-medium">{doors}</p>
        </div>
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <Snowflake className="w-6 h-6 mb-2 text-brand-gray-medium" />
          <h3 className="font-semibold text-brand-dark">Air Conditioner</h3>
          <p className="text-sm text-brand-gray-medium">{airConditioner ? 'Yes' : 'No'}</p>
        </div>
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <Users className="w-6 h-6 mb-2 text-brand-gray-medium" />
          <h3 className="font-semibold text-brand-dark">Seats</h3>
          <p className="text-sm text-brand-gray-medium">{seats}</p>
        </div>
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <Route className="w-6 h-6 mb-2 text-brand-gray-medium" />
          <h3 className="font-semibold text-brand-dark">Distance</h3>
          <p className="text-sm text-brand-gray-medium">{distance}</p>
        </div>
      </div>
      
      <Button 
        className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white py-4 rounded-lg font-semibold text-lg shadow-lg shadow-brand-purple/30 mb-10"
        onClick={onRent}
      >
        Rent a car
      </Button>
      
      <h2 className="text-2xl font-bold mb-6 text-brand-dark">Car Equipment</h2>
      <div className="grid grid-cols-2 gap-4 text-brand-dark">
        {equipment.map((item, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <span className="w-6 h-6 flex items-center justify-center bg-brand-purple/10 rounded-full">
              <Check className="w-3 h-3 text-brand-purple" />
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSpecs;