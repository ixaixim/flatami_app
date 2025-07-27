import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', className, ...rest }: ButtonProps) => (
  <button
    {...rest}
    className={clsx(
      'w-full rounded-xl py-4 text-lg font-medium transition',
      variant === 'primary'
        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
        : 'border border-indigo-600 text-indigo-700 hover:bg-indigo-50',
      className
    )}
  />
);
