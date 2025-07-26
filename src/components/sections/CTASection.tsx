export default function CTASection() {
  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Contact us today for a free consultation and discover how we can help optimize your equipment performance while reducing operating costs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Paul</h3>
              <p className="text-green-100 mb-4">Equipment Specialist</p>
              <a 
                href="tel:0843234595" 
                className="text-yellow-300 text-lg font-semibold hover:text-yellow-200 transition-colors"
              >
                084 323 4595
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Jason</h3>
              <p className="text-green-100 mb-4">Service Manager</p>
              <a 
                href="tel:0828396910" 
                className="text-yellow-300 text-lg font-semibold hover:text-yellow-200 transition-colors"
              >
                082 839 6910
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
              Request Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Schedule Service
            </button>
          </div>

          <div className="mt-8 flex justify-center space-x-8">
            <a 
              href="mailto:snaprepair@gmail.com" 
              className="text-green-100 hover:text-white transition-colors"
            >
              snaprepair@gmail.com
            </a>
            <a 
              href="mailto:it@snap123.co.za" 
              className="text-green-100 hover:text-white transition-colors"
            >
              it@snap123.co.za
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}