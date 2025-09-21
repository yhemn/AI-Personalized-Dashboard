'use client';

import { Button } from '@heroui/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-primary via-secondary to-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-white to-white/80 rounded-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  DataViz
                </span>
                <span className="text-xs text-foreground/60 font-medium -mt-1">
                  AI Analytics
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Button
              as={Link}
              href="/auth/sign-in"
              variant="ghost"
              size="sm"
              className="text-foreground/70 hover:text-foreground hover:bg-foreground/5 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
            >
              Sign In
            </Button>
            <Button
              as={Link}
              href="/auth/sign-up"
              color="primary"
              size="sm"
              className="font-semibold text-sm px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 bg-gradient-to-r from-primary to-secondary"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              isIconOnly
              variant="ghost"
              size="sm"
              onPress={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-xl mt-2 border border-border/50 shadow-lg">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200 text-sm sm:text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  as={Link}
                  href="/auth/sign-in"
                  variant="ghost"
                  size="sm"
                  className="w-full justify-center text-foreground/70 hover:text-foreground hover:bg-foreground/5 text-sm font-medium py-3 rounded-lg transition-all duration-200"
                  onPress={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Button>
                <Button
                  as={Link}
                  href="/auth/sign-up"
                  color="primary"
                  size="sm"
                  className="w-full font-semibold text-sm py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-secondary"
                  onPress={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
