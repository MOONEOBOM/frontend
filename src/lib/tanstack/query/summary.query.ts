// src/lib/tanstack/query/summary.query.ts
import api from '@/lib/axios';
import { SummaryResponse } from '@/models/summary';
import { useQuery } from '@tanstack/react-query';

export const useRecentSummary = (options?: { enabled?: boolean }) => {
  return useQuery<SummaryResponse>({
    queryKey: ['summary', 'recent'],
    queryFn: async () => {
      const listResponse = await api.get('/summary?view=recent');
      const items = listResponse.data.data.items;

      if (!items || items.length === 0) {
        throw new Error('데이터 없음');
      }

      const recentId = items[0].id;
      const detailResponse = await api.get(`/summary/${recentId}?bubble=true`);
      const rawData = detailResponse.data.data;

      return {
        title: rawData.title,
        summary: rawData.content,
        // 백엔드랑 맞추기
        core_chat: (rawData.highlights || []).map((item: any) => ({
          speaker: item.role,
          message: item.message,
        })),
      };
    },
    enabled: options?.enabled ?? true,
  });
};
