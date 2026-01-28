// src/lib/tanstack/query/summary.query.ts
import api from '@/lib/axios';
import { SummaryResponse } from '@/models/summary';
import { useQuery } from '@tanstack/react-query';
import { getSummaryDetailApi } from '@/services/summary.api';

export const useRecentSummary = (
  summaryId: number,
  options?: { enabled?: boolean },
) => {
  return useQuery<SummaryResponse>({
    queryKey: ['summary', 'detail', summaryId],
    queryFn: async () => {
      const { data: apiResponse } = await getSummaryDetailApi(summaryId);
      const rawData = apiResponse.data;

      return {
        title: rawData.title,
        summary: rawData.content,
        core_chat: (rawData.highlights || []).map((item: any) => ({
          speaker: item.role,
          message: item.message,
        })),
      };
    },
    enabled: options?.enabled ?? true,
  });
};
