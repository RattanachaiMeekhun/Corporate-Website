'use client';

import { generateSEOMetaTags, SEOMetaTagsOutput } from '@/ai/flows/seo-optimizer';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Copy, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  content: z.string().min(50, { message: 'Content must be at least 50 characters.' }).max(5000, { message: 'Content cannot exceed 5000 characters.' }),
});

export default function SeoOptimizerPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SEOMetaTagsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    setResult(null);
    try {
      const response = await generateSEOMetaTags({ content: values.content });
      setResult(response);
    } catch (error) {
      console.error('Error generating SEO tags:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to generate SEO suggestions. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    toast({
        title: `${fieldName} Copied!`,
        description: 'The text has been copied to your clipboard.',
    });
  };

  return (
    <div>
      <PageHeader
        title="AI-Powered SEO Optimizer"
        description="Leverage generative AI to create compelling, search-engine-friendly meta tags for your web content. Simply paste your content below and let our AI do the work."
      />
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Sparkles className="text-accent" />
                Generate SEO Suggestions
              </CardTitle>
              <CardDescription>
                Enter your page content, and we'll suggest a title, description, and keywords.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Page Content</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste the main text content of your webpage here..."
                            className="min-h-[200px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Generating...' : 'Optimize Now'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {(loading || result) && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold font-headline mb-4 text-center">Suggestions</h2>
              {loading ? (
                <div className="space-y-4 animate-pulse">
                    <Card><CardContent className="p-6 h-24 bg-muted rounded-lg"></CardContent></Card>
                    <Card><CardContent className="p-6 h-32 bg-muted rounded-lg"></CardContent></Card>
                    <Card><CardContent className="p-6 h-24 bg-muted rounded-lg"></CardContent></Card>
                </div>
              ) : result && (
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Suggested Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-start gap-4">
                        <p className="text-muted-foreground">{result.title}</p>
                        <Button variant="ghost" size="icon" onClick={() => handleCopy(result.title, 'Title')}>
                            <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Suggested Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-start gap-4">
                        <p className="text-muted-foreground">{result.description}</p>
                        <Button variant="ghost" size="icon" onClick={() => handleCopy(result.description, 'Description')}>
                            <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Suggested Keywords</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="flex justify-between items-start gap-4">
                        <p className="text-muted-foreground">{result.keywords}</p>
                         <Button variant="ghost" size="icon" onClick={() => handleCopy(result.keywords, 'Keywords')}>
                            <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
