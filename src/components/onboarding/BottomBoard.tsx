import { useCompleteFirstLogin } from '@/lib/tanstack/mutation/user.mutation';
import Button from '../common/Button';
import { useOnboardingStore } from '@/store/useOnboarding';

interface BoardingProps {
  title: string;
  text: string;
  onNext: () => void;
  isLast: boolean;
}
export default function BottomBoard({
  title,
  text,
  onNext,
  isLast,
}: BoardingProps) {
  const { mutate: completeOnboarding } = useCompleteFirstLogin();
  const stopOnboarding = useOnboardingStore((state) => state.stopOnboarding);

  const handleStart = () => {
    completeOnboarding(undefined, {
      onSuccess: () => {
        console.log('온보딩 완료 성공!');
        stopOnboarding();
        onNext();
      },
      onError: (err) => {
        console.error('완료 처리 실패:', err);
      },
    });
  };
  return (
    <div className="fixed bottom-0 mb-[60px] flex flex-col items-center justify-center">
      <div className="body1">{title}</div>
      <div className="body2 mt-[4px] text-gray-800">{text}</div>
      <div className="mt-[45px]">
        {!isLast ? (
          <Button
            onClick={onNext}
            className="white"
            size="full"
            variant="outline"
          >
            다음
          </Button>
        ) : (
          <Button
            onClick={handleStart}
            className="bg-primary"
            size="full"
            variant="solid"
          >
            무너봄 시작하기
          </Button>
        )}
      </div>
    </div>
  );
}
