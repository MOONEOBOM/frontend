'use client';

import { useHistoryStore } from '@/store/useHistoryStore';

const CardList = () => {
  const activeIndex = useHistoryStore((state) => state.activeIndex);
  const setActiveIndex = useHistoryStore((state) => state.setActiveIndex);

  return (
    <>
      <p>선택된 인덱스:{activeIndex}</p>
      <button onClick={() => setActiveIndex(activeIndex + 1)}>
        인덱스 증가
      </button>
    </>
  );
};

export default CardList;
