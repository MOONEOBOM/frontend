import { useMemo, useRef } from 'react';
import { useHistoryStore } from '@/store/useHistoryStore';
import { useSummaryInfinite } from '@/lib/tanstack/query/history.query';
import { useInfiniteScrollObserver } from './useInfiniteScrollObserver';
import { useHorizontalSnapActive } from './useHorizontalSnapActive';
import { useInitialCardSelection } from './useInitialCardSelection';

type UseCardListParams = {
  initialSelectedId?: number;
  pageSize: number;
};

export function useCardList({
  initialSelectedId,
  pageSize,
}: UseCardListParams) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setDebounced = useHistoryStore((s) => s.setActiveIndex);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSummaryInfinite(pageSize);

  const items = useMemo(
    () => data?.pages?.flatMap((p) => p?.items ?? []) ?? [],
    [data],
  );

  // 1) 스크롤/휠
  const { activeId, setActiveId, onScroll, onWheel } = useHorizontalSnapActive({
    scrollRef,
    items,
    itemWidth: 95 + 10,
  });

  // 2) 무한 스크롤 옵저버
  useInfiniteScrollObserver({
    rootRef: scrollRef,
    targetRef: loadMoreRef,
    enabled: Boolean(hasNextPage) && !isFetchingNextPage,
    onIntersect: fetchNextPage,
  });

  // 3) 초기 진입 분기 + 가운데 정렬 + 전체보기 첫 선택
  useInitialCardSelection({
    items,
    activeId,
    setActiveId,
    initialSelectedId,
    scrollRef,
    itemRefs,
    setStoreActiveId: setDebounced,
  });

  // 4) activeId > store 디바운스 반영
  useDebouncedStoreSync({
    activeId,
    delayMs: 800,
    setStoreActiveId: setDebounced,
  });

  return {
    scrollRef,
    loadMoreRef,
    itemRefs,
    items,
    activeId,
    onScroll,
    onWheel,
  };
}

import { useEffect } from 'react';
function useDebouncedStoreSync({
  activeId,
  delayMs,
  setStoreActiveId,
}: {
  activeId: number | null;
  delayMs: number;
  setStoreActiveId: (id: number) => void;
}) {
  useEffect(() => {
    if (activeId == null) return;
    const t = window.setTimeout(() => setStoreActiveId(activeId), delayMs);
    return () => window.clearTimeout(t);
  }, [activeId, delayMs, setStoreActiveId]);
}
