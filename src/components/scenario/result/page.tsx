'use client';

import Badge from '@/components/common/Badge';
import Header from '@/components/common/Header';
import { cn } from '@/utils/cn';
import { useRouter, useSearchParams } from 'next/navigation';
import { TextBubbleScenario } from '@/components/TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '@/components/TextBubble/TextBubbleUser';
import Button from '@/components/common/Button';
import { useGetScenario } from '@/lib/tanstack/query/scenario.query';
import Spinner from './Spinner';

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
    console.log('시나리오 생성 후 불러오는데 실패했습니다.');
  }
  if (!isOnboardingParam && isLoading) {
    //로딩 시간은 약 5초정도, 질문에 따라 차이가 있을수 있습니다.
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
        {displayKeywords?.map((keyword, idx) => (
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

// 3. 메인 페이지 컴포넌트에서는 Header와 함께 Suspense로 감싸서 내보내기
const ScenarioResultPage = () => {
  return (
    <>
      <Header type="scenario" />
        <ScenarioResultContent />
    </>
  );
};

export default ScenarioResultPage;