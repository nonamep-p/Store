'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

export function MainNav() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Logo />
        <span className="hidden font-bold sm:inline-block">Lumina</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === href ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
