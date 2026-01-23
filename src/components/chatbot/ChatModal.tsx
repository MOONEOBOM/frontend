'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/common/Modal';
import { ChatMessage } from '@/models/summary';
import { useSummaryMutation } from '@/lib/tanstack/mutation/summary.mutation';

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
  const { mutate: createSummary } = useSummaryMutation();

  // 요약 API 관련
  const handleCloseAction = () => {
    console.log('종료 버튼 클릭됨');
    createSummary(
      { conversation },
      {
        onSuccess: () => {
          console.log('요약 API 요청 성공');
          setIsModalOpen(false);
          router.push('/summary');
        },
        onError: (error) => {
          console.error('요약 API 요청 실패', error);
        },
      }
    );
  };

  return (
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
  );
}
