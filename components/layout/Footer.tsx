'use client';

import { Button } from '@heroui/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#api' },
      { name: 'Documentation', href: '#docs' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'Status', href: '#status' },
      { name: 'Security', href: '#security' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Email', href: 'mailto:hello@aidashboard.com', icon: Mail },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-foreground/5 via-foreground/3 to-foreground/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary via-secondary to-primary rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-white to-white/80 rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-primary to-secondary rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-foreground">
                  DataViz
                </span>
                <span className="text-sm text-foreground/60 font-medium -mt-1">
                  AI Analytics
                </span>
              </div>
            </div>
            <p className="text-foreground/70 text-base leading-relaxed mb-8 max-w-md">
              The most powerful AI-driven dashboard that helps you make
              data-driven decisions and unlock your business potential with
              intelligent insights and automation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(social => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    as={Link}
                    href={social.href}
                    isIconOnly
                    variant="ghost"
                    size="lg"
                    className="text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">Product</h3>
            <ul className="space-y-4">
              {footerLinks.product.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground text-base transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground text-base transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground text-base transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground text-base transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-16 border border-divider/50">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-foreground/70 mb-6">
              Get the latest updates, features, and insights delivered to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-divider/50 bg-background/50 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
              />
              <Button
                color="primary"
                className="px-8 py-3 font-semibold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-divider/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-foreground/60 text-sm">
                © {currentYear} AI Dashboard. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-foreground/60 text-sm">
                    All systems operational
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-foreground/60 text-sm">
                Made with ❤️ for developers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
