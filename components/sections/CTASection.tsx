'use client';

import { Button } from '@heroui/react';
import { ArrowRight, CheckCircle, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  const features = [
    '14-day free trial',
    'No credit card required',
    'Cancel anytime',
    '24/7 support included',
  ];

  const testimonials = [
    { name: 'Sarah Johnson', company: 'TechCorp', rating: 5 },
    { name: 'Mike Chen', company: 'DataFlow', rating: 5 },
    { name: 'Emily Rodriguez', company: 'InnovateLab', rating: 5 },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl rounded-3xl border border-divider/50 shadow-2xl overflow-hidden">
            {/* Header Section */}
            <div className="relative px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 text-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 sm:mb-8 border border-primary/20">
                <Sparkles className="w-4 h-4" />
                <span>Ready to transform your data?</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Start Your Journey to
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
                  Data-Driven Success
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of teams who have already transformed their
                business with our AI-powered analytics platform. Get started in
                minutes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                <Button
                  as={Link}
                  href="/auth/sign-up"
                  color="primary"
                  size="lg"
                  endContent={<ArrowRight className="w-5 h-5" />}
                  className="font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto bg-gradient-to-r from-primary to-secondary"
                >
                  Start Free Trial
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  variant="bordered"
                  size="lg"
                  className="font-semibold px-8 py-6 text-lg border-2 border-foreground/20 hover:bg-foreground/5 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto"
                >
                  Schedule Demo
                </Button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-divider/30"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80 font-medium text-xs sm:text-sm text-center">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section with Testimonials */}
            <div className="bg-gradient-to-r from-foreground/5 to-foreground/10 px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-foreground/70 text-sm font-medium">
                      SOC 2 Compliant
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-foreground/70 text-sm font-medium">
                      GDPR Ready
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-foreground/70 text-sm font-medium">
                      99.9% Uptime
                    </span>
                  </div>
                </div>

                {/* Customer Testimonials */}
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-background flex items-center justify-center text-xs font-semibold text-foreground"
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-foreground/70 text-sm font-medium ml-2">
                      4.9/5 from 10,000+ users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                10K+
              </div>
              <div className="text-foreground/60 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                99.9%
              </div>
              <div className="text-foreground/60 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                24/7
              </div>
              <div className="text-foreground/60 text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                500+
              </div>
              <div className="text-foreground/60 text-sm">Integrations</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
