import { useEffect, useRef } from 'react';

type Item = { id: number };

export function useInitialCardSelection({
  items,
  activeId,
  setActiveId,
  initialSelectedId,
  scrollRef,
  itemRefs,
  setStoreActiveId,
}: {
  items: Item[];
  activeId: number | null;
  setActiveId: (id: number) => void;
  initialSelectedId?: number;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  itemRefs: React.RefObject<Array<HTMLDivElement | null>>;
  setStoreActiveId: (id: number) => void;
}) {
  const didInitScrollRef = useRef(false);

  useEffect(() => {
    if (items.length === 0) return;

    // 홈에서 특정 카드 선택해서 들어온 경우
    if (initialSelectedId) {
      if (didInitScrollRef.current) return;

      const idx = items.findIndex((it) => it.id === initialSelectedId);
      if (idx === -1) return; // 아직 로드 안 됨 > 다음 페이지 로드되면 다시 시도

      // 상태 동기화
      if (activeId !== initialSelectedId) {
        setStoreActiveId(initialSelectedId);
        setActiveId(initialSelectedId);
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

    // 전체보기로 들어온 경우: 첫 카드 자동 선택
    const exists = activeId != null && items.some((it) => it.id === activeId);
    if (!exists) {
      setStoreActiveId(items[0].id);
      setActiveId(items[0].id);
    }
  }, [
    items,
    activeId,
    initialSelectedId,
    itemRefs,
    scrollRef,
    setActiveId,
    setStoreActiveId,
  ]);
}
