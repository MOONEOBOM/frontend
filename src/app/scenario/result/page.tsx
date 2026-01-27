import { Suspense } from 'react';
import ScenarioResultPage from '@/components/scenario/result/page';

const ResultPage = () => {
  return (
    // TODO: 로딩 수정
    <Suspense fallback={<div>로딩 중...</div>}>
      <ScenarioResultPage />
    </Suspense>
  );
};

export default ResultPage;
