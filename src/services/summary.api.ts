// src/service/summary.api.ts
import api from '@/lib/axios';
import { SummaryRequest } from '@/models/summary';

export const summaryCreateApi = (data: SummaryRequest) => {
  return api.post('/summary', data);
};