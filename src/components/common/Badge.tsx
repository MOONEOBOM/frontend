import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  color: 'blue' | 'primary';
  isSelected?: boolean;
  onClick?: () => void;
  outline?: boolean;
  size?: 'default' | 'large';
}

const Badge = ({
  children,
  color,
  isSelected = false,
  onClick,
  outline = false,
  size = 'default',
}: BadgeProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'body2 flex w-fit items-center justify-center rounded-full',
        'box-border',

        color === 'blue' && 'bg-secondary',
        color === 'primary' && 'border-primary bg-primary-100 border-[1px]',

        color === 'blue' && outline && 'border-secondary-dark border-[1px]',

        size === 'default' && 'h-[27px] px-[10px]',
        size === 'large' && 'h-[33px] px-[14px]',

        isSelected && 'bg-primary',
      )}
    >
      <span className="pt-[1px] leading-none">{children}</span>
    </div>
  );
};

export default Badge;
