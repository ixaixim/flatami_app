// components/organisms/ListingCard.tsx
import { Link } from 'react-router-dom';
import { Icon } from '../atoms/Icon';
import { LocationText } from '../atoms/LocationText';
import type { Listing } from '../../types/listing';

interface ListingCardProps {
  listing: Listing;
  index: number;
}

export function ListingCard({ listing, index }: ListingCardProps) {
  const { id, title, price, city, district, coverUrl, avatarUrl, sizeSqm, propertyType, hostName, memberSince, availability, badges } = listing;

const safeSrc =
  coverUrl && coverUrl.trim()
    ? coverUrl
    : 'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1200&auto=format&fit=crop';

  function formatMemberSince(input?: string) {
    if (!input) return null;
    const d = new Date(input);
    const formatter = new Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' });
    return formatter.format(d);
  }

  function formatDMY(input?: string) {
    if (!input) return null;
    const d = new Date(input);
    const dd = d.getDate();
    const mm = d.getMonth() + 1;
    const yy = String(d.getFullYear()).slice(-2);
    return `${dd}.${mm}.${yy}`;
  }

  const availLabel = availability?.label || (availability?.endDate ? 'Limited' : 'Unlimited');
  const availDateLine = availability?.startDate && availability?.endDate
    ? `${formatDMY(availability.startDate)} – ${formatDMY(availability.endDate)}`
    : availability?.startDate
      ? `from ${formatDMY(availability.startDate)}`
      : undefined;

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

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="absolute left-3 bottom-3 flex flex-wrap items-center gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm backdrop-blur ${b.toLowerCase().includes('women') ? 'bg-emerald-900 text-white' : 'bg-white/90 text-slate-800 ring-1 ring-slate-200'}`}
              >
                {b.toLowerCase().includes('live') && (
                  <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                )}
                {b.toUpperCase()}
              </span>
            ))}
          </div>
        )}

        {/* Heart */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-sm transition hover:bg-white"
          aria-label="Save listing"
        >
          <Icon name="Heart" className="h-5 w-5 text-slate-700" />
        </button>
      </div>

      {/* Body */}
      <div className="p-3">
        {/* Host row */}
        {(avatarUrl || hostName) && (
          <div className="mb-3 flex items-center gap-3">
            {avatarUrl && (
              <img src={avatarUrl} alt="" className="h-9 w-9 rounded-full object-cover" />
            )}
            <div>
              {hostName && (
                <div className="text-[15px] font-semibold text-slate-900">{hostName}</div>
              )}
              {memberSince && (
                <div className="flex items-center gap-1 text-xs text-slate-600">
                  <Icon name="ShieldCheck" className="h-3.5 w-3.5" />
                  <span>Member since {formatMemberSince(memberSince)}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Title (optional, can be short) */}
        <h3 className="line-clamp-1 text-[15px] font-semibold text-slate-900">{title}</h3>

        {/* Info grid */}
        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 text-[14px] text-slate-800">
          {/* City / District */}
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <Icon name="MapPin" className="h-4 w-4 text-sky-600" />
              <span>{city || 'Location'}</span>
            </div>
            <div className="ml-6 text-sm text-slate-600">
              <LocationText>{district}</LocationText>
            </div>
          </div>

          {/* Type / Size */}
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <Icon name="Building2" className="h-4 w-4 text-indigo-600" />
              <span>{propertyType || 'Flat'}</span>
            </div>
            {sizeSqm ? (
              <div className="ml-6 text-sm text-slate-600">{sizeSqm} m²</div>
            ) : null}
          </div>

          {/* Price */}
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <Icon name="Euro" className="h-4 w-4 text-emerald-700" />
              <span>Price</span>
            </div>
            <div className="ml-6 text-sm text-slate-600">{price} €</div>
          </div>

          {/* Availability */}
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <Icon name="CalendarDays" className="h-4 w-4 text-purple-700" />
              <span>{availLabel}</span>
            </div>
            {availDateLine && (
              <div className="ml-6 text-sm text-slate-600">{availDateLine}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
// ListingCard: Card view for an apartment offer including images and details.
