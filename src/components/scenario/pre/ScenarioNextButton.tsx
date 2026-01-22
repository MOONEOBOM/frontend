'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import { ConsultTypeKey } from './scenariotype';
import { cn } from '@/utils/cn';
import { useCreateScenario } from '@/lib/tanstack/mutation/scenario.mutation';
import { useScenarioStore } from '@/store/useScenarioStore';

interface ScenarioNextButtonProps {
  consultType: ConsultTypeKey | null;
  reason: string | null;
}

const ScenarioNextButton = ({
  consultType,
  reason,
}: ScenarioNextButtonProps) => {
  const router = useRouter();
  const { mutate, isPending } = useCreateScenario();

  const setScenarioResult = useScenarioStore(
    (state) => state.setScenarioResult,
  );
  const clearScenarioResult = useScenarioStore(
    (state) => state.clearScenarioResult,
  );
  // 상담 종류 + 이유 둘 다 선택해야 버튼 클릭 됨
  const isDisabled = !consultType || !reason;

  const handleClick = () => {
    if (isDisabled) return;

    const requestData = {
      categoryKey: consultType,
      reasonKey: [reason],
    };
    clearScenarioResult();
    mutate(requestData, {
      onSuccess: (response) => {
        setScenarioResult(response);
        router.push('/scenario/result');
      },
      onError: (error) => {
        console.error('실패:', error);
      },
    });
  };

  return (
    <div className="mt-[24px] mb-[40px] px-[45px]">
      <Button
        variant="solid"
        size="full"
        disabled={isDisabled}
        className={cn('bg-primary', isDisabled && 'opacity-40')}
        onClick={handleClick}
      >
        다음
      </Button>
    </div>
  );
};

export default ScenarioNextButton;
