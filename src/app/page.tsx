import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProducts } from "@/lib/data";
import { getServices } from "@/lib/data";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const services = (await getServices()).slice(0, 3);
  const products = (await getProducts()).slice(0, 3);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, Innovate Inc.",
      quote: "SynergyHub transformed our operations. Their expertise and dedication are unmatched. We've seen a 200% increase in efficiency.",
      avatar: "https://placehold.co/100x100.png",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "CTO, Tech Solutions",
      quote: "The products are top-notch and their team provided excellent support throughout the integration process. Highly recommended!",
      avatar: "https://placehold.co/100x100.png",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      title: "Marketing Director, Growth Co.",
      quote: "Working with SynergyHub was a game-changer for our marketing campaigns. Their insights and tools are invaluable.",
      avatar: "https://placehold.co/100x100.png",
      rating: 5,
    },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
         <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter text-primary">
                Driving Innovation, Together
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                We provide cutting-edge solutions to propel your business into the future. Discover our products and services designed for growth and efficiency.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/offerings">Explore Offerings</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center font-headline">Our Core Services</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
            From strategic consulting to implementation, we offer services that cover the entire business lifecycle.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link href={`/services/${service.id}`} className="block">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint="abstract technology"
                  />
                  <CardHeader>
                    <CardTitle className="font-headline">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{service.summary}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
                <Button asChild variant="outline">
                    <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center font-headline">Featured Products</h2>
           <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
            Explore our suite of products designed to enhance productivity and drive results.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link href={`/products/${product.id}`} className="block">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint="software interface"
                  />
                  <CardHeader>
                    <CardTitle className="font-headline">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2">{product.summary}</p>
                    <p className="text-lg font-semibold mt-2 text-accent">${product.price}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
            <div className="text-center mt-12">
                <Button asChild variant="outline">
                    <Link href="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
       <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center font-headline">What Our Clients Say</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
            We are proud to have earned the trust of leading companies.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="pt-6">
                   <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                       data-ai-hint="professional headshot"
                    />
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold font-headline">Ready to Elevate Your Business?</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Let's discuss how SynergyHub can help you achieve your goals. Get in touch with our experts today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
