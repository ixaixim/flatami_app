import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Icon } from '../components/atoms/Icon';
import { FeatureTag } from '../components/atoms/FeatureTag';
import { InfoItem } from '../components/molecules/InfoItem';
import { mockFlatmates } from '../data/flatmates';

function FlatmateOfferPage() {
  const { id } = useParams();
  const flatmate = mockFlatmates.find((f) => f.id === id);
  const navigate = useNavigate();
  const favStorageKey = useMemo(() => 'favorites:flatmates', []);
  const [isFav, setIsFav] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Initialize favorite state from localStorage
    try {
      const raw = localStorage.getItem(favStorageKey);
      const ids = raw ? (JSON.parse(raw) as string[]) : [];
      setIsFav(Boolean(flatmate && ids.includes(flatmate.id)));
    } catch {
      setIsFav(false);
    }
  }, [favStorageKey, flatmate]);

  function toggleFavorite() {
    try {
      const raw = localStorage.getItem(favStorageKey);
      const ids = raw ? (JSON.parse(raw) as string[]) : [];
      if (!flatmate) return;
      const next = ids.includes(flatmate.id)
        ? ids.filter((x) => x !== flatmate.id)
        : [...ids, flatmate.id];
      localStorage.setItem(favStorageKey, JSON.stringify(next));
      setIsFav(next.includes(flatmate.id));
    } catch {
      // no-op
    }
  }

  async function handleShare() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  if (!flatmate) {
    return <div className='max-w-4xl p-4 mx-auto'>Flatmate not found</div>;
  }

  return (
    <main className='min-h-dvh bg-slate-50'>
      <div className='mx-auto max-w-5xl p-4 md:p-6'>
        {/* Top action bar: Back, Share, Favorite */}
        <div className='mb-4 flex items-center justify-between'>
          <button
            type='button'
            onClick={() => navigate(-1)}
            aria-label='Go back'
            className='rounded-full bg-white p-2 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50'
          >
            <Icon name='ArrowLeft' className='h-5 w-5 text-slate-900' />
          </button>
          <div className='flex items-center gap-2'>
            <div className='relative'>
              <button
                type='button'
                onClick={handleShare}
                aria-label='Share profile'
                className='rounded-full bg-white p-2 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50'
              >
                <Icon name='Share2' className='h-5 w-5 text-slate-900' />
              </button>
              {copied && (
                <span className='absolute -bottom-6 left-1/2 -translate-x-1/2 rounded bg-slate-900 px-2 py-0.5 text-xs text-white'>
                  Copied!
                </span>
              )}
            </div>
            <button
              type='button'
              onClick={toggleFavorite}
              aria-pressed={isFav}
              aria-label={isFav ? 'Remove from favorites' : 'Save to favorites'}
              className='rounded-full bg-white p-2 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50'
            >
              <Icon
                name='Heart'
                className={
                  'h-5 w-5 ' + (isFav ? 'text-rose-600 fill-rose-500' : 'text-slate-900')
                }
              />
            </button>
          </div>
        </div>

        {/* Gallery */}
        {flatmate.images && flatmate.images.length > 0 && (
          <div className='mb-4 grid grid-cols-3 gap-2 rounded-2xl bg-indigo-50 p-3'>
            {flatmate.images.slice(0, 3).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`gallery-${i}`}
                className='h-36 w-full rounded-xl object-cover md:h-48'
              />
            ))}
          </div>
        )}

        {/* Header */}
        <div className='rounded-2xl bg-indigo-50 p-4 md:p-6'>
          <div className='mb-4'>
            <h1 className='text-2xl font-semibold text-slate-900'>{flatmate.name}</h1>
            <div className='mt-1 flex items-center gap-2 text-sm text-slate-600'>
              <Icon name='Shield' className='h-4 w-4' />
              <span>
                Member since {flatmate.memberSince ?? '—'}
              </span>
            </div>
          </div>

          {/* Location */}
          <div className='mb-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200'>
            <div className='flex items-start gap-3'>
              <Icon name='MapPin' className='mt-0.5 h-5 w-5 text-slate-600' />
              <div className='text-slate-800'>
                <div className='font-medium'>{flatmate.city ?? flatmate.preferredArea}</div>
                {flatmate.neighborhoods && (
                  <div className='text-sm text-slate-600'>
                    {flatmate.neighborhoods.join(', ')}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Flat preference */}
          <div className='mb-1 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <Icon name='Building2' className='h-5 w-5 text-slate-600' />
                <div className='font-medium text-slate-800'>Flat</div>
              </div>
              <div className='text-sm text-slate-700'>
                {flatmate.flatMinSize ? `Min ${flatmate.flatMinSize} m²` : '—'}
                {flatmate.flatRoomsRange ? ` • ${flatmate.flatRoomsRange}` : ''}
              </div>
            </div>
          </div>

          <div className='my-1 text-center text-sm font-semibold text-slate-600'>or</div>

          {/* Room preference */}
          <div className='mb-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <Icon name='Home' className='h-5 w-5 text-slate-600' />
                <div className='font-medium text-slate-800'>Room</div>
              </div>
              <div className='text-sm text-slate-700'>
                {flatmate.roomMinSize ? `Min ${flatmate.roomMinSize} m²` : '—'}
              </div>
            </div>
          </div>

          {/* Time period */}
          <div className='mb-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <Icon name='CalendarDays' className='h-5 w-5 text-slate-600' />
                <div className='font-medium text-slate-800'>
                  {flatmate.timePeriod ?? '—'}
                </div>
              </div>
              <div className='text-sm text-slate-700'>
                {flatmate.availableFrom ? `Starting ${flatmate.availableFrom}` : ''}
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className='mb-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200'>
            <div className='flex items-center gap-3'>
              <Icon name='DollarSign' className='h-5 w-5 text-slate-600' />
              <div className='text-slate-800'>
                <span className='font-medium'>Max {flatmate.budget}€</span> / month
              </div>
            </div>
          </div>

          {/* Removed static CTA to keep only floating sticky CTA */}

          {/* Amenities */}
          <section className='mb-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200'>
            <div className='mb-2 flex items-center gap-2'>
              <Icon name='Sparkles' className='h-5 w-5 text-slate-700' />
              <h2 className='text-lg font-semibold text-slate-900'>Amenities</h2>
            </div>
            {flatmate.amenities && flatmate.amenities.length > 0 ? (
              <div className='flex flex-wrap gap-2'>
                {flatmate.amenities.map((a) => (
                  <FeatureTag key={a} label={a} />
                ))}
              </div>
            ) : (
              <p className='text-sm text-slate-600'>No amenities</p>
            )}
          </section>

          {/* Roomie expectations */}
          <section className='mb-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200'>
            <div className='mb-2 flex items-center gap-2'>
              <Icon name='Users' className='h-5 w-5 text-slate-700' />
              <h2 className='text-lg font-semibold text-slate-900'>Roomie expectations</h2>
            </div>
            <div className='flex flex-wrap gap-2'>
              {(flatmate.expectations ?? []).map((e) => (
                <FeatureTag key={e} label={e} />
              ))}
            </div>
          </section>

          {/* Good to know / Bio */}
          <section className='mb-16 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200'>
            <div className='mb-2 flex items-center gap-2'>
              <Icon name='Lightbulb' className='h-5 w-5 text-slate-700' />
              <h2 className='text-lg font-semibold text-slate-900'>Good to know</h2>
            </div>
            <p className='whitespace-pre-line leading-relaxed text-slate-800'>
              {flatmate.bio}
            </p>
          </section>

          {/* Lifestyle and meta (kept below for completeness) */}
          <section className='mb-6'>
            <div className='mb-2 text-sm font-semibold text-slate-800'>Lifestyle</div>
            <ul className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
              <InfoItem
                icon={<Icon name='Sun' className='h-5 w-5 text-gray-700' />}
                label='Sleeping'
                value={flatmate.sleepingHabit}
              />
              <InfoItem
                icon={<Icon name='Brush' className='h-5 w-5 text-gray-700' />}
                label='Tidiness'
                value={flatmate.tidiness}
              />
              <InfoItem
                icon={<Icon name='Cigarette' className='h-5 w-5 text-gray-700' />}
                label='Smoking'
                value={flatmate.smoking}
              />
              <InfoItem
                icon={<Icon name='PawPrint' className='h-5 w-5 text-gray-700' />}
                label='Pets'
                value={flatmate.pets}
              />
              <InfoItem
                icon={<Icon name='PartyPopper' className='h-5 w-5 text-gray-700' />}
                label='Parties'
                value={flatmate.party}
              />
              <InfoItem
                icon={<Icon name='Users' className='h-5 w-5 text-gray-700' />}
                label='Social'
                value={flatmate.socialStyle}
              />
            </ul>
          </section>

          {flatmate.hobbies.length > 0 && (
            <section className='mb-20'>
              <div className='mb-2 text-sm font-semibold text-slate-800'>Hobbies</div>
              <div className='flex flex-wrap gap-2'>
                {flatmate.hobbies.map((h) => (
                  <FeatureTag key={h} label={h} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Floating CTA */}
      <div className='fixed inset-x-4 bottom-4 z-10 md:inset-x-auto md:right-8 md:bottom-6'>
        <button
          type='button'
          className='w-full rounded-full bg-slate-900 px-6 py-3 text-white shadow-lg hover:bg-slate-800 md:w-auto'
        >
          Send a message
        </button>
      </div>
    </main>
  );
}

export default FlatmateOfferPage;
