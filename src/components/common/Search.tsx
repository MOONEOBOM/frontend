import { Input } from './Input';
import SearchIcon from '@/assets/icon/search.svg?react';

export const Search = (props: React.ComponentProps<typeof Input>) => {
  const baseCls = ['pl-[40px]', 'body1'].join(' ');
  return (
    <div className="relative w-full ">
      <span className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-400">
        <SearchIcon />
      </span>

      <Input
        {...props}
        className={baseCls}
        style={{
          ...(props.style || {}),
          ['--input-border-color' as any]: 'var(--color-border-300)',
        }}
      />
    </div>
  );
};
