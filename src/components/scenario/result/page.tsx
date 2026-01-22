'use client';

import Badge from '@/components/common/Badge';
import Header from '@/components/common/Header';
import { cn } from '@/utils/cn';
import Modal from '@/components/common/Modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextBubbleScenario } from '@/components/TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '@/components/TextBubble/TextBubbleUser';
import Button from '@/components/common/Button';
import { useScenarioStore } from '@/store/useScenarioStore';

const ScenarioResultPage = () => {
  const router = useRouter();
  const scenarioResult = useScenarioStore((state) => state.scenarioResult);
  console.log(scenarioResult);
  if (!scenarioResult || !scenarioResult.scenario || !scenarioResult.keywords) {
    if (typeof window !== 'undefined') {
      router.replace('/scenario/pre');
    }
    return null;
  }
  return (
    <>
      <Header type="back" />
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
          {scenarioResult?.keywords?.map((keyword, idx) => (
            <Badge key={idx} type="blue">
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
          {scenarioResult?.scenario?.map((bubble, idx) => {
            return bubble.role === 'agent' ? (
              <TextBubbleScenario key={idx} text={bubble.message} />
            ) : (
              <TextBubbleUser key={idx} text={bubble.message} />
            );
          })}
        </div>
        <Button onClick={() => router.push('/summary')} className="bg-primary">
          다음
        </Button>
      </div>
    </>
  );
};

export default ScenarioResultPage;
