'use client';

import Badge from '@/components/common/Badge';
import Header from '@/components/common/Header';
import { cn } from '@/utils/cn';
import { useRouter, useSearchParams } from 'next/navigation';
import { TextBubbleScenario } from '@/components/TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '@/components/TextBubble/TextBubbleUser';
import Button from '@/components/common/Button';
import { useGetScenario } from '@/lib/tanstack/query/scenario.query';
import ResultSkeleton from './ResultSkeleton';
import ResultError from './ResultError';

const ONBOARD_BUBBLE = [
  { role: 'agent', message: 'U+ 고객센터입니다. 어떤 점이 불편하신가요?' },
  { role: 'user', message: '해외 다녀왔는데 요금이 너무 많이 나왔어요' },
  {
    role: 'agent',
    message:
      '사용 번호 010-1234-5678 성함 이OO 고객님 맞으실까요? 본인이신가요?',
  },
  { role: 'user', message: '네 맞아요' },
  { role: 'agent', message: '이용내역 조회 동의 가능하신가요?' },
  { role: 'user', message: '네 가능합니다' },
  {
    role: 'agent',
    message: '1월 12일 ~ 14일 동안 과금이 발생한 것으로 확인됩니다.',
  },
];

const ONBOARD_KEYWORD = ['요금제 변경', '요금 과다 부여', '요금제 추천'];

const ScenarioResultContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const consultType = searchParams.get('consultType');
  const reason = searchParams.get('reason');
  const isOnboardingParam = searchParams.get('isOnboarding') === 'true';

  const {
    data: result,
    isLoading,
    isError,
    refetch,
  } = useGetScenario(
    {
      categoryKey: consultType ?? '',
      reasonKey: reason ? [reason] : [],
    },
    { enabled: !isOnboardingParam },
  );

  const displayScenario =
    (isOnboardingParam ? ONBOARD_BUBBLE : result?.scenario) || [];
  const displayKeywords =
    (isOnboardingParam ? ONBOARD_KEYWORD : result?.keywords) || [];
  if (!isOnboardingParam && isError) {
    return <ResultError refetch={refetch} />;
  }
  if (!isOnboardingParam && isLoading) {
    return <ResultSkeleton />;
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
        {displayKeywords?.map((keyword, idx) => (
          <Badge key={idx} color="blue">
            {keyword}
          </Badge>
        ))}
      </div>
      <div className={cn('flex flex-col items-center gap-[24px]')}>
        <span className="heading4">
          <span className={cn('text-uplus')}>LG U+</span> 고객센터: 1544-0010
        </span>
      </div>
      <div
        className={cn('flex w-full flex-col border-t border-b border-gray-300')}
      >
        {displayScenario?.map((bubble, idx) => {
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
      <ScenarioResultContent />
    </>
  );
};

export default ScenarioResultPage;
