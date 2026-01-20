import { cn } from '@/utils/cn';
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
    return (
      <input
        ref={ref}
        aria-invalid={error || undefined}
        className={cn(
          width,
          'body2 h-[40px] rounded-[10px] border outline-none disabled:cursor-not-allowed disabled:opacity-50',

          variant === 'search'
            ? 'border-none px-[9px]'
            : 'border-primary bg-white px-[15px]',

          error ? 'border-red-500' : '',
        )}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
