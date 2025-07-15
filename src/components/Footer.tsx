import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="mb-4 inline-block" aria-label="SynergyHub Home">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Driving Innovation, Together.
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                 <li><Link href="/offerings" className="text-sm text-muted-foreground hover:text-foreground">Offerings</Link></li>
                 <li><Link href="/seo-optimizer" className="text-sm text-muted-foreground hover:text-foreground">SEO Optimizer</Link></li>
                 <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
                 <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                 <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                 <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-2">
                 <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                 </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                 </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
                 </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SynergyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
