// src/service/summary.api.ts
import api from '@/lib/axios';
import { SummaryRequest } from '@/models/summary';

// POST API (요약 생성)
/**
 * 상담 요약 생성 (POST /api/v1/summary)
 * 생성 성공 시 ApiResponse<Long> (summaryId)을 반환
 */
export const generateSummaryApi = async (
  data: SummaryRequest,
): Promise<number> => {
  const response = await api.post('/summary', data);
  // 백엔드에서 ApiResponse 객체에 담아 보냄... response.data.data = summaryId
  // sts(백엔드) summaryId가 Lond이었는데 프론트는 Number 타입
  return response.data.data;
};

// GET API (요약 표시)
/**
 * 요약 상세 조회 (GET /api/v1/summary/{summaryId})
 * @param summaryId : 백엔드에서 생성된 Long 타입 ID
 */
export const getSummaryDetailApi = (summaryId: number) => {
  return api.get(`/summary/${summaryId}`, {
    params: {
      bubble: true,
    },
  });
};
