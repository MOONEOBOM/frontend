import { useRef, useState, useCallback } from 'react';

export const useDrag = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    // 현재 스크롤 위치와 클릭 지점 저장
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1.5; // 민감도 조절
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return {
    onMouseDown,
    onMouseMove,
    onMouseUp: onMouseUpOrLeave,
    onMouseLeave: onMouseUpOrLeave,
    isDragging,
  };
};
