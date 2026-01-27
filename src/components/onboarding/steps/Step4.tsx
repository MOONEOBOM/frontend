import MoonobomRight from '@/assets/icon/logo_small.svg';
import SummaryContent from '@/components/summary/SummaryContent';

const Step4 = () => {
  return (
    <div className="body2 mt-[22px] flex h-[510px] w-[295px] justify-center overflow-hidden rounded-t-[42px] border-[5px] border-b-0 border-gray-500 bg-white">
      <div className="pointer-events-none flex w-[142%] origin-top scale-[0.8] flex-col items-center">
        <div className="mt-[40px] mb-[20px] flex w-full flex-col items-center gap-[50px] px-[30px]">
          <MoonobomRight className="w-[30px]" />
          <div className="h-[1px] w-[250px] bg-gray-300" />
          <SummaryContent />
        </div>
      </div>
    </div>
  );
};

export default Step4;
