// src/lib/tanstack/query/summary.query.ts
import api from '@/lib/axios';
import { SummaryResponse } from '@/models/summary';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useRecentSummary = () => {
  return useSuspenseQuery<SummaryResponse>({
    queryKey: ['summary', 'recent'],
    queryFn: async () => {
      // throw new Error("서버 점검 중입니다.");  // 강제 에러
      const listResponse = await api.get('/summary?view=recent');
      const items = listResponse.data.data.items;
      
      if (!items || items.length === 0) {
        throw new Error('데이터 없음');
      }

      const recentId = items[0].id;
      const detailResponse = await api.get(`/summary/${recentId}?bubble=true`);
      const rawData = detailResponse.data.data;

      // 백엔드랑 맞추기
      return {
        title: rawData.title,
        summary: rawData.content,
        // core_chat: (rawData.highlights || []).map((item: any) => ({
        //   speaker: item.role, 
        //   message: item.message 
        // })),
        core_chat: (rawData.highlights || []).map((item: any) => {
          // [해결방법] 한글 값을 프론트엔드용 영문 키워드로 치환
          let speakerType = item.role; // 기본값
          
          if (item.role === '상담사') {
            speakerType = 'agent';
          } else if (item.role === '고객') {
            speakerType = 'user';
          }

          return {
            speaker: speakerType, 
            message: item.message 
          };
        }),
      };
    },
    // retry: false, // 일부러 에러 발생시킬 때 풀기
  });
};