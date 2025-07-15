export interface Product {
  id: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  price: number;
  features: string[];
}

export interface Service {
  id: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  deliverables: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  date: string;
  client: string;
}
