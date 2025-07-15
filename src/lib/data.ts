import { Product, Service, PortfolioItem } from '@/types';
import productsData from '@/data/products.json';
import servicesData from '@/data/services.json';
import portfolioData from '@/data/portfolio.json';

// For this example, we are casting the imported JSON data.
// In a real-world scenario, you would have more robust data fetching and validation.
const products: Product[] = productsData as Product[];
const services: Service[] = servicesData as Service[];
const portfolio: PortfolioItem[] = portfolioData as PortfolioItem[];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return products.find(p => p.id === id);
}

export async function getServices(): Promise<Service[]> {
  return services;
}

export async function getServiceById(id: string): Promise<Service | undefined> {
  return services.find(s => s.id === id);
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  return portfolio;
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItem | undefined> {
  return portfolio.find(item => item.id === id);
}
