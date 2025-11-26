
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ParallaxHero } from '@/components/parallax-hero';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { QuickViewDialog } from '@/components/quick-view-dialog';
import { useState } from 'react';
import type { Product } from '@/lib/types';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const featuredProducts = products.slice(0, 8);
  const newArrivals = products.slice(8, 12);
  const promotionImage = PlaceHolderImages.find(p => p.id === 'promotion-1');

  const categories = [
    { name: 'Apparel', href: '/products?category=Apparel', image: 'https://picsum.photos/seed/cat-apparel/600/400', hint: 'stylish clothing' },
    { name: 'Accessories', href: '/products?category=Accessories', image: 'https://picsum.photos/seed/cat-accessories/600/400', hint: 'modern accessories' },
    { name: 'Footwear', href: '/products?category=Footwear', image: 'https://picsum.photos/seed/cat-footwear/600/400', hint: 'leather shoes' },
  ];

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="flex flex-col">
      <ParallaxHero />

      <section id="featured" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Collection</h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Discover our handpicked selection of premium products.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="sm:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <ProductCard product={product} onQuickView={handleQuickView} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/products">
                Shop All Products <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Shop by Category</h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Find what you're looking for, faster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link href={category.href} key={category.name} className="group relative block overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={category.hint}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {promotionImage && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden lg:grid lg:grid-cols-2 lg:items-center border-2 border-accent/50 shadow-lg">
              <div className="relative h-64 lg:h-auto lg:self-stretch">
                <Image
                  src={promotionImage.imageUrl}
                  alt={promotionImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={promotionImage.imageHint}
                />
              </div>
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold tracking-tight text-primary">Seasonal Sale</h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  Enjoy up to 30% off on selected items. Embrace the new season with style and sophistication. Limited time offer.
                </p>
                <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/products">
                    Explore the Sale <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">New Arrivals</h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Check out the latest additions to our collection.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
            ))}
          </div>
        </div>
      </section>
      
      <Separator />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Lumina?</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
              </div>
              <h3 className="text-xl font-semibold">Exquisite Quality</h3>
              <p className="mt-2 text-muted-foreground">
                We source only the finest materials to create products that last, combining timeless design with durable craftsmanship.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <h3 className="text-xl font-semibold">Modern Design</h3>
              <p className="mt-2 text-muted-foreground">
                Our design philosophy is rooted in minimalism and elegance, creating pieces that are both modern and timeless.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M12.22 2h-4.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 1.73V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9.28a2 2 0 0 1-2-1.73l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2h-4.44"></path><path d="M7 14h10"></path></svg>
              </div>
              <h3 className="text-xl font-semibold">AI Personalization</h3>
              <p className="mt-2 text-muted-foreground">
                Experience a smarter way to shop with AI-powered recommendations tailored just for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuickViewDialog
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedProduct(null);
          }
        }}
      />
    </div>
  );
}
