// This is a server-side file!
'use server';

/**
 * @fileOverview Personalized product recommendations flow using Genkit.
 *
 * This file defines a Genkit flow that generates personalized product
 * recommendations based on user browsing history and purchase behavior.
 *
 * @exports {
 *   getPersonalizedRecommendations,
 *   PersonalizedRecommendationsInput,
 *   PersonalizedRecommendationsOutput,
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * Input schema for personalized product recommendations.
 */
const PersonalizedRecommendationsInputSchema = z.object({
  userHistory: z
    .string()
    .describe(
      'A string containing the user purchase history and browsing history.'
    ),
  numRecommendations: z
    .number()
    .default(3)
    .describe('The number of product recommendations to return.'),
});

/**
 * Input type for personalized product recommendations.
 */
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

/**
 * Output schema for personalized product recommendations.
 */
const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of product recommendations.'),
});

/**
 * Output type for personalized product recommendations.
 */
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

/**
 * Flow for generating personalized product recommendations.
 */
const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedRecommendationsPrompt(input);
    return output!;
  }
);

/**
 * Prompt for generating personalized product recommendations.
 */
const personalizedRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `Based on the user\'s history: {{{userHistory}}},\n` +
    `recommend {{numRecommendations}} products that the user might be interested in.\n` +
    `Return the product names as a list.\n` +
    `The list should be comma separated.
    `,
});

/**
 * Wrapper function to get personalized product recommendations.
 * @param input - The input for generating recommendations.
 * @returns A promise that resolves to the recommendations.
 */
export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}
