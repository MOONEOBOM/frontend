'use client';

import LeftChevron from '@/assets/icon/chevron_left.svg?react';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from './Modal';

const Header = ({
  type = 'back',
  modal,
}: {
  type: 'back' | 'home' | 'chat' | 'scenario';
  modal?: React.ReactNode;
}) => {
  const router = useRouter();

  const handleClick = {
    back: () => router.back(),
    home: () => router.push('/'),
    scenario: () => setIsModalOpen(true),
    chat: () => router.back(),
  };

  return (
    <>
      <div className="flex h-[62px] w-full items-center justify-between px-[20px]">
        <LeftChevron className="cursor-pointer" onClick={handleClick[type]} />

        {type == 'chat' ? (
          <button className="body2 text-red" onClick={() => {}}>
            상담 종료
          </button>
        ) : (
          <div />
        )}
      </div>
    </>
  );
};

export default Header;
