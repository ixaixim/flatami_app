import { Link } from 'react-router-dom';
import { AvatarPlaceholder } from '../atoms/AvatarPlaceholder';
import { Icon, type IconName } from '../atoms/Icon';
import type { Flatmate } from '../../types/flatmate';

export function FlatmateCard({ flatmate }: { flatmate: Flatmate }) {
  const {
    id,
    name,
    age,
    avatarUrl,
    bio,
    budget,
    preferredArea,
    smoking,
    pets,
    sleepingHabit,
  } = flatmate;

  const traits: { icon: IconName; label: string }[] = [
    { icon: smoking.includes('Non') ? 'CigaretteOff' : 'Cigarette', label: smoking },
    { icon: 'PawPrint', label: pets },
    { icon: sleepingHabit.includes('Night') ? 'Moon' : 'Sun', label: sleepingHabit },
  ];

  return (
    <Link
      to={`/flatmates/${id}`}
      className='block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm
      transition hover:shadow-lg'
    >
      <div className='flex items-center gap-4'>
        <AvatarPlaceholder uri={avatarUrl} alt={name} size={72} />
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-slate-900'>
            {name}, {age}
          </h3>
          <p className='mt-1 line-clamp-2 text-sm text-slate-600'>{bio}</p>
          <div className='mt-2 flex flex-wrap gap-3 text-xs text-slate-600'>
            {traits.map((t) => (
              <span key={t.label} className='inline-flex items-center gap-1'>
                <Icon name={t.icon} className='h-4 w-4' />
                {t.label}
              </span>
            ))}
          </div>
          <div className='mt-2 flex flex-wrap gap-4 text-sm text-slate-700'>
            <span className='inline-flex items-center gap-1'>
              <Icon name='DollarSign' className='h-4 w-4 text-slate-500' />
              {budget}€ / mo
            </span>
            <span className='inline-flex items-center gap-1'>
              <Icon name='MapPin' className='h-4 w-4 text-slate-500' />
              {preferredArea}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
// FlatmateCard: Card view for a flatmate profile with preferences and budget.
