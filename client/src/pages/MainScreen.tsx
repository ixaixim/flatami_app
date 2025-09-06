import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/molecules/Header';
import { Footer } from '../components/molecules/Footer';
import { SegmentedToggle } from '../components/molecules/SegmentedToggle';
import { SearchBar } from '../components/molecules/SearchBar';
import { ListingFeed } from '../components/organisms/ListingFeed';
import { FlatmateFeed } from '../components/organisms/FlatmateFeed';
import { sampleListings } from '../data/sampleListings';
import { mockFlatmates } from '../data/flatmates';

export default function MainScreen() {
  // Mobile segmented state
  const [tab, setTab] = useState<'offers' | 'searches'>('offers');
  const [q, setQ] = useState('');

  // If you have auth later, pass the real user: <Header user={currentUser} />
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Desktop / tablet experience */}
      <div className="hidden sm:block">
        {/* Gradient backdrop and subtle texture, inspired by FlatAmi landing */}
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sky-50 text-slate-900 relative">
          {/* subtle noise / dot texture */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(0,0,0,0.02)_1px)] [background-size:12px_12px]" />

          <Header />

          {/* HERO */}
          <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
            <div className="relative z-10 text-center max-w-2xl px-4">
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
                Find Your Next Home with{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  FlatAmi
                </span>
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Browse verified listings, connect with flatmates, and make moving easy.
              </p>

              {/* CTA group with conic gradient ring */}
              <div className="mt-6 flex justify-center gap-4">
                <Link
                  to="/auth"
                  className="relative inline-flex items-center justify-center rounded-full p-[2px] shadow-md transition hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-indigo-500 via-sky-400 to-indigo-500 animate-spin-slow" />
                  <span className="relative rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white">
                    Create Account
                  </span>
                </Link>
                <Link
                  to="/search"
                  className="rounded-full border border-indigo-200/70 bg-white/80 px-6 py-3 font-semibold text-indigo-700 shadow-sm backdrop-blur transition hover:border-indigo-300 hover:bg-indigo-50"
                >
                  Explore Listings
                </Link>
              </div>

              {/* City marquee */}
              <LogoMarquee />
            </div>
          </section>

          <Footer />
        </div>
      </div>

      {/* Mobile experience */}
      <div className="sm:hidden">
        <main className="mx-auto max-w-6xl px-4 pb-24 pt-6">
          <div className="flex items-center justify-center">
            <SegmentedToggle
              options={[
                { value: 'offers', label: 'Offers' },
                { value: 'searches', label: 'Searches' },
              ]}
              value={tab}
              onChange={(v) => setTab(v as 'offers' | 'searches')}
            />
          </div>

          <div className="mt-6">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              {tab === 'offers' ? 'Explore Listings' : 'Explore Searches'}
              <span className="ml-2">🔍</span>
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              {tab === 'offers'
                ? 'Find your new home 🏡'
                : 'Discover people looking for a flatmate ✨'}
            </p>
          </div>

          <div className="mt-4">
            <SearchBar value={q} onChange={(e) => setQ(e.target.value)} />
          </div>

          <div className="mt-6">
            {tab === 'offers' ? (
              <ListingFeed
                data={sampleListings.filter((l) =>
                  [l.title, l.district].some((t) =>
                    t.toLowerCase().includes(q.toLowerCase()),
                  ),
                )}
              />
            ) : (
              <FlatmateFeed
                data={mockFlatmates.filter((f) =>
                  [f.name, f.preferredArea, f.bio].some((t) =>
                    t.toLowerCase().includes(q.toLowerCase()),
                  ),
                )}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function LogoMarquee() {
  const cities = [
    'Berlin',
    'Munich',
    'Hamburg',
    'Cologne',
    'Frankfurt',
    'Stuttgart',
    'Düsseldorf',
  ];
  return (
    <div className="mt-10 overflow-hidden">
      <div className="animate-marquee flex gap-10 opacity-70 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {cities.concat(cities).map((city, idx) => (
          <div
            key={`${city}-${idx}`}
            className="shrink-0 rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur"
          >
            {city}
          </div>
        ))}
      </div>
    </div>
  );
}
