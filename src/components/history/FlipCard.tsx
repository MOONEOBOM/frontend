'use client';

import Logo from '@/assets/icon/logo_small.svg?react';
import Moono from '@/assets/moono/moono_summary.svg?react';
import dayjs from 'dayjs';
import { MockSummary } from '@/data/MockSummary';

import { useState } from 'react';
import MainCard from '@/components/history/MainCard';
import { useHistoryStore } from '@/store/useHistoryStore';

export default function FlipCard() {
  const [isTouched, setIsTouched] = useState(false);
  const activeIndex = useHistoryStore((state) => state.activeIndex);
  const formattedDate = dayjs(MockSummary[activeIndex].createdAt).format(
    'YYYY.MM.DD',
  );

  return (
    <div
      className="group group cursor-pointer [perspective:1000px]"
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
              <p className="heading3">{MockSummary[activeIndex].title}</p>
              <p className="body3 text-gray-800">{formattedDate}</p>
            </div>
          </MainCard>
        </div>

        {/* 뒷면 */}
        <div className="[transform:rotateY(180deg)] [backface-visibility:hidden] [grid-area:1/1]">
          <MainCard>
            <Logo className="h-[34px]" />
            <div className="flex h-[200px] w-[210px] flex-col items-center gap-[15px]">
              <p className="heading3">{MockSummary[activeIndex].title}</p>
              <div className="w-[200px] border-t-1 border-gray-300" />
              <p className="body2 text-center">
                {MockSummary[activeIndex].content}
              </p>
            </div>
            <p className="body3 t bottom-[20px] text-gray-800">
              {formattedDate}
            </p>
          </MainCard>
        </div>
      </div>
    </div>
  );
}
