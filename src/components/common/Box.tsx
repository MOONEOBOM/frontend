import RightChevron from '@/assets/icon/chevron_right.svg?react';
import Link from 'next/link';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`shadow-box flex h-[50px] w-[315px] cursor-pointer items-center justify-between overflow-hidden rounded-[10px] bg-white p-[10px] ${className}`}
    >
      <div className="heading4 truncate">{children}</div>
      <RightChevron />
    </div>
  );
};

export default Box;
