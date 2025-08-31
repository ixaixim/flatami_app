import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/atoms/Icon';
import { useOfferWizard } from '../../contexts/OfferWizardContext';

// Temporary mock addresses for suggestions until geolocation API is wired.
const MOCK_ADDRESSES = [
  'Largo la Foppa, Milan, Metropolitan City of Milan, Italy',
  'Miele Experience Center Milano, Corso Garibaldi, Milan, Italy',
  'Via la Foppa, Magreglio, Province of Como, Italy',
  'Via Torino, Milan, Italy',
  'Viale Monza, Milan, Italy',
  'Via del Corso, Rome, Italy',
  'Trastevere, Rome, Italy',
  'Navigli, Milan, Italy',
  'Brera, Milan, Italy',
  'Porta Romana, Milan, Italy',
];

export default function LocationStep() {
  const navigate = useNavigate();
  const { data, set } = useOfferWizard();
  const [query, setQuery] = useState<string>(data.address || '');

  // simple client-only filter to mimic suggestions
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as string[];
    return MOCK_ADDRESSES.filter((a) => a.toLowerCase().includes(q)).slice(0, 12);
  }, [query]);

  useEffect(() => {
    // keep context in sync as user types; selection will override
    set('address', query || undefined);
  }, [query]);

  const choose = (addr: string) => {
    setQuery(addr);
    set('address', addr);
  };

  const goNext = () => {
    if (!query.trim()) return;
    navigate('../availability');
  };

  const goBack = () => navigate('..');

  const canContinue = Boolean(query.trim());

  return (
    <section>
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Where are you offering? <span>🏙️</span>
        </h1>
        <p className="mt-1 text-slate-600">Please enter your full address</p>
      </header>

      <div className="mx-auto mt-6 max-w-xl">
        <div className="relative">
          <Icon name='MapPin' className='pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400' />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search address"
            className="w-full rounded-3xl border border-slate-300 bg-white px-11 py-3 text-lg shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
            autoFocus
          />
        </div>

        <div
          className="mt-3 max-h-80 overflow-auto rounded-2xl border border-slate-200 bg-white shadow-sm"
          role="listbox"
          aria-label="Address suggestions"
        >
          {(suggestions.length ? suggestions : (query ? [query] : []))
            .map((addr, i) => (
              <button
                key={i}
                type="button"
                onClick={() => choose(addr)}
                className="block w-full cursor-pointer px-4 py-3 text-left hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
                role="option"
                aria-selected={addr === query}
              >
                {addr}
              </button>
            ))}
        </div>
      </div>

      {/* Floating navigation controls */}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 mx-auto flex max-w-3xl items-center justify-between px-6">
        <button
          type="button"
          onClick={goBack}
          className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-sm hover:bg-slate-200"
          aria-label="Previous"
        >
          <Icon name='ArrowLeft' className='h-6 w-6' />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!canContinue}
          className={[
            'pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full shadow-sm',
            canContinue
              ? 'bg-slate-800 text-white hover:bg-slate-900'
              : 'bg-slate-300 text-white opacity-70',
          ].join(' ')}
          aria-label="Next"
        >
          <Icon name='ArrowRight' className='h-6 w-6' />
        </button>
      </div>
    </section>
  );
}
