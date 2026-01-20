import router from 'next/router';
import Modal from '../common/Modal';
import { useState } from 'react';

const SenarioEndModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
};

export default SenarioEndModal;
