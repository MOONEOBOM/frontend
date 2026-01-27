// src/lib/tanstack/mutation/summary.mutation.ts
import { useMutation } from '@tanstack/react-query';
import { generateSummaryApi } from '@/services/summary.api';
import { useRouter } from 'next/navigation';

export const useSummaryMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: generateSummaryApi,
    onSuccess: (summaryId) => {
      // 성공 시 받은 summaryId(Number)를 들고 결과 페이지인 '/summary'로 이동
      console.log('요약 생성 성공, ID:', summaryId);
      router.push(`/summary?id=${summaryId}`); // 쿼리 파라미터 방식
    },
    onError: (error) => {
      console.error('요약 생성 실패:', error);
      alert('상담 요약 중 오류가 발생했습니다.');
    },
  });
};