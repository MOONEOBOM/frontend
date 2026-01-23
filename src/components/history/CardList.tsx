'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import CardItem from './CardItem';
import dayjs from 'dayjs';
import { cn } from '@/utils/cn';
import { useHistoryStore } from '@/store/useHistoryStore';
import { useSummaryInfinite } from '@/lib/tanstack/query/history.query';

const CardList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const debounced = useHistoryStore((state) => state.activeIndex);
  const setDebounced = useHistoryStore((state) => state.setActiveIndex);

  const ITEM_WIDTH = 95 + 10;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useSummaryInfinite(5);

  const items = useMemo(() => {
    return data?.pages?.flatMap((page) => page?.items ?? []) ?? [];
  }, [data]);

  //무한 스크롤 옵저버
  useEffect(() => {
    const root = scrollRef.current;
    const target = loadMoreRef.current;

    if (!root || !target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (!hasNextPage) return;
        if (isFetchingNextPage) return;

        fetchNextPage();
      },
      {
        root,
        threshold: 0.1,
      },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // 처음화면 카드 선택
  useEffect(() => {
    if (items.length === 0) return;

    // activeIndex(=activeId)가 아직 유효하지 않으면 첫 번째 아이템 선택
    const exists = items.some((it) => it.id === activeIndex);
    if (!exists) {
      setActiveIndex(items[0].id);
    }
  }, [items, activeIndex]);

  // 디바운싱
  useEffect(() => {
    const t = window.setTimeout(() => setDebounced(activeIndex), 800);
    return () => window.clearTimeout(t);
  }, [activeIndex, setDebounced]);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    console.log(activeIndex);
    // 현재 스크롤 위치를 기준으로 몇 번째 아이템이 중앙인지 계산
    const scrollLeft = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / ITEM_WIDTH);

    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < items.length) {
      setActiveIndex(items[newIndex].id);
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
        {items.map((item, index) => (
          <div key={item.id} className="flex-shrink-0 snap-center">
            <CardItem
              title={item.title}
              date={dayjs(item.createdDate).format('YYYY.MM.DD')}
              isSelected={item.id === activeIndex}
            />
          </div>
        ))}
        <div ref={loadMoreRef} className="h-[1px] w-[1px] flex-shrink-0" />
      </div>
    </div>
  );
};
export default CardList;
