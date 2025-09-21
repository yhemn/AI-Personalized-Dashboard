import { Card, CardBody, CardHeader } from '@heroui/react';
import { ReactNode } from 'react';

export default function AuthCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-gradient-to-br from-background to-content1/50 backdrop-blur-sm">
      <CardHeader className="flex flex-col gap-4 pb-8 pt-12 px-8">
        <div className="text-center space-y-3">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-foreground/30 to-transparent mx-auto"></div>
          <h1 className="text-3xl font-light tracking-wide text-foreground">
            {title}
          </h1>
          <p className="text-sm text-foreground/70 font-light leading-relaxed max-w-xs mx-auto">
            {description}
          </p>
        </div>
      </CardHeader>

      <CardBody className="gap-8 px-8 pb-12">
        <div className="space-y-6">{children}</div>
      </CardBody>
    </Card>
  );
}
