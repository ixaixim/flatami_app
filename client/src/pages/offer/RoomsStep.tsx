import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/atoms/Icon';
import { useOfferWizard } from '../../contexts/OfferWizardContext';

export default function RoomsStep() {
  const navigate = useNavigate();
  const { data, set } = useOfferWizard();

  const rooms = data.roomsCount ?? 2;
  const sqm = data.areaSqm ?? 0;

  const canContinue = useMemo(() => rooms >= 1 && sqm >= 0, [rooms, sqm]);

  const goBack = () => navigate('../availability');
  const goNext = () => {
    if (!canContinue) return;
    navigate('../rent');
  };

  return (
    <section>
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          How big is your flat? <span>📐</span>
        </h1>
      </header>

      <div className='mx-auto mt-6 max-w-xl'>
        <p className='text-slate-700'>How many rooms does it have?</p>
        <div className='mt-2 text-center text-3xl font-bold text-slate-900'>{rooms}</div>
        <input
          type='range'
          min={1}
          max={10}
          step={1}
          value={rooms}
          onChange={(e) => set('roomsCount', Number(e.target.value))}
          className='mt-3 w-full accent-slate-800'
          aria-label='Number of rooms'
        />

        <div className='mt-5 rounded-2xl bg-slate-50 p-4 text-slate-700'>
          <div className='flex items-start gap-3'>
            <Icon name='Info' className='mt-0.5 h-5 w-5 text-slate-500' />
            <p>
              Count bedrooms, living rooms and dining rooms. Exclude kitchen,
              bathrooms, hallways, storage spaces, and closets. 🏡
            </p>
          </div>
        </div>

        <div className='mt-6'>
          <label className='mb-2 block text-slate-800'>How many sqm does the flat have?</label>
          <div className='relative'>
            <input
              type='number'
              min={0}
              inputMode='numeric'
              value={Number.isFinite(sqm) ? String(sqm) : ''}
              onChange={(e) => {
                const n = e.target.value === '' ? undefined : Number(e.target.value);
                set('areaSqm', n as any);
              }}
              className='w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 pr-14 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300'
              placeholder='0'
              aria-label='Flat area in square meters'
            />
            <span className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500'>m²</span>
          </div>
        </div>
      </div>

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

