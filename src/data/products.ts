import type { Product, ProductWithId } from '@/lib/types';
import productsData from '../../assets/products.json';

export const products: ProductWithId[] = (productsData as Product[]).map((product, index) => ({
  ...product,
  id: `product-${index + 1}`
}));

export const categories = Array.from(new Set(products.map(p => p.Category))).sort();

export function getProductsByCategory(category: string): ProductWithId[] {
  return products.filter(p => p.Category === category);
}

export function searchProducts(query: string): ProductWithId[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.Item.toLowerCase().includes(lowercaseQuery) ||
    p.Category.toLowerCase().includes(lowercaseQuery)
  );
}

export function formatPrice(price: number | string): string {
  if (typeof price === 'string') {
    return price; // Handle POA, NLA, etc.
  }
  return `R${price.toLocaleString()}`;
}