'use client';

import { Avatar, Card, CardBody } from '@heroui/react';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content:
        'This dashboard has completely transformed how we analyze our data. The AI insights are incredibly accurate and have helped us increase our revenue by 40%.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist, DataFlow',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content:
        "The real-time analytics and automated insights save us hours every day. It's like having a team of data scientists working 24/7.",
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, InnovateLab',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content:
        'The user interface is intuitive and the mobile app works flawlessly. Our team can access critical insights from anywhere.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'CTO, StartupXYZ',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content:
        'Integration was seamless and the support team is outstanding. This platform has become essential to our daily operations.',
      rating: 5,
    },
    {
      name: 'Lisa Wang',
      role: 'Analytics Director, GlobalCorp',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      content:
        'The predictive analytics capabilities are game-changing. We can now anticipate trends and make proactive decisions.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager, ScaleUp',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      content:
        'The dashboard is incredibly powerful yet easy to use. Our non-technical team members can create insights without any training.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-foreground/2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            Don&apos;t just take our word for it. Here&apos;s what real
            customers have to say about their experience with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm hover:bg-background/80"
            >
              <CardBody className="p-4 sm:p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Avatar
                    src={testimonial.avatar}
                    name={testimonial.name}
                    size="sm"
                    className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-xs sm:text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-foreground/60 text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                4.9/5
              </div>
              <div className="text-foreground/70 text-xs sm:text-sm">
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                98%
              </div>
              <div className="text-foreground/70 text-xs sm:text-sm">
                Customer Satisfaction
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                10K+
              </div>
              <div className="text-foreground/70 text-xs sm:text-sm">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
