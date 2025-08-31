import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/atoms/Icon';
import BottomNav from '../components/molecules/BottomNav';

export default function CreatePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh flex flex-col">
      {/* Content */}
      <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-8">
        <header className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Create a Listing <span className="align-middle">✌️</span>
          </h1>
          <p className="mx-auto mt-2 max-w-md text-slate-600">
            What type of listing do you want to create?
          </p>
        </header>

        {/* Choice cards */}
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => navigate('/create/offer')}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                <Icon name='Home' className='h-5 w-5 text-indigo-600' />
              </span>
              <div>
                <div className="text-lg font-semibold text-slate-900">Offer</div>
                <p className="text-sm text-slate-600">
                  I have a place and I am offering a room.
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate('/create/search')}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                <Icon name='Search' className='h-5 w-5 text-indigo-600' />
              </span>
              <div>
                <div className="text-lg font-semibold text-slate-900">Search</div>
                <p className="text-sm text-slate-600">
                  I am looking for a flat or a flatmate.
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Info card */}
        <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-slate-50 p-5">
          <div className="flex items-start gap-3">
            <Icon name='Info' className='mt-0.5 h-5 w-5 text-slate-500' />
            <p className="text-sm leading-6 text-slate-700">
              Our goal is to enable you to smoothly communicate with potential
              interests. That's why we'll gather all necessary info now and
              provide you with a personalized, optimized Instagram template at
              the end of the flow. Happy creating 😎
            </p>
          </div>
        </div>
      </main>

      {/* Bottom nav (mobile) */}
      <BottomNav />
    </div>
  );
}
