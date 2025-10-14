import { useState } from 'react';

interface VehicleGalleryProps {
  images: string[];
  name: string;
}

const VehicleGallery = ({ images, name }: VehicleGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20"></div>
        
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <img
              className="w-full h-full object-contain max-h-[300px] sm:max-h-[400px] lg:max-h-none"
              src={images[selectedImage]}
              alt={`${name} main view`}
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 backdrop-blur-sm text-white rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      </div>

      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 px-1">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 lg:w-32 lg:h-20 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
              selectedImage === index
                ? 'ring-2 ring-purple-400 scale-105'
                : 'opacity-70 hover:opacity-100 hover:scale-105'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            {selectedImage === index && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl blur-md opacity-30"></div>
            )}
            
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`${name} view ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleGallery;