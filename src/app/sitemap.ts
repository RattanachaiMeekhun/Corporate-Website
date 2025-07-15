import { MetadataRoute } from "next";
import { getProducts, getServices, getPortfolioItems } from "@/lib/data";

export const dynamic = "force-static";

const URL = "https://synergyhub.example.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const services = await getServices();
  const portfolioItems = await getPortfolioItems();

  const productEntries: MetadataRoute.Sitemap = products.map(({ id }) => ({
    url: `${URL}/products/${id}`,
    lastModified: new Date(),
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map(({ id }) => ({
    url: `${URL}/services/${id}`,
    lastModified: new Date(),
  }));

  const portfolioEntries: MetadataRoute.Sitemap = portfolioItems.map(
    ({ id }) => ({
      url: `${URL}/portfolio/${id}`,
      lastModified: new Date(),
    })
  );

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/services",
    "/portfolio",
    "/offerings",
    "/contact",
    "/seo-optimizer",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...productEntries,
    ...serviceEntries,
    ...portfolioEntries,
  ];
}
