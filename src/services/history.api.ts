import api from '@/lib/axios';
import { Fetcher } from '@/lib/axios/axiosServer';
import { ApiResponse } from '@/models/common';
import type {
  SummaryDetailResponse,
  SummaryListResponse,
} from '@/models/history';

export async function getSummaryList(
  params: {
    limit?: number;
    cursor?: number | null;
  },
  customApi: Fetcher = api,
) {
  const { limit = 10, cursor } = params;
  const res = await customApi.get<ApiResponse<SummaryListResponse>>(
    '/summary',
    {
      params: {
        limit,
        ...(cursor != null ? { cursor } : {}),
      },
    },
  );

  return res.data.data;
}

export async function getSummaryRecentList(customApi: Fetcher = api) {
  const res = await customApi.get<ApiResponse<SummaryListResponse>>(
    '/summary',
    {
      params: {
        view: 'recent',
      },
    },
  );

  return res.data.data.items;
}

export async function getSummaryDetail(summaryId: number) {
  const res = await api.get<ApiResponse<SummaryDetailResponse>>(
    `/summary/${summaryId}`,
  );
  return res.data.data;
}
