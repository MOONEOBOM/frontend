import Header from '../common/Header';
import CardList from './CardList';
import FlipCard from './FlipCard';

const HistoryPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header type="back" />
      <FlipCard />
      <p className="script-body-14 my-[30px]">카드를 터치해보세요!</p>
      <CardList />
    </div>
  );
};

export default HistoryPage;
