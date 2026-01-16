'use client';
import Badge from '@/components/common/Badge';
import Header from '@/components/common/Header';
import { cn } from '@/utils/cn';
import MoonoTako from '@/assets/moono/moono_tako.svg';
import UploadLayout from './UploadLayout';
import UploadLoading from './UploadLoading';
import Modal from '@/components/common/Modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ScenarioResultPage = () => {
  const [ExitModal, setExitModal] = useState(false);
  const [noRecordModal, setNoRecordModal] = useState(false);
  const router = useRouter();
  return (
    <>
      <Header />
      <div
        className={cn(
          'mt-[34px] flex w-full flex-col items-center gap-[34px] px-[25px] pb-[80px]',
        )}
      >
        <div className={cn('script-body-16 flex w-full flex-col items-center')}>
          <span>무너가 시나리오를 만들었어요.</span>
          <br />
          <span>전화 상담 연결 후,</span>
          <span>시나리오대로 상담을 진행해보아요!</span>
        </div>
        <div className={cn('flex gap-2')}>
          <Badge type="blue">요금제 변경</Badge>
          <Badge type="blue">요금 과다 부여</Badge>
          <Badge type="blue">요금제 추천</Badge>
        </div>
        <div className={cn('flex flex-col items-center gap-[24px]')}>
          <span
            className={cn(
              'script-body-14 bg-[linear-gradient(to_top,var(--color-primary)_50%,transparent_50%)] px-0.5 leading-relaxed',
            )}
          >
            통화 내용을 녹음하면 무너가 요약해드려요!
          </span>
          <span className="heading4">
            <span className={cn('text-[var(--color-uplus)]')}>LG U+</span>{' '}
            고객센터: 1544-0010
          </span>
        </div>
        <div
          className={cn(
            'flex h-100 w-full flex-col border-t border-b border-[var(--color-gray-300)]',
          )}
        >
          {/* 시나리오 내용 */}
        </div>
        <UploadLayout />
        {/* <UploadLoading /> */}
        <span
          onClick={() => setNoRecordModal(true)}
          className={cn(
            'script-body-16 bg-[linear-gradient(to_top,var(--color-primary)_40%,transparent_40%)] px-0.5 leading-relaxed',
          )}
        >
          녹음 파일이 없어요ㅠㅠ
        </span>
        <Modal
          isOpen={noRecordModal}
          image={<MoonoTako />}
          type="info"
          onBack={() => {
            router.replace('/');
          }}
        >
          무너봄은 음성 파일에 한해
          <br />
          상담 요약을 제공해드리고 있어요.
          <br />
          <br />
          불편을 드려 죄송합니다.
        </Modal>
      </div>
    </>
  );
};

export default ScenarioResultPage;
