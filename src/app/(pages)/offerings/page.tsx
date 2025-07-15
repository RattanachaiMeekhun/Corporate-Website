import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProducts, getServices } from "@/lib/data";
import { ArrowRight, Box, Briefcase } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Our Offerings',
  description: 'Explore the full range of products and services offered by SynergyHub. Find the perfect solution to meet your business needs.',
  openGraph: {
    title: 'Our Offerings | SynergyHub',
    description: 'Explore the full range of products and services offered by SynergyHub.',
  },
};

export default async function OfferingsPage() {
  const products = await getProducts();
  const services = await getServices();

  return (
    <div>
      <PageHeader
        title="Our Offerings"
        description="A complete overview of our innovative products and expert services, all in one place. Discover how we can help you succeed."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="services">
                <Briefcase className="mr-2 h-4 w-4" />
                Services
            </TabsTrigger>
            <TabsTrigger value="products">
                <Box className="mr-2 h-4 w-4" />
                Products
            </TabsTrigger>
          </TabsList>
          <TabsContent value="services">
            <div className="mt-12">
                <h2 className="text-2xl font-bold font-headline text-center mb-8">Our Services</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map(service => (
                        <Card key={service.id} className="flex flex-col">
                            <Image src={service.image} alt={service.name} width={600} height={400} className="w-full h-48 object-cover rounded-t-lg" data-ai-hint="abstract technology"/>
                            <CardHeader>
                                <CardTitle className="font-headline">{service.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col">
                                <p className="text-muted-foreground mb-4 flex-grow">{service.summary}</p>
                                <Button asChild className="mt-auto">
                                    <Link href={`/services/${service.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
          </TabsContent>
          <TabsContent value="products">
             <div className="mt-12">
                <h2 className="text-2xl font-bold font-headline text-center mb-8">Our Products</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {products.map(product => (
                        <Card key={product.id} className="flex flex-col">
                            <Image src={product.image} alt={product.name} width={600} height={400} className="w-full h-48 object-cover rounded-t-lg" data-ai-hint="software interface"/>
                            <CardHeader>
                                <CardTitle className="font-headline">{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col">
                                <p className="text-muted-foreground mb-4 flex-grow">{product.summary}</p>
                                 <p className="text-2xl font-semibold text-accent mb-4">${product.price}</p>
                                <Button asChild className="mt-auto">
                                    <Link href={`/products/${product.id}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
