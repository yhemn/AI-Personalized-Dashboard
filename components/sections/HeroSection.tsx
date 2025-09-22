'use client';

import { Button } from '@heroui/react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>AI-Powered Dashboard</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
            Your Data, Your Story
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Told Intelligently
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Stop drowning in spreadsheets. Our AI-powered dashboard turns your
            complex data into clear, actionable insights that actually make
            sense. See what matters, when it matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <Button
              as={Link}
              href="/auth/sign-up"
              color="primary"
              size="lg"
              endContent={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
              className="font-semibold px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
            >
              Start Your Journey
            </Button>
            <Button
              variant="bordered"
              size="lg"
              startContent={<Play className="w-4 h-4 sm:w-5 sm:h-5" />}
              className="font-semibold px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg border-foreground/20 hover:bg-foreground/5 w-full sm:w-auto"
            >
              See It In Action
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                10K+
              </div>
              <div className="text-foreground/60 text-xs sm:text-sm">
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                99.9%
              </div>
              <div className="text-foreground/60 text-xs sm:text-sm">
                Uptime
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-foreground/60 text-xs sm:text-sm">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
