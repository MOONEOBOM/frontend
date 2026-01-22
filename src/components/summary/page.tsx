import Header from '@/components/common/Header';
import MoonobomRight from '@/assets/icon/mooneobom_right.svg';
import SummaryFeedback from './SummaryFeedback';
import SummaryContent from './SummaryContent';

const SummaryPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header type="home" />

      <div className="mb-[60px] flex w-full flex-col items-center gap-[50px] px-[41px]">
        <MoonobomRight />
        <div className="h-[1px] w-[250px] bg-gray-300" />
        <SummaryContent />
        <div className="h-[1px] w-[250px] bg-gray-300" />
        <SummaryFeedback />
      </div>
    </div>
  );
};

export default SummaryPage;
