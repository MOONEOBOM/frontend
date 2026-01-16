'use client';
import { useRouter } from 'next/navigation';
import Badge from '../common/Badge';
import Header from '../common/Header';
import { TextBubbleService } from '../TextBubble/TextBubbleService';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import Modal from '../common/Modal';
import { useState } from 'react';
import SendIcon from '@/assets/icon/send.svg';
const ChatbotPage = () => {
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
    <div className="min-h-screen bg-gray-200">
      <div className="px-[20px]">
        <div onClick={handleModal}>
          <Header type="chat" />

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

        <TextBubbleUser />
        <TextBubbleService />
        <TextBubbleUser />
        <TextBubbleService />
      </div>
      <div className="fixed bottom-0">
        <div className="mx-[12px] mb-[10px]">
          <Badge type="blue">대학생 요금제 추천해줘</Badge>
        </div>
        <div className="flex h-[45px] w-[390px] items-center justify-between bg-white p-[12px]">
          <input
            type="text"
            className="body1 flex-1 outline-none placeholder:text-gray-400"
            placeholder="상담 내용을 입력하세요."
          />
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
