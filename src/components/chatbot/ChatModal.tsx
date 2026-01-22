'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/common/Modal';

export default function ChatModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}) {
  const router = useRouter();

  const handleCloseAction = () => {
    setIsModalOpen(false);
    // TODO: API 요청
    router.push('/summary');
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
