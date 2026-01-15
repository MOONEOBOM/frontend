import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  width?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      error = false,
      style,
      width = 'w-full',
      ...props
    }: InputProps,
    ref,
  ) => {
    const mergedStyle = {
      ['--input-border-color' as any]: 'var(--color-primary-100)',
      ...(style || {}),
    } as React.CSSProperties;

    const baseCls = [
      width,
      'h-[40px]',
      'px-[15px]',
      'rounded-[10px]',
      'bg-[var(--color-white)]',
      'border',
      'border-[var(--input-border-color)]',
      'outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'body2',
    ].join(' ');

    const finalStyle = error
      ? ({
          ...mergedStyle,
          ['--input-border-color' as any]: 'red',
        } as React.CSSProperties)
      : mergedStyle;

    return (
      <input
        ref={ref}
        aria-invalid={error || undefined}
        style={finalStyle}
        className={[baseCls, className].join(' ')}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
