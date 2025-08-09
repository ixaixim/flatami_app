import { useMemo } from 'react';
import { sampleListings } from '../data/sampleListings';
import type { Listing } from '../types/listing';

export function useListings(query: string): Listing[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleListings;
    return sampleListings.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.district.toLowerCase().includes(q)
    );
  }, [query]);
}
