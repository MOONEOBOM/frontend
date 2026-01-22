import { MockSummary } from '@/data/MockSummary';
import CardItem from './CardItem';

const CardList = () => {
  return (
    <div className="flex">
      {MockSummary.map((item) => {
        return <CardItem key={item.id}></CardItem>;
      })}
    </div>
  );
};

export default CardList;
