import { getPortfolioItemById, getPortfolioItems } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getPortfolioItemById(params.id);

  if (!item) {
    return { title: "Project Not Found" };
  }

  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: `${item.title} | SynergyHub Portfolio`,
      description: item.summary,
      images: [
        {
          url: item.image,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
    const items = await getPortfolioItems();
    return items.map(item => ({ id: item.id }));
}

export default async function PortfolioItemPage({ params }: Props) {
  const item = await getPortfolioItemById(params.id);

  if (!item) {
    notFound();
  }

  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
                 <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">{item.title}</h1>
                 <Badge variant="secondary" className="mt-4">{item.category}</Badge>
                 <div className="mt-8 prose prose-lg text-muted-foreground max-w-none">
                     <p>{item.description}</p>
                 </div>
                 <Button asChild className="mt-8">
                    <Link href="/contact">Inquire about a similar project</Link>
                 </Button>
            </div>
            <div className="md:col-span-2 space-y-8">
                 <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full rounded-lg shadow-lg"
                    data-ai-hint="business chart"
                  />
                  <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                            <User className="h-5 w-5 text-accent" />
                            <div>
                                <p className="text-sm font-semibold">Client</p>
                                <p className="text-muted-foreground">{item.client}</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-accent" />
                            <div>
                                <p className="text-sm font-semibold">Completion Date</p>
                                <p className="text-muted-foreground">{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </div>
                    </CardContent>
                  </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
