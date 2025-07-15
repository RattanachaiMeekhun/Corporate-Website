import { getProductById, getProducts } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById(params.id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      title: `${product.name} | SynergyHub Products`,
      description: product.summary,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
    const products = await getProducts();
    return products.map(product => ({ id: product.id }));
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={1200}
              height={800}
              className="w-full rounded-lg shadow-lg aspect-video object-cover"
              data-ai-hint="product screenshot"
            />
          </div>
          <div className="space-y-6">
            <Badge variant="secondary">{product.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
              {product.name}
            </h1>
            <p className="text-xl text-muted-foreground">
              {product.summary}
            </p>
            <p className="text-4xl font-bold text-accent">
              ${product.price}
            </p>
            <Button size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <h2 className="text-3xl font-bold font-headline mb-4">Product Overview</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>{product.description}</p>
                </div>
            </div>
            <div>
                 <Card>
                    <CardContent className="p-6">
                        <h3 className="text-2xl font-bold font-headline mb-4">Key Features</h3>
                        <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
