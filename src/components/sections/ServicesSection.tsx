import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const CheckIcon = (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );

  const ClockIcon = (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
    </svg>
  );

  const WrenchIcon = (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
    </svg>
  );

  const AlertIcon = (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-8h2v6h-2V9z"/>
    </svg>
  );

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional maintenance and repair services that ensure your equipment runs efficiently and lasts longer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={CheckIcon}
            title="Air Compressor Servicing"
            description="Thorough maintenance and performance checks starting from R1,280. Includes certificates."
            price="From R1,280"
            color="primary"
          />
          
          <ServiceCard
            icon={ClockIcon}
            title="Generator Maintenance"
            description="Reliable power solutions with comprehensive checks and service certificates."
            price="POA"
            color="secondary"
          />
          
          <ServiceCard
            icon={WrenchIcon}
            title="Equipment Repairs"
            description="Fast service to minimize your downtime with variable pricing based on equipment type."
            price="Variable Pricing"
            color="accent"
          />
          
          <ServiceCard
            icon={AlertIcon}
            title="Emergency Repairs"
            description="24/7 emergency service to get your equipment back up and running quickly."
            price="24/7 Available"
            color="red"
          />
        </div>
      </div>
    </section>
  );
}