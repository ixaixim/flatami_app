import { useState } from 'react';
import { Header } from '../components/molecules/Header';
import { Hero } from '../components/organisms/Hero';
import { MainActions } from '../components/organisms/MainActions';
import { Features } from '../components/organisms/Features';
import { PromoVideo } from '../components/organisms/PromoVideo';
import { Faq } from '../components/organisms/Faq';
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
      <div className="hidden md:block">
        <Header />
        <main className="flex-1">
          <Hero />
          <section
            className="relative min-h-[60vh]"
            style={{
              backgroundImage: "url('/backgrounds/cozy_apartment_background.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="mx-auto mt-10 max-w-6xl px-4">
              <MainActions />
            </div>
            <div className="relative">
              <Features />
            </div>
          </section>
          <PromoVideo />
          <Faq />
        </main>
        <Footer />
      </div>

      {/* Mobile experience */}
      <div className="md:hidden">
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
