const Badge = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: 'blue' | 'primary';
}) => {
  const baseStyle = 'flex items-center rounded-full w-fit body2 leading-none';
  const typeStyles = {
    blue: 'px-[10px] py-[6px] bg-secondary',
    primary:
      'box-border px-[14px] py-[8px] bg-primary-100 border-[1px] border-primary',
  };

  const className = `${baseStyle} ${typeStyles[type]}`;

  return <div className={className}>{children}</div>;
};

export default Badge;
