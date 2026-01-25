// src/service/summary.api.ts
import api from '@/lib/axios';
import { SummaryRequest, SummaryResponse } from '@/models/summary';

export const summaryCreateApi = (data: SummaryRequest) => {
  return api.post('/summary', data);
};

export const getRecentSummaryApi = () => {
  return api.get<SummaryResponse>('/summary?view=recent');
};