import { useEffect, useState } from 'react';
import { Listing } from '../components/organisms/ListingCard';

export function useListings(search: string) {
  const [data, setData] = useState<Listing[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/listings?search=${encodeURIComponent(search)}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(setData)
      .catch((err) => {
        if (err.name !== 'AbortError') console.error(err);
      });

    return () => controller.abort();
  }, [search]);

  return data;
}
