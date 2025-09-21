'use client';

import { Card, CardBody } from '@heroui/react';
import {
  BarChart3,
  Brain,
  Clock,
  Database,
  Lock,
  Smartphone,
  Zap,
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description:
        'Leverage advanced machine learning algorithms to uncover hidden patterns and insights in your data.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description:
        'Monitor your key metrics with live, interactive dashboards that update in real-time.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description:
        'Get instant, actionable insights delivered automatically without manual analysis.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Database,
      title: 'Data Integration',
      description:
        'Connect seamlessly with 100+ data sources and APIs for comprehensive data coverage.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description:
        'Access your dashboard anywhere with our fully responsive mobile-optimized interface.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description:
        'Bank-level security with end-to-end encryption and compliance with industry standards.',
      color: 'from-red-500 to-rose-500',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-foreground/2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            Everything you need to transform your data into actionable insights
            and drive better business decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm"
              >
                <CardBody className="p-6 sm:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-foreground/70 mb-4 sm:mb-6 text-sm sm:text-base">
            Ready to experience the power of AI-driven analytics?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-foreground/60">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Setup in under 5 minutes</span>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-foreground/60">
              <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
