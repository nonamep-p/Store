import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden relative">
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-secondary">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={product.imageHint}
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold truncate">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          {onQuickView && (
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Quick View
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
