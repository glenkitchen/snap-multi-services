import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCatalog from '@/components/products/ProductCatalog';

export const metadata = {
  title: 'Product Catalog - Snap-Multi-Services',
  description: 'Browse our complete range of air-related equipment, compressors, and maintenance services.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductCatalog />
      <Footer />
    </div>
  );
}