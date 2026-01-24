import { useEffect } from 'react';

export function useInfiniteScrollObserver({
  rootRef,
  targetRef,
  enabled,
  onIntersect,
  threshold = 0.1,
}: {
  rootRef: React.RefObject<Element | null>;
  targetRef: React.RefObject<Element | null>;
  enabled: boolean;
  onIntersect: () => void;
  threshold?: number;
}) {
  //옵저버
  useEffect(() => {
    if (!enabled) return;

    const root = rootRef.current;
    const target = targetRef.current;
    if (!root || !target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        onIntersect();
      },
      { root, threshold },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [enabled, onIntersect, rootRef, targetRef, threshold]);
}
