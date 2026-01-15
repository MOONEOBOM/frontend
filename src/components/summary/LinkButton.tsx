import RightChevron from '@/assets/icon/chevron_right.svg?react';
import React from 'react';

const LinkButton = ({
  children,
  type,
  isFull,
  onClick,
}: {
  children: React.ReactNode;
  type: 'outline' | 'solid';
  isFull?: boolean;
  onClick: () => void;
}) => {
  const baseStyle =
    'flex items-center h-[30px] gap-[20px] justify-between body2 rounded-[15px] px-[12px] py-[5px]';

  const typeStyles = {
    outline: 'border-[1.5px] border-primary bg-white',
    solid: 'bg-primary',
  };

  const className = `
    ${baseStyle} 
    ${typeStyles[type]} 
    ${isFull ? 'w-[285px] h-[35px]' : 'w-fit'}
  `;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
      <RightChevron />
    </button>
  );
};

export default LinkButton;
