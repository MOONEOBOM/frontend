'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LeftChevron from '@/assets/icon/chevron_left.svg?react';
import ChatModal from '@/components/chatbot/ChatModal';
import ScenarioModal from '../scenario/result/ScenarioModal';
import { ChatMessage } from '@/models/summary';

const Header = ({
  type = 'back',
  conversation,  // 챗봇에서만 쓰는 요약 API용
}: {
  type: 'back' | 'home' | 'chat' | 'scenario';
  conversation?: ChatMessage[];  // 챗봇 상담 요약 API -> 챗봇일때만 쓰니 "?" 사용
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickLeft = {
    back: () => router.back(),
    home: () => router.push('/'),
    chat: () => router.back(),
    scenario: () => setIsModalOpen(true),
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
        // 요약 API 관련
        <ChatModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          conversation={conversation ?? []}
        />
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
