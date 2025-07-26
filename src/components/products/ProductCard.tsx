import { formatPrice } from "@/data/products";
import type { ProductWithId } from "@/lib/types";
import { ProductButton } from "@/components/ui/WhatsAppButton";

interface ProductCardProps {
  product: ProductWithId;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-border">
      <div className="mb-4">
        <span className="text-xs font-medium text-primary-foreground bg-primary/20 px-2 py-1 rounded-full">
          {product.Category}
        </span>
      </div>

      <h3 className="font-semibold text-foreground mb-3 text-lg">
        {product.Item}
      </h3>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">
          {formatPrice(product["Price (ZAR)"])}
        </span>

        <ProductButton
          product={product.Item}
          category={product.Category}
          price={product["Price (ZAR)"]}
          variant="primary"
          size="sm"
          className="px-4 py-2 text-sm"
        />
      </div>
    </div>
  );
}
