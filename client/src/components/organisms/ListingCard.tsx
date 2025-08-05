import React from 'react';
import { AvatarPlaceholder } from '../atoms/AvatarPlaceholder';
import { InfoRow } from '../molecules/InfoRow';

export type Listing = {
  id: string;
  title: string;
  price: number;
  district: string;
  avatarUrl?: string;
};

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className='flex gap-4 rounded-2xl border border-slate-300 bg-white p-4 shadow-sm'>
      <AvatarPlaceholder uri={listing.avatarUrl} />
      <div className='flex flex-1 flex-col'>
        <h3 className='text-base font-semibold text-slate-700'>
          {listing.title}
        </h3>
        <InfoRow price={listing.price} location={listing.district} />
      </div>
    </article>
  );
}
