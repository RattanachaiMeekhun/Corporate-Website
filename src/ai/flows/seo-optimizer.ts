// src/ai/flows/seo-optimizer.ts

/**
 * @fileOverview Mock SEO meta tag suggestions for static export compatibility.
 *
 * - generateSEOMetaTags - A function that generates SEO meta tags.
 * - SEOMetaTagsInput - The input type for the generateSEOMetaTags function.
 * - SEOMetaTagsOutput - The return type for the generateSEOMetaTags function.
 */

import { z } from "zod";

const SEOMetaTagsInputSchema = z.object({
  content: z
    .string()
    .describe("The content of the page to generate SEO meta tags for."),
});

export type SEOMetaTagsInput = z.infer<typeof SEOMetaTagsInputSchema>;

const SEOMetaTagsOutputSchema = z.object({
  title: z.string().describe("The suggested title for the page."),
  description: z.string().describe("The suggested description for the page."),
  keywords: z.string().describe("The suggested keywords for the page."),
});

export type SEOMetaTagsOutput = z.infer<typeof SEOMetaTagsOutputSchema>;

// Mock function for static export compatibility
export async function generateSEOMetaTags(
  input: SEOMetaTagsInput
): Promise<SEOMetaTagsOutput> {
  // Simulate AI processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Generate mock SEO suggestions based on content length and keywords
  const contentWords = input.content.toLowerCase().split(" ");
  const firstWords = contentWords.slice(0, 8).join(" ");
  const keywords = contentWords
    .filter((word) => word.length > 4)
    .slice(0, 10)
    .join(", ");

  return {
    title: `${
      firstWords.charAt(0).toUpperCase() + firstWords.slice(1)
    } - Professional Services`,
    description: `${input.content.substring(0, 150)}...`,
    keywords: keywords || "business, professional, services, solutions",
  };
}
