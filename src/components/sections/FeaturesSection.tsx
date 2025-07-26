import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      icon: '95%',
      title: 'Equipment Failure Prevention',
      description: '95% of equipment failures can be prevented with regular maintenance. Our expert team ensures your machinery stays in top condition.',
      color: 'bg-primary'
    },
    {
      icon: '20%',
      title: 'Cost Reduction',
      description: '20% reduction in operating costs with proper servicing. Save money while extending equipment lifespan.',
      color: 'bg-secondary'
    },
    {
      icon: '24/7',
      title: 'Emergency Support',
      description: 'Round-the-clock emergency repair services to minimize downtime and keep your operations running.',
      color: 'bg-accent'
    },
    {
      icon: '✓',
      title: 'Guaranteed Service',
      description: 'Experience and expertise you can trust for all your equipment maintenance requirements.',
      color: 'bg-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Snap-Multi-Services?</h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional Workshop"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            
            {/* Overlay stats */}
            <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold">80%</div>
                    <div className="text-sm uppercase tracking-wide">Repeat Customers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">50+</div>
                    <div className="text-sm uppercase tracking-wide">Unique Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}