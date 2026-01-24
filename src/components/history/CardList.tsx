'use client';

import { cn } from '@/utils/cn';
import CardItem from './CardItem';
import dayjs from 'dayjs';
import { useCardList } from '../../hooks/cardList/useCardList';

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

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        ref={scrollRef}
        onScroll={onScroll}
        onWheel={onWheel}
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
