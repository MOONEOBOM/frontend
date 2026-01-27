'use client';

import { Suspense } from 'react';
import Badge from '@/components/common/Badge';
import Header from '@/components/common/Header';
import { cn } from '@/utils/cn';
import { useRouter, useSearchParams } from 'next/navigation';
import { TextBubbleScenario } from '@/components/TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '@/components/TextBubble/TextBubbleUser';
import Button from '@/components/common/Button';
import { useGetScenario } from '@/lib/tanstack/query/scenario.query';
import Spinner from './Spinner';

const ScenarioResultContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const consultType = searchParams.get('consultType');
  const reason = searchParams.get('reason');

  const {
    data: result,
    isLoading,
    isError,
  } = useGetScenario({
    categoryKey: consultType ?? '',
    reasonKey: reason ? [reason] : [],
  });

  if (isError) {
    console.log('시나리오 생성 후 불러오는데 실패했습니다.');
  }

  if (isLoading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'my-[34px] flex w-full flex-col items-center gap-[34px] px-[25px] pb-[10px]',
      )}
    >
      <div className={cn('script-body-16 flex w-full flex-col items-center')}>
        <span>무너가 시나리오를 만들었어요.</span>
        <br />
        <span>전화 상담 연결 후,</span>
        <span>시나리오대로 상담을 진행해보아요!</span>
      </div>
      <div className={cn('flex gap-2')}>
        {result?.keywords?.map((keyword, idx) => (
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
        {result?.scenario?.map((bubble, idx) => {
          return bubble.role === 'agent' ? (
            <TextBubbleScenario key={idx} text={bubble.message} />
          ) : (
            <TextBubbleUser key={idx} text={bubble.message} />
          );
        })}
      </div>
      <Button onClick={() => router.push('/calls/ex')} className="bg-primary">
        전화 연결하기
      </Button>
    </div>
  );
};

const ScenarioResultPage = () => {
  return (
    <>
      <Header type="scenario" />
      <Suspense fallback={
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <Spinner size="lg" />
        </div>
      }>
        <ScenarioResultContent />
      </Suspense>
    </>
  );
};

// 3. 메인 페이지 컴포넌트에서는 Header와 함께 Suspense로 감싸서 내보내기
const ScenarioResultPage = () => {
  return (
    <>
      <Header type="scenario" />
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <Spinner size="lg" />
        </div>
        <ScenarioResultContent />
    </>
  );
};

export default ScenarioResultPage;