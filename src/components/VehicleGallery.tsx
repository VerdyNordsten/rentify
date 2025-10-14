import { useState } from 'react';

interface VehicleGalleryProps {
  images: string[];
  name: string;
}

const VehicleGallery = ({ images, name }: VehicleGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <h1 className="text-5xl font-extrabold text-brand-dark mb-2">{name}</h1>
      <div className="mb-6 h-[280px] flex items-center justify-center">
        <img 
          className="w-full h-full object-contain filter drop-shadow-lg" 
          src={images[selectedImage]} 
          alt={`${name} main view`} 
        />
      </div>
      <div className="flex justify-center gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`w-32 h-20 rounded-lg overflow-hidden cursor-pointer ${
              selectedImage === index ? 'border-2 border-brand-purple' : ''
            }`}
            onClick={() => setSelectedImage(index)}
          >
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