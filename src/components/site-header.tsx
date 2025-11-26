import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from './ui/button';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { Input } from './ui/input';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
            <div className="hidden md:flex flex-1 max-w-sm items-center space-x-2">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-10 h-9" />
                </div>
            </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="icon" className="relative" asChild>
                <Link href="#">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Wishlist</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
                <Link href="#">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Shopping Cart</span>
                    <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs">3</span>
                </Link>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <User className="h-5 w-5" />
                  <span className="sr-only">My Account</span>
                </Link>
              </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
