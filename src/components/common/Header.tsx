'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LeftChevron from '@/assets/icon/chevron_left.svg?react';
import ChatModal from '@/components/chatbot/ChatModal';

const Header = ({ type = 'back' }: { type: 'back' | 'home' | 'chat' }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickLeft = {
    back: () => router.back(),
    home: () => router.push('/'),
    chat: () => router.back(),
  };

  return (
    <>
      <div className="flex h-[62px] w-full items-center justify-between px-[20px]">
        <button onClick={handleClickLeft[type]}>
          <LeftChevron className="cursor-pointer" />
        </button>

        {type === 'chat' && (
          <button
            type="button"
            className="body2 text-red cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            상담 종료
          </button>
        )}
      </div>

      {isModalOpen && type === 'chat' && (
        <ChatModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default Header;
