"use client";

import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";
import { Star, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface QuickViewDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuickViewDialog({ product, open, onOpenChange }: QuickViewDialogProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover rounded-l-lg"
              data-ai-hint={product.imageHint}
            />
          </div>
          <div className="p-8 flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight">{product.name}</h2>
            <div className="mt-2 flex items-center gap-4">
              <Badge variant="outline">{product.category}</Badge>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">{product.description}</p>
            <div className="flex-grow" />
            <div className="mt-8">
              <p className="text-4xl font-extrabold">${product.price.toFixed(2)}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <Link href={`/products/${product.id}`}>View Full Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
