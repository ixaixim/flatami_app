import React, { useState } from 'react';
import { SearchBar } from '../components/molecules/SearchBar';
import { ListingFeed } from '../components/organisms/ListingFeed';
import { useListings } from '../hooks/useListings';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const listings = useListings(query);

  return (
    <main className='flex min-h-screen flex-col gap-6 bg-slate-100 p-6'>
      <SearchBar value={query} onChange={setQuery} />
      <div className='flex-1'>
        <ListingFeed data={listings} />
      </div>
    </main>
  );
}
