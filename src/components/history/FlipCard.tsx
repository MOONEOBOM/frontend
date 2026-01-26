'use client';

import Logo from '@/assets/icon/logo_small.svg?react';
import Moono from '@/assets/moono/moono_summary.svg?react';
import dayjs from 'dayjs';

import { useState } from 'react';
import MainCard from '@/components/history/MainCard';
import { useHistoryStore } from '@/store/useHistoryStore';
import { useSummaryDetail } from '@/lib/tanstack/query/history.query';
import { MockSummary } from '@/data/MockSummary';

export default function FlipCard({ isOnboarding }: { isOnboarding?: boolean }) {
  const [isTouched, setIsTouched] = useState(false);
  const activeId = useHistoryStore((state) => state.activeId);
  const { data, isPending, isError, error } = useSummaryDetail(activeId, {
    enabled: !isOnboarding,
  });
  const cardData = isOnboarding ? MockSummary[activeId] : data;

  if (!isOnboarding && isPending) return <div>로딩...</div>;
  if (!isOnboarding && isError)
    return <div>에러: {(error as Error).message}</div>;

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
