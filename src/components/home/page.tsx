import HomeProfile from './HomeProfile';
import RecentHistory from './RecentHistory';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import Spinner from '../scenario/result/Spinner';
import { fetchMe } from '@/services/auth.api';
import { getSummaryRecentList } from '@/services/history.api';
import { serverApi } from '@/lib/axios/axiosServer';
import ApiBoundary from '@/components/common/ApiBoundary';

const HomePage = async () => {
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: ['users', 'me'],
        queryFn: async () => fetchMe(serverApi),
      }),
      queryClient.prefetchQuery({
        queryKey: ['summary', 'recent'],
        queryFn: async () => getSummaryRecentList(serverApi),
      }),
    ]);
  } catch (error) {
    console.error('빌드 시점 홈페이지 API 프리패치 실패 :', error);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ApiBoundary fallback={<Spinner size="lg" />}>
          <HomeProfile />
          <RecentHistory />
        </ApiBoundary>
      </HydrationBoundary>
    </div>
  );
};

export default HomePage;
