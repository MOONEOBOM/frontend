'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LeftChevron from '@/assets/icon/chevron_left.svg?react';
import ChatModal from '@/components/chatbot/ChatModal';
import ScenarioModal from '../scenario/result/ScenarioModal';

const Header = ({
  type = 'back',
}: {
  type: 'back' | 'home' | 'chat' | 'scenario' | 'onboarding';
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickLeft = {
    back: () => router.back(),
    home: () => router.push('/'),
    chat: () => router.back(),
    scenario: () => setIsModalOpen(true),
    onboarding: () => router.push('/'),
  };

  return (
    <>
      <div className="flex h-[62px] w-full items-center justify-between px-[20px]">
        {type !== 'onboarding' ? (
          <button onClick={handleClickLeft[type]}>
            <LeftChevron className="cursor-pointer" />
          </button>
        ) : (
          <div className="w-[24px]" /> // 버튼이 빠져도 레이아웃(정렬)을 유지하고 싶다면 빈 공간 추가
        )}

        {type === 'chat' && (
          <button
            type="button"
            className="body2 text-red cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            상담 종료
          </button>
        )}
        {type === 'onboarding' && (
          <div className="body1" onClick={() => router.push('/')}>
            SKIP
          </div>
        )}
      </div>

      {isModalOpen && type === 'chat' && (
        <ChatModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}

      {isModalOpen && type === 'scenario' && (
        <ScenarioModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default Header;
