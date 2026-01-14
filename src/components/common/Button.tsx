'use client';

type ButtonVariant = 'half' | 'full';
type ButtonStyle = 'solid' | 'outline';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  buttonStyle?: ButtonStyle;
  icon?: React.ReactNode;
}

const sizeVariants: Record<ButtonVariant, string> = {
  half: 'w-[150px] h-[50px]',
  full: 'w-[300px] h-[50px]',
};
const styleVariants: Record<ButtonStyle, string> = {
  solid: ' border-none ',
  outline: ' border border-primary-400',
};
export default function Button({
  type = 'button',
  children,
  className,
  variant = 'full',
  buttonStyle = 'solid',
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={` flex items-center rounded-xl justify-center transition-all active:scale-95 ${icon ? 'gap-[15px]' : ''} ${sizeVariants[variant]}${styleVariants[buttonStyle]} ${className}`}
      {...props}
    >
      {/* 아이콘이 있을 경우 */}
      {icon && <span className="shrink-0 ">{icon}</span>}
      {/* 텍스트 */}
      <span className="body1">{children}</span>
    </button>
  );
}
