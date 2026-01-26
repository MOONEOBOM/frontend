import Header from '@/components/common/Header';
import CardList from '@/components/history/CardList';
import FlipCard from '@/components/history/FlipCard';
import { useOnboardingStore } from '@/store/useOnboarding';

const Step5 = () => {
  const { isOnboarding } = useOnboardingStore();
  return (
    <div className="body2 mt-[22px] flex h-[510px] w-[295px] justify-center overflow-hidden rounded-t-[42px] border-[5px] border-b-0 border-gray-500 bg-white">
      <div
        style={{
          transform: 'scale(0.8)',
          transformOrigin: 'top center',
          width: '142%',
          pointerEvents: 'none',
        }}
      >
        <div className="mt-[56px] flex flex-col items-center">
          <FlipCard isOnboarding={isOnboarding} />
          <p className="script-body-14 my-[30px]">카드를 터치해보세요!</p>
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default Step5;
