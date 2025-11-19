'use server';

/**
 * @fileOverview Enhances product descriptions with AI-generated summaries of customer reviews.
 *
 * - enhanceProductDescription - A function that enriches product descriptions with customer review insights.
 * - EnhanceProductDescriptionInput - The input type for the enhanceProductDescription function.
 * - EnhanceProductDescriptionOutput - The return type for the enhanceProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceProductDescriptionInputSchema = z.object({
  productDescription: z
    .string()
    .describe('The original product description.'),
  customerReviews: z
    .string()
    .describe('A string of customer reviews for the product.'),
});
export type EnhanceProductDescriptionInput = z.infer<
  typeof EnhanceProductDescriptionInputSchema
>;

const EnhanceProductDescriptionOutputSchema = z.object({
  enhancedDescription: z
    .string()
    .describe(
      'The product description enhanced with a summary of customer reviews.'
    ),
});
export type EnhanceProductDescriptionOutput = z.infer<
  typeof EnhanceProductDescriptionOutputSchema
>;

export async function enhanceProductDescription(
  input: EnhanceProductDescriptionInput
): Promise<EnhanceProductDescriptionOutput> {
  return enhanceProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceProductDescriptionPrompt',
  input: {schema: EnhanceProductDescriptionInputSchema},
  output: {schema: EnhanceProductDescriptionOutputSchema},
  prompt: `You are an e-commerce product description expert.

  You are provided with a product description and a set of customer reviews.
  Your task is to enhance the product description by incorporating a summary of the customer reviews, highlighting key pros and cons mentioned by customers.

  Product Description: {{{productDescription}}}
  Customer Reviews: {{{customerReviews}}}

  Enhanced Product Description:`,
});

const enhanceProductDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceProductDescriptionFlow',
    inputSchema: EnhanceProductDescriptionInputSchema,
    outputSchema: EnhanceProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
