import * as Avatar from '@radix-ui/react-avatar';
import React from 'react';

interface Props {
  uri?: string;
  alt?: string;
  size?: number; // px (defaults to 56 = 14 × 4)
}

export function AvatarPlaceholder({ uri, alt = 'avatar', size = 56 }: Props) {
  const dim = `${size}px`;
  return (
    <Avatar.Root
      className='rounded-full overflow-hidden shrink-0 border border-slate-300 bg-slate-200'
      style={{ width: dim, height: dim }}
    >
      {uri ? (
        <Avatar.Image
          src={uri}
          alt={alt}
          className='object-cover w-full h-full'
        />
      ) : (
        <Avatar.Fallback delayMs={0} className='w-full h-full bg-slate-300' />
      )}
    </Avatar.Root>
  );
}
