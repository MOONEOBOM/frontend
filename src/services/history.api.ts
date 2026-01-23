// /src/services/summary.ts
import api from '@/lib/axios';
import { ApiResponse } from '@/types/common';
import type {
  SummaryDetailResponse,
  SummaryListResponse,
} from '@/types/history';

export async function getSummaryList(params: {
  limit?: number;
  cursor?: number | null;
}) {
  const { limit = 10, cursor } = params;

  const res = await api.get<ApiResponse<SummaryListResponse>>('/summary', {
    params: {
      limit,
      ...(cursor != null ? { cursor } : {}),
    },
  });

  return res.data.data;
}

export async function getSummaryDetail(summaryId: number) {
  const res = await api.get<ApiResponse<SummaryDetailResponse>>(
    `/summary/${summaryId}`,
  );
  return res.data.data;
}
