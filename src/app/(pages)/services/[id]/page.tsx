import { getServiceById, getServices } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getServiceById(params.id);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.name,
    description: service.summary,
    openGraph: {
      title: `${service.name} | SynergyHub Services`,
      description: service.summary,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
    const services = await getServices();
    return services.map(service => ({ id: service.id }));
}

export default async function ServicePage({ params }: Props) {
  const service = await getServiceById(params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="relative h-64 md:h-96 w-full">
         <Image
              src={service.image}
              alt={service.name}
              layout="fill"
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="corporate strategy"
            />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-4">
                 <Badge variant="secondary">{service.category}</Badge>
                <h1 className="text-4xl md:text-6xl font-bold font-headline mt-2">{service.name}</h1>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <h2 className="text-3xl font-bold font-headline text-primary">Service Description</h2>
                <p className="mt-4 text-lg text-muted-foreground">{service.summary}</p>
                 <div className="mt-6 prose prose-lg max-w-none text-muted-foreground">
                    <p>{service.description}</p>
                 </div>
            </div>
            <div className="space-y-8">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Key Deliverables</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {service.deliverables.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                 </Card>
                 <Card className="bg-accent text-accent-foreground p-6 text-center">
                    <h3 className="text-xl font-bold font-headline">Interested in this service?</h3>
                    <p className="mt-2 text-sm">Let's talk about how we can help your business.</p>
                    <Button asChild variant="secondary" className="mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                        <Link href="/contact">Contact Our Experts</Link>
                    </Button>
                 </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
