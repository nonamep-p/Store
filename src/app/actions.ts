"use server";

import { getPersonalizedRecommendations } from "@/ai/flows/personalized-product-recommendations";

export async function fetchRecommendations(userHistory: string) {
  try {
    const result = await getPersonalizedRecommendations({
      userHistory,
      numRecommendations: 4,
    });
    return result;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    // Return a default or empty state in case of an error
    return { recommendations: ["Modern Timepiece", "Leather Tote Bag", "Minimalist Desk Lamp", "Comfort-Fit Trousers"] };
  }
}
