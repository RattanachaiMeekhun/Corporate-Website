// src/ai/flows/seo-optimizer.ts
'use server';

/**
 * @fileOverview Generates SEO meta tag suggestions based on user-provided content.
 *
 * - generateSEOMetaTags - A function that generates SEO meta tags.
 * - SEOMetaTagsInput - The input type for the generateSEOMetaTags function.
 * - SEOMetaTagsOutput - The return type for the generateSEOMetaTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SEOMetaTagsInputSchema = z.object({
  content: z
    .string()
    .describe('The content of the page to generate SEO meta tags for.'),
});

export type SEOMetaTagsInput = z.infer<typeof SEOMetaTagsInputSchema>;

const SEOMetaTagsOutputSchema = z.object({
  title: z.string().describe('The suggested title for the page.'),
  description: z.string().describe('The suggested description for the page.'),
  keywords: z.string().describe('The suggested keywords for the page.'),
});

export type SEOMetaTagsOutput = z.infer<typeof SEOMetaTagsOutputSchema>;

export async function generateSEOMetaTags(input: SEOMetaTagsInput): Promise<SEOMetaTagsOutput> {
  return generateSEOMetaTagsFlow(input);
}

const seoMetaTagsPrompt = ai.definePrompt({
  name: 'seoMetaTagsPrompt',
  input: {schema: SEOMetaTagsInputSchema},
  output: {schema: SEOMetaTagsOutputSchema},
  prompt: `You are an SEO expert. Generate SEO meta tags (title, description, and keywords) for the following content:

Content: {{{content}}}

Title: A concise and engaging title that accurately reflects the page's content. Aim for around 60 characters.
Description: A brief summary of the page's content, optimized to capture user interest and improve search engine visibility. Keep it under 160 characters.
Keywords: A comma-separated list of relevant keywords that accurately describe the page's content.`,
});

const generateSEOMetaTagsFlow = ai.defineFlow(
  {
    name: 'generateSEOMetaTagsFlow',
    inputSchema: SEOMetaTagsInputSchema,
    outputSchema: SEOMetaTagsOutputSchema,
  },
  async input => {
    const {output} = await seoMetaTagsPrompt(input);
    return output!;
  }
);
