'use client';

import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you shortly.',
    });
    form.reset();
  }

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold font-headline text-primary mb-6">Get in Touch</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Regarding SynergyOS" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us how we can help..." className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Form>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          <div className="space-y-8">
             <h2 className="text-2xl font-bold font-headline text-primary mb-6">Our Office</h2>
             <Card>
                <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-accent mt-1" />
                        <div>
                            <h3 className="font-semibold">Address</h3>
                            <p className="text-muted-foreground">123 Innovation Drive, Tech Park, Metropolis, 12345</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-accent mt-1" />
                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-muted-foreground">(123) 456-7890</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-accent mt-1" />
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-muted-foreground">contact@synergyhub.example.com</p>
                        </div>
                    </div>
                </CardContent>
             </Card>
             <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.241199324905!2d100.52093311536763!3d13.764953990339945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eb3a4176d6b%3A0x948ce59f3739a29e!2sVictory%20Monument!5e0!3m2!1sen!2sth!4v1625304383823!5m2!1sen!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
