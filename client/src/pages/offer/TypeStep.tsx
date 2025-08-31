import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/atoms/Icon';
import { useOfferWizard } from '../../contexts/OfferWizardContext';

export default function TypeStep() {
  const navigate = useNavigate();
  const { set, data } = useOfferWizard();

  const onChoose = (type: 'flat' | 'room') => {
    set('offeringType', type);
    navigate('location');
  };

  return (
    <section>
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        What are you offering? <span>🏡</span>
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onChoose('flat')}
          className={[
            'rounded-2xl border bg-white p-8 text-center shadow-sm transition-colors',
            'hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300',
            data.offeringType === 'flat' ? 'border-slate-900' : 'border-slate-200',
          ].join(' ')}
        >
          <Icon name='Building2' className='mx-auto h-6 w-6 text-slate-700' />
          <div className="mt-3 text-lg font-semibold text-slate-900">Flat</div>
        </button>

        <button
          type="button"
          onClick={() => onChoose('room')}
          className={[
            'rounded-2xl border bg-white p-8 text-center shadow-sm transition-colors',
            'hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300',
            data.offeringType === 'room' ? 'border-slate-900' : 'border-slate-200',
          ].join(' ')}
        >
          <Icon name='Bed' className='mx-auto h-6 w-6 text-slate-700' />
          <div className="mt-3 text-lg font-semibold text-slate-900">Room</div>
        </button>
      </div>
    </section>
  );
}

