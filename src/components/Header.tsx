"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/offerings", label: "Offerings" },
  { href: "/contact", label: "Contact" },
  { href: "/seo-optimizer", label: "AI SEO" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex justify-between items-center w-full h-full gap-10">
          <Link href="/" className="mr-6" onClick={closeMenu}>
            <Logo />
          </Link>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* <Button asChild className="hidden md:flex">
            <Link href="/contact">Get a Quote</Link>
          </Button> */}
          <div className="hidden md:flex items-center" />
        </div>
        {/* 
        <div className="flex items-center">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="p-4">
                  <Link href="/" onClick={closeMenu}>
                    <Logo />
                  </Link>
                </div>
                <nav className="flex flex-col p-4 space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-foreground/80",
                        pathname === link.href
                          ? "text-foreground"
                          : "text-foreground/60"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={closeMenu}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div> */}
      </div>
    </header>
  );
}
