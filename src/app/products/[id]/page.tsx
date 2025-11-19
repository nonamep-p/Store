import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RecommendedProducts } from '@/components/recommended-products';
import { Card } from '@/components/ui/card';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  const allImages = [{ url: product.imageUrl, hint: product.imageHint }, ...product.images];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="md:sticky md:top-24 h-max">
            <Carousel className="w-full">
                <CarouselContent>
                    {allImages.map((image, index) => (
                    <CarouselItem key={index}>
                        <Card className="overflow-hidden">
                        <div className="aspect-square relative">
                            <Image
                                src={image.url}
                                alt={`${product.name} image ${index + 1}`}
                                fill
                                className="object-cover"
                                data-ai-hint={image.hint}
                            />
                        </div>
                        </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
        </div>

        <div>
          <Badge variant="outline">{product.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight my-2">{product.name}</h1>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span>{product.rating} ({product.reviews} reviews)</span>
            <Separator orientation="vertical" className="h-4" />
            <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>
          
          <p className="text-4xl font-bold my-6">${product.price.toFixed(2)}</p>

          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8">
            <Button size="lg" className="w-full md:w-auto" disabled={product.stock === 0}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
          
          <Separator className="my-8" />

          <div>
            <h3 className="text-xl font-semibold mb-4">Product Details</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.longDescription}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 md:mt-24">
        <RecommendedProducts currentProductDescription={product.description} />
      </div>
    </div>
  );
}
