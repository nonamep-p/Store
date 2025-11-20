import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  }

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
      <CardContent className="p-4 space-y-2">
        <div>
          <h3 className="text-lg font-semibold truncate">
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {onQuickView && (
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="w-full"
            >
              Quick View
            </Button>
          )}
           <Button 
            variant="default" 
            size="sm" 
            onClick={handleAddToCart} 
            disabled={product.stock === 0}
            className="w-full"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
