'use client';

import Logo from '@/assets/icon/logo_small.svg?react';
import Moono from '@/assets/moono/moono_summary.svg?react';
import MoonoTako from '@/assets/moono/moono_tako.svg?react';
import dayjs from 'dayjs';

import { useRef, useState } from 'react';
import MainCard from '@/components/history/MainCard';
import { useHistoryStore } from '@/store/useHistoryStore';
import { useSummaryDetail } from '@/lib/tanstack/query/history.query';
import { MockSummary } from '@/data/MockSummary';
import { useOnboardingStore } from '@/store/useOnboarding';
import Restart from '@/assets/icon/restart.svg';
import Button from '../common/Button';
import { cn } from '@/utils/cn';

export default function FlipCard() {
  const [isTouched, setIsTouched] = useState(false);
  const { isOnboarding } = useOnboardingStore();
  const activeId = useHistoryStore((state) => state.activeId);
  const { data, isPending, isError, isRefetching, refetch } = useSummaryDetail(
    activeId,
    {
      enabled: !isOnboarding,
    },
  );
  const hasAnimated = useRef(false);
  const cardData = isOnboarding ? MockSummary[activeId] : data;
  if (isOnboarding && !hasAnimated.current) {
    setTimeout(() => {
      setIsTouched(true);
    }, 2000); // 2초 후 앞면으로 복귀
  }
  if (!isOnboarding && isPending)
    return (
      <MainCard>
        <div
          className={cn(
            'flex flex-shrink-0 flex-col items-center justify-center gap-[30px]',
            'h-full w-full animate-pulse rounded-[20px] bg-gray-100',
          )}
        >
          <div className="h-[100px] w-[150px] rounded bg-gray-200" />

          <div className="h-[20px] w-[130px] rounded bg-gray-200" />
          <div className="h-[15px] w-[130px] rounded bg-gray-200" />
        </div>
      </MainCard>
    );
  if (!isOnboarding && isError)
    return (
      <MainCard>
        <div
          className={cn(
            'flex flex-shrink-0 flex-col items-center justify-center gap-[30px]',
            'h-full w-full rounded-[20px] bg-gray-100',
          )}
        >
          <MoonoTako className="w-[100px]" />
          <p className="body1">내용을 불러오지 못했어요..</p>
          <button onClick={() => refetch()}>
            <Restart className="text-primary h-8 w-8" />
          </button>
        </div>
      </MainCard>
    );

  return (
    <div
      className="group cursor-pointer [perspective:1000px]"
      onClick={() => setIsTouched(!isTouched)}
    >
      <div
        className={`relative grid duration-700 [transform-style:preserve-3d] ${
          isTouched ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* 앞면 */}
        <div className="[backface-visibility:hidden] [grid-area:1/1]">
          <MainCard>
            <Moono className="w-[140px]" />
            <div className="flex flex-col items-center gap-[20px]">
              <p className="heading3 px-[30px]">{cardData?.title}</p>
              <p className="body3 text-gray-800">
                {dayjs(cardData?.createdDate).format('YYYY.MM.DD')}
              </p>
            </div>
          </MainCard>
        </div>

        {/* 뒷면 */}
        <div className="[transform:rotateY(180deg)] [backface-visibility:hidden] [grid-area:1/1]">
          <MainCard>
            <Logo className="h-[34px]" />
            <div className="flex h-[200px] w-[210px] flex-col items-center gap-[15px]">
              <p className="heading3">{cardData?.title}</p>
              <div className="w-[200px] border-t-1 border-gray-300" />
              <p className="body2 text-center">{cardData?.content}</p>
            </div>
            <p className="body3 bottom-[20px] text-gray-800">
              {dayjs(cardData?.createdDate).format('YYYY.MM.DD')}
            </p>
          </MainCard>
        </div>
      </div>
    </div>
  );
}
