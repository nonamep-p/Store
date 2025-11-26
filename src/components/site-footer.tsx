import * as React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Github, Twitter, Facebook } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-start col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Logo />
              <span className="font-bold text-lg">Lumina</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Discover curated collections of timeless pieces designed for the discerning individual.
            </p>
            <div className="mt-6">
                <h4 className="font-medium mb-2">Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-4">Subscribe for updates and special offers.</p>
                <form className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Email" />
                    <Button type="submit" variant="default" className="whitespace-nowrap">Sign Up</Button>
                </form>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-1 md:col-span-3 lg:col-span-3">
            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products" className="text-muted-foreground hover:text-foreground">All Products</Link></li>
                <li><Link href="/products?category=Apparel" className="text-muted-foreground hover:text-foreground">Apparel</Link></li>
                <li><Link href="/products?category=Accessories" className="text-muted-foreground hover:text-foreground">Accessories</Link></li>
                <li><Link href="/products?category=Footwear" className="text-muted-foreground hover:text-foreground">Footwear</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Press</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Shipping</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Returns</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Track Order</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lumina Online. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground"><Github className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-foreground"><Facebook className="h-5 w-5" /></Link>
            <div className="flex space-x-4 ml-4">
                <Link href="#" className="hover:text-foreground">Terms</Link>
                <Link href="#" className="hover:text-foreground">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
