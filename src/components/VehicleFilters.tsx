import { Button } from '@/components/ui/button';
import { VehicleFilter, VEHICLE_FILTER_LABELS } from '@/types/vehicle';

interface VehicleFiltersProps {
  activeFilter: VehicleFilter;
  setActiveFilter: (filter: VehicleFilter) => void;
}

const VehicleFilters = ({ activeFilter, setActiveFilter }: VehicleFiltersProps) => {
  const filters = Object.entries(VEHICLE_FILTER_LABELS).map(([id, label]) => ({
    id: id as VehicleFilter,
    label
  }));

  return (
    <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-4">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? 'default' : 'outline'}
          className={`${
            activeFilter === filter.id
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 transform scale-105'
              : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-lg'
          } px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105`}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default VehicleFilters;