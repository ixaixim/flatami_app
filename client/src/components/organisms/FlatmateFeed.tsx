import type { Flatmate } from '../../types/flatmate';
import { FlatmateCard } from './FlatmateCard';

export function FlatmateFeed({ data }: { data: Flatmate[] }) {
  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {data.map((item) => (
        <FlatmateCard key={item.id} flatmate={item} />
      ))}
    </div>
  );
}
// FlatmateFeed: Scrollable list of flatmate-seeking profiles with filters.
