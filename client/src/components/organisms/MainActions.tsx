
import { Button } from '../atoms/Button';
import { UserIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const MainActions = () => (
  <section className="flex flex-col gap-6 w-full max-w-md">
    <Link to="/search">
      <Button>
        <UserIcon className="mr-2 h-6 w-6" />
        Look for Flatmate
      </Button>
    </Link>
    <Button variant="secondary">
      <HomeIcon className="mr-2 h-6 w-6" />
      Look for Apartment
    </Button>
  </section>
);
