import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/atoms/Icon';
import { FeatureTag } from '../components/atoms/FeatureTag';
import { InfoItem } from '../components/molecules/InfoItem';
import { mockFlatmates } from '../data/flatmates';

function FlatmateOfferPage() {
  const { id } = useParams();
  const flatmate = mockFlatmates.find((f) => f.id === id);

  if (!flatmate) {
    return <div className='max-w-4xl p-4 mx-auto'>Flatmate not found</div>;
  }

  return (
    <main className='min-h-dvh bg-slate-50'>
      <div className='mx-auto max-w-5xl p-4 md:p-6'>
        <div className='mb-3 flex items-center justify-between'>
          <Link
            to='/flatmates'
            className='text-sm text-slate-600 hover:text-slate-900'
          >
            ← Back to results
          </Link>
          <span
            className='inline-flex items-center gap-2 rounded-full bg-white/80 px-3
            py-1 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200
            backdrop-blur'
          >
            <Icon name='DollarSign' className='h-5 w-5' />
            {flatmate.budget}€ / month
          </span>
        </div>

        <div className='overflow-hidden rounded-2xl bg-white shadow ring-1
          ring-slate-200'>
          <div className='grid gap-6 p-6 md:grid-cols-3'>
            <div className='md:col-span-2'>
              <div className='mb-4 flex items-center gap-4'>
                <img
                  src={flatmate.avatarUrl}
                  alt={`Photo of ${flatmate.name}`}
                  className='h-24 w-24 rounded-full object-cover'
                />
                <div>
                  <h1 className='mb-1 text-2xl font-bold text-slate-900'>
                    {flatmate.name}, {flatmate.age}
                  </h1>
                  {flatmate.verified && (
                    <span className='inline-flex items-center gap-1 text-sm
                      text-green-600'>
                      <Icon name='ShieldCheck' className='h-4 w-4' />
                      Verified
                    </span>
                  )}
                </div>
              </div>

              <div className='mb-6'>
                <div className='mb-2 text-sm font-semibold text-slate-800'>
                  About Me
                </div>
                <p className='leading-relaxed text-slate-700'>{flatmate.bio}</p>
              </div>

              <div className='mb-6'>
                <div className='mb-2 text-sm font-semibold text-slate-800'>
                  Lifestyle
                </div>
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
              </div>

              {flatmate.hobbies.length > 0 && (
                <div className='mb-6'>
                  <div className='mb-2 text-sm font-semibold text-slate-800'>
                    Hobbies
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {flatmate.hobbies.map((h) => (
                      <FeatureTag key={h} label={h} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className='md:col-span-1'>
              <div className='sticky top-6 rounded-xl border border-slate-200
                bg-slate-50 p-4'>
                <ul className='mb-4 space-y-2'>
                  <InfoItem
                    icon={<Icon name='MapPin' className='h-5 w-5 text-gray-700' />}
                    label='Preferred area'
                    value={flatmate.preferredArea}
                  />
                  <InfoItem
                    icon={<Icon name='Calendar' className='h-5 w-5 text-gray-700' />}
                    label='Move-in'
                    value={flatmate.moveInDate}
                  />
                  <InfoItem
                    icon={<Icon name='Briefcase' className='h-5 w-5 text-gray-700' />}
                    label='Occupation'
                    value={flatmate.occupation}
                  />
                </ul>
                <button
                  type='button'
                  className='w-full rounded-md bg-blue-600 py-3 font-medium text-white
                    shadow hover:bg-blue-700'
                >
                  Contact Flatmate
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FlatmateOfferPage;
