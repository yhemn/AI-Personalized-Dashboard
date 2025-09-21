'use client';

import { Card, CardBody } from '@heroui/react';
import { BarChart3, Globe, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: any;
  color: string;
  suffix?: string;
  prefix?: string;
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats: StatItem[] = [
    {
      value: '10,000',
      label: 'Active Users',
      description: 'Growing community of professionals',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      suffix: '+',
    },
    {
      value: '99.9',
      label: 'Uptime',
      description: 'Reliable service guarantee',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      suffix: '%',
    },
    {
      value: '50',
      label: 'Countries',
      description: 'Global reach and impact',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      suffix: '+',
    },
    {
      value: '1M',
      label: 'Data Points',
      description: 'Processed every day',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      suffix: '+',
    },
    {
      value: '24/7',
      label: 'Support',
      description: 'Always here to help',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      suffix: '',
    },
    {
      value: '500',
      label: 'Integrations',
      description: 'Connect with your tools',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      suffix: '+',
    },
  ];

  return (
    <section
      id="stats-section"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-foreground/3 via-transparent to-foreground/3 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
            Trusted by Teams
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4">
            Join thousands of companies that rely on our platform to make
            data-driven decisions every day. See why we&apos;re the preferred
            choice.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-background/60 backdrop-blur-sm hover:bg-background/80 hover:scale-105"
              >
                <CardBody className="p-6 sm:p-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                        {isVisible ? (
                          <span
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                          >
                            {stat.prefix}
                            {stat.value}
                            {stat.suffix}
                          </span>
                        ) : (
                          <span>0</span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                        {stat.label}
                      </h3>
                      <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-background/60 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-divider/50 mb-6 sm:mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-foreground/80 font-medium text-sm sm:text-base">
                All systems operational
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border/50" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-foreground/80 font-medium text-sm sm:text-base">
                Real-time monitoring
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">
                4.9/5
              </div>
              <div className="text-foreground/60 text-xs sm:text-sm">
                Customer Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">
                98%
              </div>
              <div className="text-foreground/60 text-xs sm:text-sm">
                Satisfaction Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">
                24h
              </div>
              <div className="text-foreground/60 text-xs sm:text-sm">
                Response Time
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
