"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { Product } from "@/lib/types";
import { ProductCard } from "./product-card";
import { Skeleton } from "./ui/skeleton";
import { QuickViewDialog } from "./quick-view-dialog";

interface ProductListProps {
  initialProducts: Product[];
  allProducts: Product[];
}

const PAGE_SIZE = 8;

export function ProductList({ initialProducts, allProducts }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialProducts.length === PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const loader = useRef<HTMLDivElement>(null);

  const loadMoreProducts = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const newProducts = allProducts.slice(page * PAGE_SIZE, nextPage * PAGE_SIZE);
      setProducts(prev => [...prev, ...newProducts]);
      setPage(nextPage);
      setHasMore(nextPage * PAGE_SIZE < allProducts.length);
      setLoading(false);
    }, 500); // Simulate network delay
  }, [page, allProducts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    const currentLoader = loader.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, loading, loadMoreProducts]);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
        ))}
      </div>
      <div ref={loader} className="flex justify-center py-8">
        {hasMore && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-[250px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </div>
            ))}
          </div>
        )}
      </div>

      <QuickViewDialog
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedProduct(null);
          }
        }}
      />
    </>
  );
}
