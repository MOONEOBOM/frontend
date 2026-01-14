import { Input } from './Input';
import SerrchIcon from '@/assets/icon/search.svg';
export const Search = (props: React.ComponentProps<typeof Input>) => {
  const baseCls = ['pl-[40px]', 'body1', 'border-border-300'].join(' ');
  return (
    <div className="relative w-full ">
      <span className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-400">
        <SerrchIcon />
      </span>

      <Input {...props} className={baseCls} />
    </div>
  );
};
