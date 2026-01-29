import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  color: 'blue' | 'primary';
  isSelected?: boolean;
  onClick?: () => void;
  outline?: boolean;
  size?: 'default' | 'large';
  isOnboarding?: boolean;
  isPointerCursor?: boolean;
}

const Badge = ({
  children,
  color,
  isSelected = false,
  onClick,
  outline = false,
  size = 'default',
  isOnboarding,
  isPointerCursor = true,
}: BadgeProps) => {
  return (
    <motion.div
      onClick={onClick}
      initial={
        isOnboarding
          ? { scale: 1, backgroundColor: 'var(--color-primary-100)' }
          : false
      }
      animate={
        isOnboarding
          ? {
              scale: [1, 1.3, 1],
              backgroundColor: [
                'var(--color-primary-100)',
                'var(--color-primary)',
                'var(--color-primary)',
              ],
            }
          : {}
      }
      transition={{
        duration: 0.6,
        delay: 0.5,
        times: [0, 0.5, 1],
      }}
      className={cn(
        'body2 flex w-fit items-center justify-center rounded-full',
        'box-border',

        color === 'blue' && 'bg-secondary',
        color === 'primary' && 'border-primary bg-primary-100 border-[1px]',

        color === 'blue' && outline && 'border-secondary-dark border-[1px]',

        size === 'default' && 'h-[27px] px-[10px]',
        size === 'large' && 'h-[33px] px-[14px]',

        isSelected && 'bg-primary',

        isPointerCursor && 'cursor-pointer',
      )}
    >
      <span className="pt-[1px] leading-none">{children}</span>
    </motion.div>
  );
};

export default Badge;
