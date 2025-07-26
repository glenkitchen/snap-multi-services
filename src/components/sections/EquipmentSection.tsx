import EquipmentCard from "./EquipmentCard";

export default function EquipmentSection() {
  const airEquipmentItems = [
    "PCL MK4 Tyre Inflator (New: R1,680, Recon: R350)",
    "Electronic Air Gauges (Qube: R10,200, Hand: R2,280)",
    "Hose Couplers & Connectors (From R60)",
    "Hose Reels (From R50 p/m)",
  ];

  const compressorItems = [
    "Yearly Service & Maintenance",
    "3-Yearly Vessel Test with New OCH-Act",
    "Includes Certificate's",
    "From R1,280",
  ];

  const generatorItems = [
    "Professional Services & Maintenance",
    "Includes Service Certificate",
    "Reliable Power Solutions",
    "POA Pricing",
  ];

  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Equipment Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality equipment for every need. Discover our range of air-related
            equipment, compressors, and generators.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <EquipmentCard
            title="Air-Related Equipment"
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            imageAlt="Air Equipment"
            items={airEquipmentItems}
            buttonText="View Air Equipment"
            gradient="blue"
          />

          <EquipmentCard
            title="Air Compressors"
            imageSrc="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            imageAlt="Air Compressor"
            items={compressorItems}
            buttonText="Schedule Service"
            gradient="green"
          />

          <EquipmentCard
            title="Generators"
            imageSrc="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            imageAlt="Generator"
            items={generatorItems}
            buttonText="Request Generator Service"
            gradient="yellow"
          />
        </div>
      </div>
    </section>
  );
}
