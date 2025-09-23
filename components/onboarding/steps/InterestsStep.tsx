'use client';

import { InterestChips } from '@/components/form/interest-chips';
import { INTERESTS_OPTIONS } from '@/lib/constants';
import { Heart, Sparkles } from 'lucide-react';

export default function InterestsStep() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-900 dark:to-rose-800 rounded-2xl flex items-center justify-center">
          <Heart className="w-8 h-8 text-pink-600 dark:text-pink-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-foreground">
            What Interests You?
          </h2>
          <p className="text-lg text-foreground-600 max-w-lg mx-auto leading-relaxed">
            Select the topics that excite you most. We&apos;ll use this to
            curate personalized content and recommendations.
          </p>
        </div>
      </div>

      {/* Interests Selection */}
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-content2/30 to-content3/30 rounded-2xl p-6 border border-content3">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-primary-500" />
            <h3 className="font-semibold text-foreground">
              Choose Your Interests
            </h3>
          </div>

          <InterestChips
            name="interests"
            options={INTERESTS_OPTIONS}
            maxSelections={8}
            placeholder="Select up to 8 topics that interest you most"
            className="space-y-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-content2/50 rounded-xl p-4 border border-content3">
            <p className="text-sm text-foreground-600 flex items-start gap-2">
              <span className="text-pink-500 mt-0.5">✨</span>
              <span>
                <strong>Personalized Content:</strong> Get articles, tutorials,
                and resources tailored to your interests.
              </span>
            </p>
          </div>
          <div className="bg-content2/50 rounded-xl p-4 border border-content3">
            <p className="text-sm text-foreground-600 flex items-start gap-2">
              <span className="text-pink-500 mt-0.5">🎯</span>
              <span>
                <strong>Smart Recommendations:</strong> Discover new tools and
                opportunities in your areas of interest.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
