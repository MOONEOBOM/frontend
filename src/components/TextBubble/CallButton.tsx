'use client';

import { useState } from 'react';
import Modal from '../common/Modal';
import { useRouter } from 'next/navigation';

const CallButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onOverlayClick={() => {
            setIsModalOpen(false);
          }}
          onBack={() => {
            setIsModalOpen(false);
          }}
          onActive={() => {
            router.push('/calls/ex');
          }}
          activeText="연결하기"
        >
          <p>
            상담원 연결 시 통화 내용이
            <br />
            자동으로 녹음되며,
            <br />
            종료 후 무너가 요약해 드려요.
          </p>
          <br />
          <p className="body3 text-gray-800">
            '연결하기' 버튼을 누르면 개인정보 수집 및 이용에 동의하는 것으로
            간주됩니다.
          </p>
        </Modal>
      )}

      <button
        onClick={() => setIsModalOpen(true)}
        className="focus:bg-primary-100 body2 shadow-bubble mr-[5px] max-w-[105px] cursor-pointer rounded-[20px] bg-white px-[14px] py-[8px] break-words whitespace-pre-wrap"
      >
        전화 상담
      </button>
    </>
  );
};

export default CallButton;
