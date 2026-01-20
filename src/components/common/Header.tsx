'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LeftChevron from '@/assets/icon/chevron_left.svg?react';
import ChatModal from '@/components/chatbot/ChatModal';
import SenarioEndModal from '@/components/scenario/SenarioEndModal';

const Header = ({
  type = 'back',
}: {
  type: 'back' | 'home' | 'chat' | 'scenario';
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickLeft = {
    back: () => router.back(),
    home: () => router.push('/'),
    scenario: () => setIsModalOpen(true),
    chat: () => router.back(),
  };

  return (
    <>
      <div className="flex h-[62px] w-full items-center justify-between px-[20px]">
        {/* 왼쪽 버튼 */}
        <LeftChevron
          className="cursor-pointer"
          onClick={handleClickLeft[type]}
        />

        {/* 오른쪽 버튼 (채팅 타입일 때만 상담 종료 버튼 노출) */}
        {type === 'chat' && (
          <button
            className="body2 text-red"
            onClick={() => setIsModalOpen(true)}
          >
            상담 종료
          </button>
        )}
      </div>

      {/* type에 따라 다른 모달을 렌더링 (상태 제어는 Header가 함) */}
      {isModalOpen && (
        <>
          {type === 'chat' && (
            <ChatModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
          {type === 'scenario' && (
            <SenarioEndModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </>
      )}
    </>
  );
};

export default Header;
