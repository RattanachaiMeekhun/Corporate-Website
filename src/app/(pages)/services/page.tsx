import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServices } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Discover the comprehensive range of expert services offered by SynergyHub, from digital transformation to custom software development.',
  openGraph: {
    title: 'Our Services | SynergyHub',
    description: 'Discover the comprehensive range of expert services offered by SynergyHub.',
  },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div>
      <PageHeader
        title="Our Services"
        description="We provide a wide range of expert services designed to help your business navigate challenges and seize opportunities."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                    src={service.image}
                    alt={service.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint="business meeting"
                />
                <CardHeader>
                    <CardTitle className="font-headline">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-grow line-clamp-4">{service.summary}</p>
                    <Button asChild className="mt-auto">
                        <Link href={`/services/${service.id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
