import { clsx } from 'clsx';

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  value: string;
  onChange: (next: string) => void;
  className?: string;
};

export function SegmentedToggle({ options, value, onChange, className }: Props) {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full bg-slate-100 p-1 text-sm',
        className,
      )}
      role="tablist"
      aria-label="Explore toggle"
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
            className={clsx(
              'relative rounded-full px-4 py-2 transition',
              active
                ? 'bg-white text-slate-900 shadow'
                : 'text-slate-600 hover:text-slate-800',
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export default SegmentedToggle;

