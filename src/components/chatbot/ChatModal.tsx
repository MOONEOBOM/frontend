'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/common/Modal';
import { useToastHook } from '@/hooks/useToastHook';
import { ChatMessage } from '@/models/summary';
import { useSummaryMutation } from '@/lib/tanstack/mutation/summary.mutation';
import { ChatbotLoading } from './ChatbotLoading';
import { useState } from 'react';

export default function ChatModal({
  isModalOpen,
  setIsModalOpen,
  conversation,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  conversation: ChatMessage[];
}) {
  const router = useRouter();
  const { mutate: createSummary, isPending } = useSummaryMutation();
  const { toast } = useToastHook();

  const [isRouting, setIsRouting] = useState(false);

  const handleCloseAction = () => {
    if (isPending || isRouting) {
      return;
    }
    if (!conversation.length) {
      toast('normal', '저장할 대화 내용이 없습니다');
      return;
    }

    setIsRouting(true);

    createSummary(
      { conversation },
      {
        onSuccess: (summaryId) => {
          // setIsModalOpen(false);  // ispending() = false -> API 완료 (성공)
          router.push(`/summary?id=${summaryId}`);
        },
        onError: (error) => {
          console.error('요약 API 요청 실패', error);
          toast('negative', '요약 생성 중 오류가 발생했습니다');
          setIsRouting(false);
        },
      },
    );
  };

  return (
    <>
      <Modal
        type="select"
        isOpen={isModalOpen}
        onBack={() => setIsModalOpen(false)}
        onActive={handleCloseAction}
        onOverlayClick={() => setIsModalOpen(false)}
        activeText='종료'
      >
        상담을 종료하시겠습니까?
        <br />
        상담 종료시 요약이 진행됩니다
      </Modal>
      {/* isPending이 true일 때(= API 호출 중) 로딩 화면을 띄워줌 */}
      {(isPending || isRouting) && <ChatbotLoading />}
    </>
  );
}