'use client';

import { useAuth } from '@/hooks/useAuth';
import { Avatar, Card, CardBody, CardHeader, Chip } from '@heroui/react';
import { Clock, Heart, User } from 'lucide-react';

export default function DashboardPage() {
  const { profile, userAuth } = useAuth();

  if (!userAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Please sign in to continue
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground mb-1">
          Welcome to your Dashboard
        </h1>
        <p className="text-foreground/60">
          Your personalized AI dashboard is ready to help you achieve your
          goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex gap-3">
            <Avatar
              src={profile?.avatar_url || ''}
              name={profile?.full_name || userAuth.email || 'User'}
              className="w-12 h-12"
              showFallback
            />
            <div className="flex flex-col">
              <p className="text-lg font-medium">
                {profile?.full_name || 'Welcome!'}
              </p>
              <p className="text-sm text-foreground/60">{userAuth.email}</p>
            </div>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="space-y-2">
              {profile?.role && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-foreground/50" />
                  <span className="text-sm text-foreground/70">
                    Role:{' '}
                    {profile.role.charAt(0).toUpperCase() +
                      profile.role.slice(1)}
                  </span>
                </div>
              )}

              {profile?.timezone && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-foreground/50" />
                  <span className="text-sm text-foreground/70">
                    Timezone: {profile.timezone}
                  </span>
                </div>
              )}
            </div>
          </CardBody>
        </Card>

        {profile?.interests && profile.interests.length > 0 && (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <h3 className="text-lg font-medium">Your Interests</h3>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
                  <Chip key={index} variant="flat" color="primary" size="sm">
                    {interest}
                  </Chip>
                ))}
              </div>
            </CardBody>
          </Card>
        )}
      </div>

      {!profile?.full_name && (
        <Card className="mt-4 border-warning">
          <CardBody>
            <div className="text-center py-4">
              <h3 className="text-lg font-medium text-warning mb-2">
                Complete Your Profile
              </h3>
              <p className="text-foreground/60 mb-4">
                Finish setting up your profile to get the most out of your
                dashboard.
              </p>
              <a
                href="/auth/onboarding"
                className="inline-flex items-center px-4 py-2 bg-warning text-white rounded-md hover:bg-warning/90 transition-colors"
              >
                Complete Setup
              </a>
            </div>
          </CardBody>
        </Card>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
