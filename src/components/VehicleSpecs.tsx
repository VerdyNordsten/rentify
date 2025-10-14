import React from 'react';
import { Settings, Fuel, DoorOpen, Snowflake, Users, Route, Check, Calendar } from 'lucide-react';

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

  const specs = [
    {
      icon: Settings,
      label: 'Gear Box',
      value: transmission,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Fuel,
      label: 'Fuel',
      value: fuel,
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: DoorOpen,
      label: 'Doors',
      value: doors.toString(),
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      icon: Snowflake,
      label: 'Air Conditioner',
      value: airConditioner ? 'Yes' : 'No',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      icon: Users,
      label: 'Seats',
      value: seats.toString(),
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      icon: Route,
      label: 'Distance',
      value: distance.toString(),
      gradient: 'from-teal-600 to-green-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm font-medium text-purple-200 mb-4">
          Best Price Guarantee
        </div>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            ${price}
          </span>
          <span className="text-lg sm:text-xl text-gray-300 font-normal"> / day</span>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Technical
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Specifications
          </span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${spec.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center transition-all duration-300 group-hover:border-white/40 group-hover:transform group-hover:scale-105">
                <div className={`relative mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${spec.gradient} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <spec.icon className="w-6 h-6 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${spec.gradient} rounded-xl blur-lg opacity-50`}></div>
                </div>
                
                <h3 className="font-semibold text-white text-sm mb-1">{spec.label}</h3>
                <p className="text-gray-300 text-sm">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="group relative w-full inline-flex items-center justify-center py-4 text-lg font-bold text-white transition-all duration-300 overflow-hidden rounded-xl"
        onClick={onRent}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity"></span>
        <span className="relative flex items-center justify-center w-full">
          <Calendar className="w-5 h-5 mr-3 transform transition-transform duration-300 group-hover:scale-110" />
          Rent This Vehicle
        </span>
      </button>

      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Vehicle
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Equipment
          </span>
        </h2>
        
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {equipment.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 sm:space-x-3 text-white">
                <div className="relative flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-50"></div>
                </div>
                <span className="text-gray-300 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSpecs;