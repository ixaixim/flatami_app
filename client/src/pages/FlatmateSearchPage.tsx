import { useState } from 'react';
import { FlatmateSearchBar } from '../components/molecules/FlatmateSearchBar';
import { FlatmateFeed } from '../components/organisms/FlatmateFeed';
import { useFlatmates } from '../hooks/useFlatmates';

export default function FlatmateSearchPage() {
  const [query, setQuery] = useState('');
  const flatmates = useFlatmates(query);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <main className='flex min-h-screen flex-col gap-6 bg-slate-100 p-6'>
      <FlatmateSearchBar value={query} onChange={handleQueryChange} />
      <div className='flex-1'>
        <FlatmateFeed data={flatmates} />
      </div>
    </main>
  );
}
