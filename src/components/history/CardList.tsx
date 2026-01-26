'use client';

import { cn } from '@/utils/cn';
import CardItem from './CardItem';
import dayjs from 'dayjs';
import { useCardList } from '@/hooks/cardList/useCardList';
import { useDrag } from '@/hooks/cardList/useDrag';

type CardListProps = {
  initialSelectedId?: number;
};

const CardList = ({ initialSelectedId }: CardListProps) => {
  const {
    scrollRef,
    loadMoreRef,
    itemRefs,
    items,
    activeId,
    onScroll,
    onWheel,
  } = useCardList({ initialSelectedId, pageSize: 5 });

  const { isDragging, onMouseDown, onMouseMove, onMouseUp, onMouseLeave } =
    useDrag();

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        ref={scrollRef}
        onScroll={onScroll}
        onWheel={onWheel}
        // 드래그 이벤트 연결
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        className={cn(
          'no-scrollbar flex h-[200px] w-[390px] touch-pan-x items-center gap-[10px] overflow-x-auto px-[148px]',
          isDragging
            ? 'cursor-grabbing snap-none scroll-auto'
            : 'cursor-grab snap-x snap-mandatory scroll-smooth',
        )}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              'flex-shrink-0 snap-center',
              isDragging && 'pointer-events-none',
            )}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
          >
            <CardItem
              title={item.title}
              date={dayjs(item.createdDate).format('YYYY.MM.DD')}
              isSelected={item.id === activeId}
            />
          </div>
        ))}
        <div ref={loadMoreRef} className="h-[1px] w-[1px] flex-shrink-0" />
      </div>
    </div>
  );
};

export default CardList;
