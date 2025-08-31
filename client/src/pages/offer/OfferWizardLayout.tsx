import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '../../components/atoms/Icon';
import { offerSteps } from './steps';
import { WizardProgress } from '../../components/molecules/WizardProgress';
import { OfferWizardProvider } from '../../contexts/OfferWizardContext';

function InnerLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const last = pathname.split('/').pop() || 'type';
  const idx = Math.max(0, offerSteps.indexOf(last as any));

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-30 bg-white/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <button
            aria-label="Close"
            onClick={() => navigate('/create')}
            className="rounded-full p-1 text-slate-600 hover:bg-slate-100"
          >
            <Icon name='X' className='h-6 w-6' />
          </button>
          <WizardProgress currentIndex={idx < 0 ? 0 : idx} total={offerSteps.length} />
          <span className="w-6" />
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-6">
        <Outlet />
      </div>
    </div>
  );
}

export default function OfferWizardLayout() {
  return (
    <OfferWizardProvider>
      <InnerLayout />
    </OfferWizardProvider>
  );
}

