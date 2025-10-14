import { Button } from '@/components/ui/button';

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
          <i className="fa-solid fa-gears text-2xl mb-2 text-brand-gray-medium"></i>
          <h3 className="font-semibold text-brand-dark">Gear Box</h3>
          <p className="text-sm text-brand-gray-medium">{transmission}</p>
        </div>
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <i className="fa-solid fa-gas-pump text-2xl mb-2 text-brand-gray-medium"></i>
          <h3 className="font-semibold text-brand-dark">Fuel</h3>
          <p className="text-sm text-brand-gray-medium">{fuel}</p>
        </div>
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <i className="fa-solid fa-car-door text-2xl mb-2 text-brand-gray-medium"></i>
          <h3 className="font-semibold text-brand-dark">Doors</h3>
          <p className="text-sm text-brand-gray-medium">{doors}</p>
        </div>
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <i className="fa-solid fa-snowflake text-2xl mb-2 text-brand-gray-medium"></i>
          <h3 className="font-semibold text-brand-dark">Air Conditioner</h3>
          <p className="text-sm text-brand-gray-medium">{airConditioner ? 'Yes' : 'No'}</p>
        </div>
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <i className="fa-solid fa-user-group text-2xl mb-2 text-brand-gray-medium"></i>
          <h3 className="font-semibold text-brand-dark">Seats</h3>
          <p className="text-sm text-brand-gray-medium">{seats}</p>
        </div>
        <div className="bg-brand-gray-light rounded-lg p-4 text-center">
          <i className="fa-solid fa-route text-2xl mb-2 text-brand-gray-medium"></i>
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
              <i className="fa-solid fa-check text-brand-purple text-xs"></i>
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSpecs;