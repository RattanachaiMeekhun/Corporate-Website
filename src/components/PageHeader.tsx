type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="py-12 md:py-16 bg-card border-b">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-md md:text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
