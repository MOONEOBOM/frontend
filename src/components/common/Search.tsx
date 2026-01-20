import { forwardRef } from 'react';
import { Input } from './Input';
import SearchIcon from '@/assets/icon/search.svg?react';
import { cn } from '@/utils/cn';

export const Search = forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>(({ className, width = 'w-full', error = false, ...props }, ref) => {
  return (
    <div
      className={cn(
        width,
        'body1 flex h-[40px] items-center rounded-[10px] border bg-white px-[9px] py-[7px]',

        error ? 'border-red-500' : 'border-gray-300',
        className,
      )}
    >
      <SearchIcon width={21} />

      <Input ref={ref} variant="search" error={error} {...props} />
    </div>
  );
});
Search.displayName = 'Search';
