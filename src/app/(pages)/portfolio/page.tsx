import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPortfolioItems } from "@/lib/data";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse our portfolio of successful projects and case studies. See how SynergyHub has delivered impactful solutions for clients across various industries.',
  openGraph: {
    title: 'Portfolio | SynergyHub',
    description: 'Browse our portfolio of successful projects and case studies.',
  },
};

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems();

  return (
    <div>
      <PageHeader
        title="Our Portfolio"
        description="A showcase of our successful partnerships and innovative solutions. Explore our case studies to see the tangible results we deliver."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
              <Link href={`/portfolio/${item.id}`}>
                <div className="overflow-hidden">
                    <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    data-ai-hint="business project"
                    />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-accent font-semibold mb-1">{item.category}</p>
                  <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                  <p className="text-muted-foreground line-clamp-3">{item.summary}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
