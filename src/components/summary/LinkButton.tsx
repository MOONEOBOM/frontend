import LeftChervon from '@/assets/icon/chervon_left.svg';
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
    'flex items-center h-[30px] gap-[20px] justify-between body2 rounded-full px-[12px] py-[5px]';

  const typeStyles = {
    outline: 'border-[1.5px] border-primary bg-white',
    solid: 'bg-primary',
  };

  const className = `
    ${baseStyle} 
    ${typeStyles[type]} 
    ${isFull ? 'w-[285px]' : ''}
  `;

  return (
    <button className={className}>
      {children}
      <LeftChervon />
    </button>
  );
};

export default LinkButton;
