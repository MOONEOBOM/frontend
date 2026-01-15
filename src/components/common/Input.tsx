import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  width?: string;
  variant?: 'default' | 'search';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      variant = 'default',
      error = false,
      style,
      width = 'w-full',
      ...props
    }: InputProps,
    ref,
  ) => {
    const baseCls = [
      width,
      'h-[40px]',
      'px-[15px]',
      'rounded-[10px]',
      'bg-[var(--color-white)]',
      'border',
      'outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'body2',

      variant === 'search'
        ? 'border-[var(--color-border-300)]'
        : 'border-[var(--color-primary-100)]',

      error ? 'border-red-500' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <input
        ref={ref}
        aria-invalid={error || undefined}
        className={[baseCls, className].join(' ')}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
