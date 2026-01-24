import Header from '../common/Header';
import CardList from './CardList';
import FlipCard from './FlipCard';

type historyPageProps = {
  searchParams: Promise<{
    selected?: string;
  }>;
};

const HistoryPage = async ({ searchParams }: historyPageProps) => {
  const params = await searchParams;
  const selectedId = Number(params.selected);
  const initialSelectedId = Number.isFinite(selectedId)
    ? selectedId
    : undefined;

  return (
    <div className="flex flex-col items-center">
      <Header type="back" />
      <FlipCard />
      <p className="script-body-14 my-[30px]">카드를 터치해보세요!</p>

      <CardList initialSelectedId={initialSelectedId} />
    </div>
  );
};

export default HistoryPage;
