import MoonobomRight from '@/assets/icon/logo_small.svg';
import SummaryContent from '@/components/summary/SummaryContent';
import { useOnboardingStore } from '@/store/useOnboarding';

const Step4 = () => {
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
        <div className="flex flex-col items-center">
          <div className="mt-[40px] mb-[20px] flex w-full flex-col items-center gap-[50px] px-[30px]">
            <MoonobomRight className="w-[30px]" />
            <div className="h-[1px] w-[250px] bg-gray-300" />
            <SummaryContent isOnboarding={isOnboarding} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
