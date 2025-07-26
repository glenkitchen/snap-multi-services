export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SMS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Snap-Multi-Services</h3>
                <p className="text-gray-400">The Company You Can Trust</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional equipment services and maintenance for air compressors, generators, and air-related equipment. Serving customers with quality and reliability since our establishment.
            </p>
            <div className="text-sm text-gray-400">
              <p>IGWT - Prices Exclude VAT</p>
              <p>Prices are subject to change without notice!</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Air Compressor Servicing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Generator Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Equipment Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Emergency Service
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Routine Inspections
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold">Paul (Equipment Specialist)</p>
                <a href="tel:0843234595" className="hover:text-primary transition-colors">
                  084 323 4595
                </a>
              </div>
              <div>
                <p className="font-semibold">Jason (Service Manager)</p>
                <a href="tel:0828396910" className="hover:text-primary transition-colors">
                  082 839 6910
                </a>
              </div>
              <div className="pt-4 space-y-2">
                <p className="text-gray-400 text-sm">Email:</p>
                <a href="mailto:snaprepair@gmail.com" className="block hover:text-primary transition-colors">
                  snaprepair@gmail.com
                </a>
                <a href="mailto:it@snap123.co.za" className="block hover:text-primary transition-colors">
                  it@snap123.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Snap-Multi-Services. All rights reserved. The Company You Can Trust.</p>
        </div>
      </div>
    </footer>
  );
}