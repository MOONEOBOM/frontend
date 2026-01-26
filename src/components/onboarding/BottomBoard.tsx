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
  const { mutate: completeOnboarding, isPending } = useCompleteFirstLogin();
  const stopOnboarding = useOnboardingStore((state) => state.stopOnboarding);
  const startOnboarding = useOnboardingStore((state) => state.startOnboarding);
  const isOnboarding = useOnboardingStore((state) => state.isOnboarding);
  const handleStart = () => {
    stopOnboarding();

    completeOnboarding(undefined, {
      onSuccess: () => {
        console.log('온보딩 완료 성공!');
        const currentState = useOnboardingStore.getState().isOnboarding;
        console.log('현재 온보딩:', currentState); // 여기서 false가 나옵니다!
        onNext();
      },
      onError: (err) => {
        console.error('완료 처리 실패:', err);
        onNext();
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
