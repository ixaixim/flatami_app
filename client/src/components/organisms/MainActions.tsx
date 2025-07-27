
import { Button } from '../atoms/Button';
import { UserIcon, HomeIcon } from '@heroicons/react/24/outline';

export const MainActions = () => (
  <section className="flex flex-col gap-6 px-8">
    <Button>
      <UserIcon className="mr-2 h-6 w-6" />
      Look for Flatmate
    </Button>
    <Button variant="secondary">
      <HomeIcon className="mr-2 h-6 w-6" />
      Look for Apartment
    </Button>
  </section>
);
