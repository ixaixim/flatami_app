import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', className, ...rest }: ButtonProps) => (
  <button
    {...rest}
    className={clsx(
      'btn w-full text-lg', // <- keeps your base "btn" settings
      variant === 'primary'
        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
        : 'border border-indigo-600 text-indigo-700 hover:bg-indigo-50',
      className
    )}
  />
);
