'use client';

type ButtonVariant = 'half' | 'full';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
}

const buttonVariants: Record<ButtonVariant, string> = {
  half: 'w-[150px] ',
  full: 'w-[300px]',
};

export default function Button({
  type = 'button',
  children,
  className,
  variant = 'full',
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={` flex items-center rounded-xl justify-center px-[30px] py-[10px] transition-all active:scale-95 ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {/* 아이콘이 있을 경우 렌더링 */}
      {icon && <span className="flex-shrink-0">{icon}</span>}

      {/* 텍스트 내용 */}
      <span className="body1">{children}</span>
    </button>
  );
}
