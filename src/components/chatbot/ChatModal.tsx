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
  conversation,  // 상담 대화 전문 (헤더에서 온거 받음)
}: {
  isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
  conversation: ChatMessage[];
}) {
  const router = useRouter();
  const { mutate: createSummary, isPending } = useSummaryMutation();
  const { toast } = useToastHook();

  const [isRouting, setIsRouting] = useState(false);

  // 요약 API 관련
  const handleCloseAction = () => {
    // 이미 요약 API 호출 중이라면 아무것도 X (중복 호출 방지)
    if (isPending || isRouting) {
      return;
    }
    // 대화가 비어있으면 토스트 띄우고 종료
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
          // 데이터 저장 및 요약 완료 -> 결과 페이지로 이동
          // 서버에서 받은 number 타입의 summaryId를 쿼리 파라미터로 전달
          router.push(`/summary?id=${summaryId}`);
        },
        onError: (error) => {
          console.error('요약 API 요청 실패', error);
          toast('negative', '요약 생성 중 오류가 발생했습니다');
          setIsRouting(false);
        },
      }
    );
  };

  return (
    <>
      <Modal
        type="select"
        isOpen={isModalOpen}
        onBack={() => setIsModalOpen(false)}
        onClose={handleCloseAction}
        onOverlayClick={() => setIsModalOpen(false)}
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