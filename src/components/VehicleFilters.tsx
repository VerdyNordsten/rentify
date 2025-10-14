import { Button } from '@/components/ui/button';

interface VehicleFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const VehicleFilters = ({ activeFilter, setActiveFilter }: VehicleFiltersProps) => {
  const filters = [
    { id: 'all', label: 'All vehicles', icon: null },
    { id: 'sedan', label: 'Sedan', icon: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/21d75a4476-0f0930aca3d763ce80f3.png' },
    { id: 'cabriolet', label: 'Cabriolet', icon: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/77f4acbf32-16ca6940a3fff73d8294.png' },
    { id: 'pickup', label: 'Pickup', icon: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c2d79bf0f9-306c80a49e3654abb592.png' },
    { id: 'suv', label: 'SUV', icon: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/90559733be-0171dcf75ce3a4467b75.png' },
    { id: 'minivan', label: 'Minivan', icon: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/480d9e7c70-e13033bda65d1c4c3707.png' }
  ];

  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? 'default' : 'outline'}
          className={`${
            activeFilter === filter.id
              ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20'
              : 'bg-brand-gray-100 text-brand-gray-medium hover:bg-brand-gray-200'
          } px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-x-2`}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.icon && (
            <img className="w-6 h-4 object-contain" src={filter.icon} alt={`icon of a ${filter.label.toLowerCase()} car, line art, simple, black and white`} />
          )}
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default VehicleFilters;