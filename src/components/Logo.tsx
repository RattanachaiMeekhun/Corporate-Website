import { Zap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center" aria-label="SynergyHub Logo">
      <Zap className="h-6 w-6 text-accent" />
      <span className="ml-2 text-xl font-bold font-headline text-primary">
        SynergyHub
      </span>
    </div>
  );
}
