'use client';

import LeftChevron from '@/assets/icon/chevron_left.svg?react';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from './Modal';

const Header = ({
  type = 'back',
}: {
  type: 'back' | 'home' | 'chat' | 'scenario';
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleClick = {
    back: () => router.back(),
    home: () => router.push('/'),
    scenario: () => setIsModalOpen(true),
    chat: () => router.back(),
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onOverlayClick={() => setIsModalOpen(false)}
        type="select"
        onBack={() => setIsModalOpen(false)}
        onClose={() => router.replace('/')}
      >
        시나리오를 종료할까요?
        <br />
        지금 종료하면 시나리오는 <br />
        저장되지 않아요.
      </Modal>

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
