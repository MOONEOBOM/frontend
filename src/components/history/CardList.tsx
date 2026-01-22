'use client';

import { MockSummary } from '@/data/MockSummary';
import CardItem from './CardItem';
import dayjs from 'dayjs';
import { useState } from 'react';

const CardList = () => {
  const [selectedId, setSelectedId] = useState<number>(3);
  return (
    <div className="flex items-center gap-[10px]">
      {MockSummary.map((item) => {
        return (
          <CardItem
            key={item.id}
            title={item.title}
            date={dayjs(item.createdAt).format('YYYY.MM.DD')}
            isSelected={selectedId === item.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
