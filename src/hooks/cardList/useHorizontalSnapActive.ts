import { useCallback, useState } from 'react';

type Item = { id: number };

export function useHorizontalSnapActive({
  scrollRef,
  items,
  itemWidth,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  items: Item[];
  itemWidth: number;
}) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (items.length === 0) return;

    const scrollLeft = el.scrollLeft;
    const idx = Math.round(scrollLeft / itemWidth);

    if (idx < 0 || idx >= items.length) return;

    const nextId = items[idx].id;
    setActiveId((prev) => (prev === nextId ? prev : nextId));
  }, [items, itemWidth, scrollRef]);

  const onWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      const el = scrollRef.current;
      if (!el) return;

      // 세로휠을 가로스크롤로 전환
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    },
    [scrollRef],
  );

  return { activeId, setActiveId, onScroll, onWheel };
}
