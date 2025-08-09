// components/organisms/ListingFeed.tsx
import type { Listing } from '../../types/listing';
import { ListingCard } from './ListingCard';

export function ListingFeed({ data }: { data: Listing[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item, i) => (
        <ListingCard key={item.id} listing={item} index={i} />
      ))}
    </div>
  );
}
