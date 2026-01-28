import { Suspense } from 'react';
import ScenarioResultPage from '@/components/scenario/result/page';

const ResultPage = () => {
  return (
    <Suspense>
      <ScenarioResultPage />
    </Suspense>
  );
};

export default ResultPage;
