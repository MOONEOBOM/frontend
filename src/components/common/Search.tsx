import { forwardRef } from 'react';
import { Input } from './Input';
import SearchIcon from '@/assets/icon/search.svg?react';

export const Search = forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>(({ className, width = 'w-full', error = false, ...props }, ref) => {
  const wrapperCls = [
    width,
    'flex',
    'items-center',
    'justify-items-start',
    'body1',
    'h-[40px]',
    'py-[7px]',
    'px-[9px]',
    'rounded-[10px]',
    'bg-[var(--color-white)]',
    'border',

    error ? 'border-red-500' : 'border-[var(--color-border-300)]',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperCls}>
      <SearchIcon fill="text-gray-400" />

      <Input ref={ref} variant="search" {...props} />
    </div>
  );
});
Search.displayName = 'Search';
