'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import { ConsultTypeKey } from './scenariotype';

interface ScenarioNextButtonProps {
  consultType: ConsultTypeKey | null;
  reason: string | null;
}

const ScenarioNextButton = ({ consultType, reason }: ScenarioNextButtonProps) => {
    
    const router = useRouter();

    // 상담 종류 + 이유 둘 다 선택해야 버튼 클릭 됨
    const isDisabled = !consultType || !reason;

    const handleClick = () => {
        if (isDisabled) {
            return;
        }

        // 백엔드 연동?
        // router.push('/scenario/result');
        router.push(
            `/scenario/result?consultType=${consultType}&reason=${reason}`
        );
    };

    return (
        <div className="px-[45px] mt-[24px] mb-[40px]">
            <Button
                variant="solid"
                size="full"
                disabled={isDisabled}
                className={`bg-primary ${isDisabled ? 'opacity-40' : ''}`}
                onClick={handleClick}
            >
                다음
            </Button>
        </div>
    );
};

export default ScenarioNextButton;
