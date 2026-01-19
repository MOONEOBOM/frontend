import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  type: 'blue' | 'primary';
  isSelected?: boolean;
}

const Badge = ({ children, type, isSelected = false }: BadgeProps) => {
  return (
    <div
      className={cn(
        'body2 flex w-fit items-center rounded-full leading-none',

        type === 'blue' && 'bg-secondary px-[10px] py-[6px]',
        type === 'primary' &&
          'border-primary bg-primary-100 box-border border-[1px] px-[14px] py-[8px]',

        isSelected && 'bg-primary',
      )}
    >
      {children}
    </div>
  );
};

export default Badge;