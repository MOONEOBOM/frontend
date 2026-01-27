import {
  getSummaryDetail,
  getSummaryList,
  getSummaryRecentList,
} from '@/services/history.api';
import {
  useQuery,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';

export function useSummaryInfinite(limit = 10) {
  return useSuspenseInfiniteQuery({
    queryKey: ['summary', 'list', limit],
    queryFn: ({ pageParam }) =>
      getSummaryList({
        limit,
        cursor: pageParam ?? null, // pageParam이 곧 cursor
      }),

    initialPageParam: null as number | null,

    getNextPageParam: (lastPage) => {
      if (lastPage.nextCursor === null || lastPage.nextCursor === undefined) {
        return undefined;
      }
      return lastPage.nextCursor;
    },
  });
}

export function useSummaryRecent() {
  return useSuspenseQuery({
    queryKey: ['summary', 'recent'],
    queryFn: () => getSummaryRecentList(),
  });
}

export function useSummaryDetail(
  summaryId: number,
  options?: { enabled?: boolean },
) {
  return useQuery({
    queryKey: ['summary', 'detail', summaryId],
    queryFn: () => getSummaryDetail(summaryId),
    enabled: !!summaryId && (options?.enabled ?? true),
    placeholderData: (previousData) => previousData,
  });
}
