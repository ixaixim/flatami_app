import { useEffect, useState } from 'react';
import type { Listing } from '../components/organisms';
import { mockListings } from '../data/listings';

export function useListings(search: string) {
  const [data, setData] = useState<Listing[]>([]);

  useEffect(() => {
    const filteredData = mockListings.filter((listing) =>
      listing.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  }, [search]);

  return data;
}
