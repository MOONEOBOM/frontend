'use client';

import { useRef, useState } from 'react';
import { MockSummary } from '@/data/MockSummary';
import CardItem from './CardItem';
import dayjs from 'dayjs';
import { cn } from '@/utils/cn';
import { useHistoryStore } from '@/store/useHistoryStore';

const CardList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeIndex = useHistoryStore((state) => state.activeIndex);
  const setActiveIndex = useHistoryStore((state) => state.setActiveIndex);

  const ITEM_WIDTH = 95 + 10;

  const handleScroll = () => {
    if (!scrollRef.current) return;

    // 현재 스크롤 위치를 기준으로 몇 번째 아이템이 중앙인지 계산
    const scrollLeft = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / ITEM_WIDTH);

    if (
      newIndex !== activeIndex &&
      newIndex >= 0 &&
      newIndex < MockSummary.length
    ) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={cn(
          'flex h-[200px] w-[390px] items-center gap-[10px] overflow-x-auto',
          'no-scrollbar touch-pan-x snap-x snap-mandatory px-[148px]',
        )}
      >
        {MockSummary.map((item, index) => (
          <div key={item.id} className="flex-shrink-0 snap-center">
            <CardItem
              title={item.title}
              date={dayjs(item.createdAt).format('YYYY.MM.DD')}
              isSelected={index === activeIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardList;
