'use client';

import { MockSummary } from '@/data/MockSummary';
import CardItem from './CardItem';
import dayjs from 'dayjs';
import { useState } from 'react';
import { cn } from '@/utils/cn';

const CardList = () => {
  const [selectedId, setSelectedId] = useState<number>(3);

  return (
    <div
      className={cn(
        'flex w-[390px] items-center gap-[10px] overflow-x-auto',
        'scrollbar-hide touch-pan-x snap-x snap-mandatory',
        'px-[148px] py-4',
      )}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {MockSummary.map((item) => (
        <div key={item.id}>
          <CardItem
            title={item.title}
            date={dayjs(item.createdAt).format('YYYY.MM.DD')}
            isSelected={selectedId === item.id}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
