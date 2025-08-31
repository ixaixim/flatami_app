import { Icon } from '../atoms/Icon';

type Props = {
  currentIndex: number;
  total: number;
};

export function WizardProgress({ currentIndex, total }: Props) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => {
        const isBadge = i === currentIndex && (i === 0 || i === 1 || i === 2 || i === 3);
        return (
          <span
            key={i}
            className={[
              'inline-flex items-center justify-center rounded-full',
              isBadge ? 'h-8 w-8 bg-slate-900 text-white' : 'h-2 w-2',
              !isBadge ? (i <= currentIndex ? 'bg-slate-900' : 'bg-slate-300') : '',
            ].join(' ')}
            aria-hidden
          >
            {isBadge ? (
              <Icon
                name={i === 0 ? 'Home' : i === 1 ? 'MapPin' : i === 2 ? 'Calendar' : 'Expand'}
                className='h-4 w-4'
              />
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

export default WizardProgress;
