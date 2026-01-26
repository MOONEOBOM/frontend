import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ApiBoundary from '../common/ApiBoundary';
import Header from '../common/Header';
import CardList from './CardList';
import CardListSkeleton from './CardListSkeleton';
import FlipCard from './FlipCard';
import { getSummaryList } from '@/services/history.api';
import { serverApi } from '@/lib/axios/axiosServer';
import CardListError from './CardListError';

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

  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['summary', 'list', 10],
    queryFn: ({ pageParam }) =>
      getSummaryList({ limit: 10, cursor: pageParam ?? null }, serverApi),
    initialPageParam: null as number | null,
    getNextPageParam: (lastPage) => {
      if (lastPage.nextCursor === null || lastPage.nextCursor === undefined) {
        return undefined;
      }
      return lastPage.nextCursor;
    },
    pages: 1,
  });

  return (
    <div className="flex flex-col items-center">
      <Header type="back" />
      <FlipCard />
      <p className="script-body-14 my-[30px]">카드를 터치해보세요!</p>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ApiBoundary
          fallback={<CardListSkeleton />}
          errorFallback={CardListError}
        >
          <CardList initialSelectedId={initialSelectedId} />
        </ApiBoundary>
      </HydrationBoundary>
    </div>
  );
};

export default HistoryPage;
