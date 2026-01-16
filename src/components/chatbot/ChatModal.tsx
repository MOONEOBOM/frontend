'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '../common/Header';
import Modal from '../common/Modal';

export default function ChatModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  function handleModal() {
    setIsModalOpen(true);
  }
  const handleBackAction = () => {
    setIsModalOpen(false);
  };

  const handleCloseAction = () => {
    setIsModalOpen(false);
    router.push('/summary');
  };
  return (
    <div>
      <Header onClickButton={handleModal} type="chat" />
      <Modal
        type="select"
        isOpen={isModalOpen}
        onBack={handleBackAction}
        onClose={handleCloseAction}
      >
        상담을 종료하시겠습니까?
        <br />
        상담 종료시 요약이 진행됩니다
      </Modal>
    </div>
  );
}
