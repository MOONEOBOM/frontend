import { MockSummary } from '@/data/MockSummary';
import CardItem from './CardItem';
import dayjs from 'dayjs';

const CardList = () => {
  return (
    <div className="flex gap-[10px]">
      {MockSummary.map((item) => {
        return (
          <CardItem
            key={item.id}
            title={item.title}
            date={dayjs(item.createdAt).format('YYYY.MM.DD')}
          />
        );
      })}
    </div>
  );
};

export default CardList;
