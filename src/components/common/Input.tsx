import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error = false, ...props }: InputProps, ref) => {
    const baseCls = [
      'w-full',
      'h-[40px]',
      'px-[15px]',
      'rounded-[10px]',
      'bg-[var(--color-white)]',
      'border',
      'outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'body2',
    ].join(' ');

    const normalStateCls = ['border-[var(--color-primary-100)]'].join(' ');

    const errorStateCls = ['border-red-500'].join(' ');

    return (
      <input
        ref={ref}
        aria-invalid={error || undefined}
        className={[
          baseCls,
          error ? errorStateCls : normalStateCls,
          className,
        ].join(' ')}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
