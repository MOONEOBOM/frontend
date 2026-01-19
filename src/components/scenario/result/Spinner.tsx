import { cn } from '@/utils/cn';

type SpinnerSize = 'sm' | 'md' | 'lg';

interface SpinnerProps {
  size?: SpinnerSize;
}

const sizeClassMap: Record<SpinnerSize, string> = {
  sm: 'w-[25px] h-[25px] border-[3px]',
  md: 'w-[60px] h-[60px] border-[5px]',
  lg: 'w-[80px] h-[80px] border-[6px]',
};

const Spinner = ({ size = 'sm' }: SpinnerProps) => {
  return (
    <div className="flex items-center justify-center p-[8px]">
      <div
        className={cn(
          sizeClassMap[size],
          'animate-[spin_0.8s_linear_infinite] rounded-full border-[var(--color-primary)] border-t-[var(--color-gray-200)]',
        )}
      />
    </div>
  );
};

export default Spinner;
