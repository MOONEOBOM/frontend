// src/lib/tanstack/mutation/summary.mutation.ts
import { useMutation } from '@tanstack/react-query';
import { generateSummaryApi } from '@/services/summary.api';

export const useSummaryMutation = () => {

  return useMutation({
    mutationFn: generateSummaryApi,
  });
};