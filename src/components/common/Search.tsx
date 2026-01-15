import { forwardRef } from 'react';
import { Input } from './Input';
import SearchIcon from '@/assets/icon/search.svg?react';

export const Search = forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>((props, ref) => {
  const baseCls = 'pl-[40px] body1';

  return (
    <div className="relative w-full ">
      <SearchIcon className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-400" />

      <Input
        ref={ref}
        variant="search"
        className={['pl-[40px] body1', props.className]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
    </div>
  );
});
Search.displayName = 'Search';
