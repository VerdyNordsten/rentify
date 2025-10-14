const BrandsShowcase = () => {
  const brands = [
    { id: 1, name: 'Toyota', logo: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/198134ef71-eb33b54ffc92bdc24c09.png' },
    { id: 2, name: 'Ford', logo: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/dc05fc44f8-d183f0841a6b2ca43871.png' },
    { id: 3, name: 'Mercedes-Benz', logo: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1f6065336b-1d66109e75c7ffb88a25.png' },
    { id: 4, name: 'Jeep', logo: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/46b91ce2f4-41b3b51ee7a3233fe826.png' },
    { id: 5, name: 'BMW', logo: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/793f8f999c-e1a6e71c975846630998.png' },
    { id: 6, name: 'Audi', logo: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/dfe5775e25-4f19f6f8eb95cac7247f.png' }
  ];

  return (
    <section className="pb-20">
      <div className="bg-brand-gray-light rounded-2xl p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <img key={brand.id} className="h-8 object-contain" src={brand.logo} alt={`${brand.name} logo, black and white`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsShowcase;