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
import { TextBubbleScenario } from '@/components/TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '@/components/TextBubble/TextBubbleUser';

const MOCK_BUBBLE = [
  { type: 'moono', text: 'U+ 고객센터입니다. 어떤 점이 불편하신가요?' },
  { type: 'user', text: '해외 다녀왔는데 요금이 너무 많이 나왔어요' },
  {
    type: 'moono',
    text: '사용 번호 010-1234-5678 성함 이OO 고객님 맞으실까요? 본인이신가요?',
  },
  { type: 'user', text: '네 맞아요' },
  { type: 'moono', text: '이용내역 조회 동의 가능하신가요?' },
  { type: 'user', text: '네 가능합니다' },
  {
    type: 'moono',
    text: '1월 12일 ~ 14일 동안 과금이 발생한 것으로 확인됩니다.',
  },
];

const MOCK_KEYWORD = ['요금제 변경', '요금 과다 부여', '요금제 추천'];

const ScenarioResultPage = () => {
  const [noRecordModal, setNoRecordModal] = useState(false);
  const router = useRouter();

  //api 연결시 tanstack query의 isPending 과 변경
  const [isPending, setPending] = useState(false);

  const handleUpload = () => {
    setPending(true);
    setTimeout(() => {
      router.push('/summary');
    }, 2000);
  };

  return (
    <>
      <Header type="scenario" />

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
          {MOCK_KEYWORD.map((keyword, idx) => (
            <Badge key={idx} color="blue">
              {keyword}
            </Badge>
          ))}
        </div>
        <div className={cn('flex flex-col items-center gap-[24px]')}>
          <span
            className={cn(
              'script-body-14 bg-[linear-gradient(to_top,var(--color-primary)_40%,transparent_40%)] px-0.5 leading-[1.2]',
            )}
          >
            통화 내용을 녹음하면 무너가 요약해드려요!
          </span>
          <span className="heading4">
            <span className={cn('text-uplus')}>LG U+</span> 고객센터: 1544-0010
          </span>
        </div>
        <div
          className={cn('w-full flex-col border-t border-b border-gray-300')}
        >
          {MOCK_BUBBLE.map((bubble, idx) => {
            return bubble.type === 'moono' ? (
              <TextBubbleScenario key={idx} />
            ) : (
              <TextBubbleUser key={idx} text={bubble.text} />
            );
          })}
        </div>
        {isPending ? (
          <UploadLoading />
        ) : (
          <UploadLayout onClick={handleUpload} />
        )}

        <button
          type="button"
          onClick={() => setNoRecordModal(true)}
          className={cn(
            'script-body-16 cursor-pointer bg-[linear-gradient(to_top,var(--color-primary)_40%,transparent_40%)] px-0.5 leading-[1.2]',
          )}
        >
          녹음 파일이 없어요T_T
        </button>
        <Modal
          isOpen={noRecordModal}
          image={<MoonoTako />}
          onOverlayClick={setNoRecordModal}
          type="info"
          onBack={() => router.replace('/')}
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
