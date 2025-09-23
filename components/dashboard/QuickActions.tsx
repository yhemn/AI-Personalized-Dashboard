import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import { PlusIcon } from 'lucide-react';

export default function QuickActions() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            startContent={<PlusIcon />}
            radius="none"
            variant="solid"
            size="lg"
            className="justify-start"
          >
            Add New Entry
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
