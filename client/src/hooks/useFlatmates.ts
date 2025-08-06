import { useEffect, useState } from 'react';
import type { Flatmate } from '../components/organisms/FlatmateCard';
import { mockFlatmates } from '../data/flatmates';

export function useFlatmates(search: string) {
  const [data, setData] = useState<Flatmate[]>([]);

  useEffect(() => {
    const filteredData = mockFlatmates.filter((flatmate) =>
      flatmate.name.toLowerCase().includes(search.toLowerCase()) ||
      flatmate.preferredArea.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  }, [search]);

  return data;
}
