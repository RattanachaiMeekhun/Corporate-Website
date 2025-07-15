import { PageHeader } from '@/components/PageHeader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Users, Eye } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SynergyHub\'s mission, vision, and the dedicated team driving our success. Discover our commitment to innovation and excellence.',
  openGraph: {
    title: 'About Us | SynergyHub',
    description: 'Learn about SynergyHub\'s mission, vision, and the dedicated team driving our success.',
  },
};

const teamMembers = [
  { name: 'Alice Johnson', role: 'Founder & CEO', image: 'https://placehold.co/200x200.png', hint: 'woman ceo' },
  { name: 'Bob Williams', role: 'Chief Technology Officer', image: 'https://placehold.co/200x200.png', hint: 'man engineer' },
  { name: 'Charlie Brown', role: 'Head of Product', image: 'https://placehold.co/200x200.png', hint: 'man designer' },
  { name: 'Diana Miller', role: 'Director of Sales', image: 'https://placehold.co/200x200.png', hint: 'woman sales' },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About SynergyHub"
        description="We are a team of passionate innovators dedicated to building solutions that empower businesses and drive progress."
      />

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* Company Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold font-headline text-primary">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2018, SynergyHub started with a simple yet powerful idea: to bridge the gap between business challenges and technological solutions. We saw an opportunity to create products and services that not only solve problems but also foster collaboration and sustainable growth.
            </p>
            <p className="mt-4 text-muted-foreground">
              From our humble beginnings in a small office, we have grown into a trusted partner for companies worldwide. Our journey is fueled by a relentless pursuit of excellence and a deep commitment to our clients' success.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://placehold.co/600x400.png"
              alt="SynergyHub office"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="modern office"
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Target className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">To empower businesses with innovative and reliable technology solutions that drive efficiency, foster growth, and create lasting value.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Eye className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">To be a global leader in business technology, shaping the future of work and collaboration through continuous innovation and a client-centric approach.</p>
            </CardContent>
          </Card>
        </div>

         {/* Our Values Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline text-primary">Our Core Values</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our actions and decisions.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Innovation', 'Integrity', 'Collaboration', 'Excellence'].map(value => (
               <div key={value} className="flex flex-col items-center">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground mb-4">
                    <CheckCircle className="h-8 w-8" />
                 </div>
                 <h3 className="text-xl font-semibold">{value}</h3>
               </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center font-headline text-primary">Meet Our Team</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
            The talented individuals who make SynergyHub a leader in the industry.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <Avatar className="h-32 w-32 mx-auto">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
