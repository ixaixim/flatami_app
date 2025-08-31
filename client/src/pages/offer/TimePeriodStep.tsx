import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/atoms/Icon';
import { useOfferWizard } from '../../contexts/OfferWizardContext';

function RadioRow({
  checked,
  label,
  onClick,
}: {
  checked: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left',
        checked ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200',
      ].join(' ')}
      aria-pressed={checked}
    >
      <span className='text-slate-900'>{label}</span>
      <span
        className={[
          'inline-flex h-5 w-5 items-center justify-center rounded-full border',
          checked ? 'border-slate-900' : 'border-slate-300',
        ].join(' ')}
        aria-hidden
      >
        {checked ? <span className='block h-2.5 w-2.5 rounded-full bg-slate-900' /> : null}
      </span>
    </button>
  );
}

export default function TimePeriodStep() {
  const navigate = useNavigate();
  const { data, set } = useOfferWizard();

  const limited = data.periodType === 'limited';

  const canContinue = useMemo(() => {
    if (!data.startDate) return false;
    if (limited) {
      if (!data.endDate) return false;
      return new Date(data.endDate) >= new Date(data.startDate);
    }
    return true;
  }, [data.startDate, data.endDate, limited]);

  const onSelect = (type: 'limited' | 'unlimited') => {
    set('periodType', type);
    if (type === 'unlimited') set('endDate', undefined);
  };

  const goNext = () => {
    if (!canContinue) return;
    navigate('../rooms');
  };
  const goBack = () => navigate('../location');

  return (
    <section>
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          For which time period? <span>🗓️</span>
        </h1>
      </header>

      <div className='mx-auto mt-6 max-w-xl'>
        <p className='mb-2 text-slate-600'>For which time period? 🗓️</p>
        <div className='space-y-3'>
          <RadioRow
            checked={limited}
            label='Limited'
            onClick={() => onSelect('limited')}
          />
          <RadioRow
            checked={!limited}
            label='Unlimited'
            onClick={() => onSelect('unlimited')}
          />
        </div>

        <div className='mt-6 space-y-4'>
          <div>
            <label className='mb-2 block text-slate-800'>Start date</label>
            <div className='relative'>
              <Icon name='Calendar' className='pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400' />
              <input
                type='date'
                value={data.startDate || ''}
                onChange={(e) => set('startDate', e.target.value || undefined)}
                className='w-full rounded-3xl border border-slate-300 bg-white px-11 py-3 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300'
              />
            </div>
          </div>

          {limited && (
            <div>
              <label className='mb-2 block text-slate-800'>End date</label>
              <div className='relative'>
                <Icon name='Calendar' className='pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400' />
                <input
                  type='date'
                  value={data.endDate || ''}
                  onChange={(e) => set('endDate', e.target.value || undefined)}
                  min={data.startDate}
                  className='w-full rounded-3xl border border-slate-300 bg-white px-11 py-3 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300'
                />
              </div>
            </div>
          )}
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

