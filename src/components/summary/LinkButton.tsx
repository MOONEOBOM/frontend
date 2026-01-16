'use client';

import RightChevron from '@/assets/icon/chevron_right.svg?react';
import React from 'react';
import { cn } from '@/utils/cn';
import Link from 'next/link';

interface LinkButtonProps {
  children: React.ReactNode;
  type: 'outline' | 'solid';
  isFull?: boolean;
  href: string;
}

const LinkButton = ({ children, type, isFull, href }: LinkButtonProps) => {
  const baseStyle =
    'flex items-center h-[30px] gap-[20px] justify-between body2 rounded-[15px] px-[12px] py-[5px]';

  const typeStyles = {
    outline: 'border-[1.5px] border-primary bg-white',
    solid: 'bg-primary',
  };

  const className = cn(
    baseStyle,
    typeStyles[type],
    isFull ? 'w-[285px] h-[35px]' : 'w-fit',
  );

  return (
    <Link href={href} type="button" className={className}>
      {children}
      <RightChevron />
    </Link>
  );
};

export default LinkButton;
