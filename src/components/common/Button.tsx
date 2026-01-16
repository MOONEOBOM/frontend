'use client';
import { cn } from '@/utils/cn';
type ButtonSize = 'half' | 'full';
type ButtonVariant = 'solid' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
}

const sizes: Record<ButtonSize, string> = {
  half: 'w-[150px] h-[50px]',
  full: 'w-[300px] h-[50px]',
};
const variants: Record<ButtonVariant, string> = {
  solid: ' border-none ',
  outline: ' border border-gray-400',
};
export default function Button({
  children,
  className,
  size = 'full',
  variant = 'solid',
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center rounded-xl justify-center transition-all active:scale-95',
        icon ? 'gap-[15px]' : '',
        sizes[size],
        variants[variant],
        className,
      )}
      {...props}
    >
      {/* 아이콘이 있을 경우 */}
      {icon && <span className="shrink-0 ">{icon}</span>}
      {/* 텍스트 */}
      <span className="body1">{children}</span>
    </button>
  );
}
