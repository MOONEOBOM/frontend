// src/lib/tanstack/query/summary.query.ts
import api from '@/lib/axios';
import { SummaryResponse } from '@/models/summary';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getSummaryDetailApi } from '@/services/summary.api';

export const useRecentSummary = (summaryId: number) => {

  return useSuspenseQuery<SummaryResponse>({
    queryKey: ['summary', 'detail', summaryId],
    queryFn: async () => {
      // throw new Error("서버 점검 중입니다.");  // 강제 에러
      // GET) /api/v1/summary/{summaryId}?bubble=true URL 가져옴
      const { data: apiResponse } = await getSummaryDetailApi(summaryId);
      const rawData = apiResponse.data; // SummaryDetailResponseDto 안꺼를 꺼내옴

      // 백엔드랑 맞추기
      return {
        title: rawData.title,
        summary: rawData.content,
        core_chat: (rawData.highlights || []).map((item: any) => ({
          speaker: item.role, 
          message: item.message 
        })),
      };
    },
  });
};