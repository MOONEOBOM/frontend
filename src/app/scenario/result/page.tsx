import ScenarioResultPage from '@/components/scenario/result/page';
import Spinner from '@/components/scenario/result/Spinner';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      }
    >
      <ScenarioResultPage />
    </Suspense>
  );
}
