// components/organisms/ListingCard.tsx
import { Link } from 'react-router-dom';
import { CapacityEmojis } from '../atoms/CapacityEmojis';
import { Icon } from '../atoms/Icon';
import { PriceText } from '../atoms/PriceText';
import { LocationText } from '../atoms/LocationText';
import type { Listing } from '../../types/listing';

interface ListingCardProps {
  listing: Listing;
  index: number;
}

export function ListingCard({ listing, index }: ListingCardProps) {
  const { id, title, price, district, coverUrl, avatarUrl, sizeSqm, capacity, occupants, rating } = listing;

const safeSrc =
  coverUrl && coverUrl.trim()
    ? coverUrl
    : 'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1200&auto=format&fit=crop';


  return (
    <Link
      to={`/listings/${id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg"
    >
      {/* Photo (single!) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={safeSrc}
          alt={title}
          loading= {index < 4 ? 'eager' : 'lazy'}
          // loading="eager"            // temporarily eager to verify it loads

          // If TS complains, see note (C) below
          fetchPriority={index < 2 ? 'high' : 'auto'}
          decoding="async"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Heart */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-sm transition hover:bg-white"
          aria-label="Save listing"
        >
          <Icon name="Heart" className="h-5 w-5 text-slate-700" />
        </button>

        {/* Host avatar */}
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt=""
            className="absolute bottom-3 left-3 h-9 w-9 rounded-full border-2 border-white object-cover shadow"
          />
        )}
      </div>

      {/* Body */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-[15px] font-semibold text-slate-900">{title}</h3>
          {typeof rating === 'number' && (
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <Icon name="Star" className="h-4 w-4" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        <div className="mt-0.5 text-sm text-slate-600">
          <LocationText>{district}</LocationText>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[13px] text-slate-700">
            <div className="flex items-center gap-1.5">
              <Icon name="DollarSign" className="h-4 w-4 text-slate-500" />
              <PriceText value={price} /> <span className="text-slate-500">/ mo</span>
            </div>
            {sizeSqm ? (
              <div className="flex items-center gap-1.5">
                <Icon name="Square" className="h-4 w-4 text-slate-500" />
                <span>{sizeSqm} m²</span>
              </div>
            ) : null}
          </div>
          <CapacityEmojis capacity={capacity} occupants={occupants} className="shrink-0" />
        </div>
      </div>
    </Link>
  );
}
