import { useEffect, useState } from 'react';
import type { Flatmate } from '../types/flatmate';
import { mockFlatmates } from '../data/flatmates';

export function useFlatmates(search: string) {
  const [data, setData] = useState<Flatmate[]>([]);

  useEffect(() => {
    const term = search.toLowerCase();
    const filtered = mockFlatmates.filter((f) =>
      f.name.toLowerCase().includes(term) ||
      f.preferredArea.toLowerCase().includes(term) ||
      f.hobbies.some((h) => h.toLowerCase().includes(term)),
    );
    setData(filtered);
  }, [search]);

  return data;
}
