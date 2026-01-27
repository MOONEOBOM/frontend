'use client';

import { cn } from '@/utils/cn';
import CardItem from './CardItem';
import dayjs from 'dayjs';
import { useCardList } from '@/hooks/cardList/useCardList';
import { useOnboardingStore } from '@/store/useOnboarding';
import { MockSummary } from '@/data/MockSummary';
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
  } = useCardList({ initialSelectedId, pageSize: 10 });

  const { isOnboarding } = useOnboardingStore();
  const { isDragging, onMouseDown, onMouseMove, onMouseUp, onMouseLeave } =
    useDrag();

  if (isOnboarding) {
    return (
      <div className="flex flex-col items-center gap-10">
        <div
          ref={scrollRef}
          className={cn(
            'flex h-[200px] w-[390px] items-center gap-[10px] overflow-x-auto',
            'no-scrollbar touch-pan-x snap-x snap-mandatory',
          )}
        >
          {MockSummary.map((item) => (
            <div key={item.id} className="flex-shrink-0 snap-center">
              <CardItem
                title={item.title}
                date={dayjs(item.createdDate).format('YYYY.MM.DD')}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (items.length === 0)
    return (
      <div className="shadow-box flex h-[115px] w-[315px] items-center justify-center rounded-xl text-center">
        <span className="script-body-16 text-gray-800">
          아직 진행한 상담이 없어요 T_T
        </span>
      </div>
    );
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
