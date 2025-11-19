"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';
import { fetchRecommendations } from '@/app/actions';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface RecommendedProductsProps {
  currentProductDescription: string;
}

export function RecommendedProducts({ currentProductDescription }: RecommendedProductsProps) {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecs() {
      setLoading(true);
      // In a real app, user history would be dynamically sourced.
      const mockUserHistory = `User has viewed products with descriptions like: "${currentProductDescription}". They seem to appreciate minimalist design and high-quality materials.`;
      
      try {
        const result = await fetchRecommendations(mockUserHistory);
        if (result && result.recommendations) {
          setRecommendations(result.recommendations);
        }
      } catch (error) {
        console.error("Failed to fetch recommendations:", error);
      } finally {
        setLoading(false);
      }
    }

    getRecs();
  }, [currentProductDescription]);

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-center mb-10">You Might Also Like</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((rec, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{rec}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/products">
                    View Product <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
