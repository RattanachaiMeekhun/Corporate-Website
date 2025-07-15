'use client';

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getProducts } from "@/lib/data";
import { Product } from "@/types";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, [products]);

  useEffect(() => {
    let tempProducts = [...products];

    if (searchTerm) {
      tempProducts = tempProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== 'all') {
      tempProducts = tempProducts.filter(p => p.category === category);
    }

    setFilteredProducts(tempProducts);
  }, [searchTerm, category, products]);

  return (
    <div>
      <PageHeader
        title="Our Products"
        description="Discover our suite of innovative products designed to enhance productivity, streamline workflows, and drive business growth."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {loading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                    <Card key={i} className="animate-pulse">
                        <div className="w-full h-48 bg-muted rounded-t-lg"></div>
                        <CardHeader><div className="h-6 w-3/4 bg-muted rounded"></div></CardHeader>
                        <CardContent className="space-y-2">
                           <div className="h-4 w-full bg-muted rounded"></div>
                           <div className="h-4 w-5/6 bg-muted rounded"></div>
                           <div className="h-8 w-1/3 bg-muted rounded mt-2"></div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Link href={`/products/${product.id}`} className="flex flex-col h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint="software product"
                  />
                  <CardHeader>
                    <CardTitle className="font-headline">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-4 line-clamp-3">{product.summary}</p>
                    <div className="mt-auto flex justify-between items-center">
                        <p className="text-xl font-semibold text-accent">${product.price}</p>
                        <Button variant="ghost">View Details <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold">No Products Found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
