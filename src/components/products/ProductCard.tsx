import { formatPrice } from '@/data/products';
import type { ProductWithId } from '@/lib/types';

interface ProductCardProps {
  product: ProductWithId;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
          {product.Category}
        </span>
      </div>
      
      <h3 className="font-semibold text-gray-800 mb-3 text-lg">{product.Item}</h3>
      
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">
          {formatPrice(product['Price (ZAR)'])}
        </span>
        
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
          Get Quote
        </button>
      </div>
    </div>
  );
}