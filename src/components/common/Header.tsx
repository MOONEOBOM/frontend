'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LeftChevron from '@/assets/icon/chevron_left.svg?react';
import ChatModal from '@/components/chatbot/ChatModal';
import ScenarioModal from '../scenario/result/ScenarioModal';
import { ChatMessage } from '@/models/summary';
import { useToastHook } from '@/hooks/useToastHook';
import { useOnboardingStore } from '@/store/useOnboarding';

const Header = ({
  type = 'back',
  conversation, // 챗봇에서만 쓰는 요약 API용
}: {
  type: 'back' | 'home' | 'chat' | 'scenario' | 'onboarding';

  conversation?: ChatMessage[]; // 챗봇 상담 요약 API -> 챗봇일때만 쓰니 "?" 사용
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToastHook();
  const stopOnboarding = useOnboardingStore((state) => state.stopOnboarding);

  /**
   * 요약 가능한지 판단하는 부분
   *  : conversation이 존재하고, 1턴 이상의 대화가 있을때만 요약 가능하도록...
   */
  const canSummarize = (conversation?.length ?? 0) > 0;

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
            // 요약 가능한 경우에만 모달창 뜨도록 하기 (대화없으면 클릭해도 동작 X)
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            상담 종료
          </button>
        )}
        {type === 'onboarding' && (
          <button
            className="body1"
            onClick={() => {
              stopOnboarding();
              router.push('/');
            }}
          >
            SKIP
          </button>
        )}
      </div>

      {/* 대화가 존재하고, 대화가 1턴 이상 지속된 경우에만 모달 작동 */}
      {isModalOpen &&
        type === 'chat' &&
        conversation &&
        conversation.length > 0 && (
          // 요약 API 관련
          <ChatModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            conversation={conversation}
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
