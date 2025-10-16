import { useState, useEffect, useRef } from 'react';

interface VehicleGalleryProps {
  images: string[];
  name: string;
}

const VehicleGallery = ({ images, name }: VehicleGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{[key: number]: {width: number, height: number}}>({});
  const galleryRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedImage((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const selectImage = (index: number) => {
    if (isAnimating || index === selectedImage) return;
    setIsAnimating(true);
    setSelectedImage(index);
    setTimeout(() => setIsAnimating(false), 500);
  };


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnimating]);

  useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        setImageDimensions(prev => ({
          ...prev,
          [index]: { width: img.width, height: img.height }
        }));
      };
      img.src = image;
    });
  }, [images]);


  const getImageContainerSize = (index: number) => {
    const dimensions = imageDimensions[index];
    if (!dimensions) return { width: 280, height: 200 };
    
    const aspectRatio = dimensions.width / dimensions.height;
    const maxWidth = window.innerWidth >= 1024 ? 600 : window.innerWidth >= 640 ? 400 : 280;
    const maxHeight = window.innerWidth >= 1024 ? 450 : window.innerWidth >= 640 ? 300 : 200;
    
    let width = maxWidth;
    let height = maxWidth / aspectRatio;
    
    if (height > maxHeight) {
      height = maxHeight;
      width = maxHeight * aspectRatio;
    }
    
    return { width, height };
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8" ref={galleryRef}>
      <div className="relative group">
        <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative h-full flex items-center justify-center">
            {images.map((image, index) => {
              const offset = index - selectedImage;
              const isCurrent = index === selectedImage;
              const zIndex = images.length - Math.abs(offset);
              const containerSize = getImageContainerSize(index);
              
              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-out ${isAnimating ? 'scale-95' : 'scale-100'}`}
                  style={{
                    transform: `
                      translateX(${offset * 220}px)
                      translateZ(${isCurrent ? 50 : -Math.abs(offset) * 100}px)
                      rotateY(${offset * -15}deg)
                      scale(${isCurrent ? 1 : 0.8 - Math.abs(offset) * 0.1})
                    `,
                    zIndex,
                    opacity: isCurrent ? 1 : 0.7 - Math.abs(offset) * 0.2,
                    filter: isCurrent ? 'none' : 'blur(1px)'
                  }}
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                      isCurrent ? 'ring-4 ring-purple-400/50 shadow-2xl shadow-purple-500/30' : 'shadow-xl'
                    }`}
                    style={{
                      width: `${containerSize.width}px`,
                      height: `${containerSize.height}px`
                    }}
                    onClick={() => selectImage(index)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-10"></div>
                    <img
                      className="w-full h-full object-contain"
                      src={image}
                      alt={`${name} view ${index + 1}`}
                    />
                    {isCurrent && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-20">
                        <p className="text-white text-sm font-medium">View {index + 1} of {images.length}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={prevImage}
                className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      selectedImage === index
                        ? 'w-8 bg-gradient-to-r from-purple-400 to-pink-400'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextImage}
                className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default VehicleGallery;