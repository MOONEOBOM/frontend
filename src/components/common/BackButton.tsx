'use client';

import Link from 'next/link';
import LeftChevron from '@/assets/icon/chevron_left.svg?react';
import { useRouter } from 'next/navigation';
import Modal from './Modal';
import { useState } from 'react';

const BackButton = ({
  type = 'back',
}: {
  type: 'back' | 'home' | 'chat' | 'scenario';
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  if (type === 'scenario') {
    return (
      <Modal
        isOpen={isModalOpen}
        onOverlayClick={() => setIsModalOpen(false)}
        type="select"
        onBack={() => setIsModalOpen(false)}
        onClose={() => router.replace('/')}
      >
        시나리오를 종료할까요?
        <br />
        지금 종료하면 시나리오는 <br />
        저장되지 않아요.
      </Modal>
    );
  }

  if (type === 'back') {
    return (
      <LeftChevron className="cursor-pointer" onClick={() => router.back()} />
    );
  }

  return (
    <Link href="/" className="cursor-pointer">
      <LeftChevron />
    </Link>
  );
};

export default BackButton;
