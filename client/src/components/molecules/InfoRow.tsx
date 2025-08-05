import React from 'react';
import { Icon } from '../atoms/Icon';
import { PriceText } from '../atoms/PriceText';
import { LocationText } from '../atoms/LocationText';

interface Props {
  price: number;
  location: string;
}

export function InfoRow({ price, location }: Props) {
  return (
    <div className='mt-2 flex items-center gap-3 text-sm'>
      <Icon name='DollarSign' className='text-slate-500' />
      <PriceText value={price} />
      <Icon name='MapPin' className='ml-4 text-slate-500' />
      <LocationText>{location}</LocationText>
    </div>
  );
}
