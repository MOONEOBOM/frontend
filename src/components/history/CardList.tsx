'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import CardItem from './CardItem';
import dayjs from 'dayjs';
import { cn } from '@/utils/cn';
import { useHistoryStore } from '@/store/useHistoryStore';
import { useSummaryInfinite } from '@/lib/tanstack/query/history.query';

const ITEM_WIDTH = 95 + 10;
type cardListProps = {
  initialSelectedId?: number;
};

const CardList = ({ initialSelectedId }: cardListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const didInitScrollRef = useRef(false);

  const setDebounced = useHistoryStore((state) => state.setActiveIndex);
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

  // 홈에서 선택해서 들어올때, 전체보기로 들어올떄 분기점
  useEffect(() => {
    if (items.length === 0) return;

    // 선택해서 들어올시
    if (initialSelectedId) {
      if (didInitScrollRef.current) return;

      const idx = items.findIndex((it) => it.id === initialSelectedId);

      // 아직 해당 카드가 로드 안 됐으면 대기
      if (idx === -1) return;

      if (activeIndex !== initialSelectedId) {
        setDebounced(initialSelectedId);
        setActiveIndex(initialSelectedId);
      }

      // 가운데 정렬
      const root = scrollRef.current;
      const el = itemRefs.current[idx];
      if (root && el) {
        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const rootCenter = root.clientWidth / 2;
        root.scrollTo({ left: elCenter - rootCenter, behavior: 'auto' });
        didInitScrollRef.current = true;
      }

      return;
    }

    // 전체보기로 들어올시 첫 카드 자동 선택
    const exists = items.some((it) => it.id === activeIndex);
    if (!exists) {
      setDebounced(items[0].id);
      setActiveIndex(items[0].id);
    }
  }, [items, activeIndex, initialSelectedId]);

  // 디바운싱
  useEffect(() => {
    const t = window.setTimeout(() => setDebounced(activeIndex), 800);
    return () => window.clearTimeout(t);
  }, [activeIndex, setDebounced]);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    // 현재 스크롤 위치를 기준으로 몇 번째 아이템이 중앙인지 계산
    const scrollLeft = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / ITEM_WIDTH);

    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < items.length) {
      setActiveIndex(items[newIndex].id);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault(); //
    }
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onWheel={handleWheel}
        className={cn(
          'flex h-[200px] w-[390px] items-center gap-[10px] overflow-x-auto',
          'no-scrollbar touch-pan-x snap-x snap-mandatory px-[148px]',
        )}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 snap-center"
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
          >
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
