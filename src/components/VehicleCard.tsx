import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Fuel, Snowflake } from 'lucide-react';

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

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <Card className="bg-brand-gray-light border-0">
      <CardHeader className="pb-4">
        <div className="h-[150px] flex items-center justify-center">
          <img className="w-full h-full object-contain filter drop-shadow-md" src={vehicle.image} alt={`${vehicle.name} ${vehicle.type}`} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <CardTitle className="text-xl">{vehicle.name}</CardTitle>
            <p className="text-brand-gray-medium text-sm">{vehicle.type}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-brand-purple">${vehicle.price}</p>
            <p className="text-brand-gray-medium text-sm">per day</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-brand-gray-medium">
          <span className="flex items-center gap-x-2">
            <Settings className="w-4 h-4" /> {vehicle.transmission}
          </span>
          <span className="flex items-center gap-x-2">
            <Fuel className="w-4 h-4" /> {vehicle.fuel}
          </span>
          <span className="flex items-center gap-x-2">
            <Snowflake className="w-4 h-4" /> {vehicle.airConditioner ? 'Air Conditioner' : 'No Air Conditioner'}
          </span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Link 
          to={`/vehicles/${vehicle.id}`}
          className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-medium py-3 rounded-lg inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;