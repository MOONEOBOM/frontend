import {
  getSummaryDetail,
  getSummaryList,
  getSummaryRecentList,
} from '@/services/history.api';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export function useSummaryInfinite(limit = 10) {
  return useInfiniteQuery({
    queryKey: ['summary', 'list', limit],
    queryFn: ({ pageParam }) =>
      getSummaryList({
        limit,
        cursor: pageParam ?? null, // pageParam이 곧 cursor
      }),

    initialPageParam: null as number | null,

    getNextPageParam: (lastPage) => {
      if (!lastPage || lastPage.nextCursor === null) {
        return undefined;
      }
      return lastPage.nextCursor;
    },
  });
}

export function useSummaryRecent() {
  return useQuery({
    queryKey: ['summary', 'recent'],
    queryFn: () => getSummaryRecentList(),
  });
}

export function useSummaryDetail(summaryId: number) {
  return useQuery({
    queryKey: ['summary', 'detail', summaryId],
    queryFn: () => getSummaryDetail(summaryId),
    enabled: !!summaryId,
  });
}
