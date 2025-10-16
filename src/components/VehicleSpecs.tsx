import { Settings, Fuel, DoorOpen, Snowflake, Users, Route, Calendar, Gauge, Package, Zap } from 'lucide-react';
import { VehicleDetail } from '@/types/vehicle';

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
  vehicle?: VehicleDetail;
}

const VehicleSpecs = ({
  price,
  transmission,
  fuel,
  doors,
  airConditioner,
  seats,
  distance,
  onRent,
  vehicle
}: VehicleSpecsProps) => {

  const coreSpecs = [
    {
      icon: Settings,
      label: 'Transmission',
      value: transmission,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Fuel,
      label: 'Fuel Type',
      value: fuel,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      label: 'Seats',
      value: `${seats} Pass`,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: DoorOpen,
      label: 'Doors',
      value: `${doors}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Snowflake,
      label: 'AC',
      value: airConditioner ? 'Yes' : 'No',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Route,
      label: 'Mileage',
      value: `${distance}k km`,
      color: 'from-teal-500 to-green-500'
    }
  ];

  const performanceSpecs = vehicle ? [
    ...(vehicle.engine ? [{
      icon: Settings,
      label: 'Engine',
      value: vehicle.engine,
      color: 'from-yellow-500 to-orange-500'
    }] : []),
    ...(vehicle.horsepower ? [{
      icon: Zap,
      label: 'Power',
      value: `${vehicle.horsepower} HP`,
      color: 'from-red-500 to-pink-500'
    }] : []),
    ...(vehicle.acceleration ? [{
      icon: Gauge,
      label: '0-100',
      value: vehicle.acceleration,
      color: 'from-purple-500 to-indigo-500'
    }] : []),
    ...(vehicle.topSpeed ? [{
      icon: Gauge,
      label: 'Top Speed',
      value: vehicle.topSpeed,
      color: 'from-cyan-500 to-blue-500'
    }] : []),
    ...(vehicle.fuelEfficiency ? [{
      icon: Fuel,
      label: 'Fuel Economy',
      value: vehicle.fuelEfficiency,
      color: 'from-green-500 to-teal-500'
    }] : []),
    ...(vehicle.luggageCapacity ? [{
      icon: Package,
      label: 'Luggage',
      value: vehicle.luggageCapacity,
      color: 'from-amber-500 to-yellow-500'
    }] : [])
  ] : [];

  return (
    <div className="space-y-4">
      <div className="relative flex justify-center">
        <div className="w-[250px]">
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-3 border border-purple-500/30 shadow-2xl">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-xs text-purple-300 text-center">Daily Rate</div>
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-lg">
                  ${price}
                </span>
              </div>
              
              <button
                className="group relative w-full transform perspective-1000 transition-all duration-300 hover:scale-105 hover:translateZ-20"
                onClick={onRent}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl transform translateZ-10"></div>
                <div className="relative px-4 py-2 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg transform translateZ-20">
                  <span className="relative flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    Rent Now
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-300"></div>
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/20 shadow-xl transform translateZ-10 group-hover:translateZ-20 transition-all duration-300">
            <h3 className="text-sm font-semibold text-white mb-3 transform translateZ-20">Core Specs</h3>
            <div className="space-y-3">
              {coreSpecs.map((spec, index) => (
                <div key={index} className="flex items-center gap-3 group/item">
                  <div className={`relative w-8 h-8 rounded-lg bg-gradient-to-br ${spec.color} flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6 shadow-lg`}>
                    <spec.icon className="w-4 h-4 text-white transform translateZ-10" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${spec.color} rounded-lg blur-md opacity-50`}></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-gray-400 transform translateZ-10">{spec.label}</div>
                    <div className="text-sm font-semibold text-white truncate transform translateZ-10">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {performanceSpecs.length > 0 && (
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-4 border border-blue-500/20 shadow-xl transform translateZ-10 group-hover:translateZ-20 transition-all duration-300">
              <h3 className="text-sm font-semibold text-white mb-3 transform translateZ-20">Performance</h3>
              <div className="space-y-3">
                {performanceSpecs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3 group/item">
                    <div className={`relative w-8 h-8 rounded-lg bg-gradient-to-br ${spec.color} flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:-rotate-6 shadow-lg`}>
                      <spec.icon className="w-4 h-4 text-white transform translateZ-10" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${spec.color} rounded-lg blur-md opacity-50`}></div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-gray-400 transform translateZ-10">{spec.label}</div>
                      <div className="text-sm font-semibold text-white truncate transform translateZ-10">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleSpecs;