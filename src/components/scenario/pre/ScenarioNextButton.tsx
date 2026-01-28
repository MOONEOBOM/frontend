'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import { ConsultTypeKey } from './scenariotype';
import { cn } from '@/utils/cn';

interface ScenarioNextButtonProps {
  consultType: ConsultTypeKey | null;
  reason: string | null;
}

const ScenarioNextButton = ({
  consultType,
  reason,
}: ScenarioNextButtonProps) => {
  const router = useRouter();
  const isDisabled = !consultType || !reason;

  const handleClick = () => {
    if (isDisabled) return;
    router.push(
      `/scenario/result?consultType=${encodeURIComponent(consultType)}&reason=${encodeURIComponent(reason)}`,
    );
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
        시나리오 생성하기
      </Button>
    </div>
  );
};

export default ScenarioNextButton;
