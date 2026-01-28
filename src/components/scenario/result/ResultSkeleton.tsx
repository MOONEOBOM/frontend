import BubbleScenarioSkeleton from '@/components/TextBubble/BubbleScenarioSkeleton';
import BubbleUserSkeleton from '@/components/TextBubble/BubbleUserSkeleton';

const ResultSkeleton = () => {
  return (
    <div className="my-[34px] flex w-full flex-col items-center gap-[25px] px-[25px]">
      <div className="h-[90px] w-[220px] animate-pulse rounded bg-gray-200" />
      <div className="h-[20px] w-[220px] animate-pulse rounded bg-gray-200" />
      <div className="h-[20px] w-[220px] animate-pulse rounded bg-gray-200" />
      <div className="flex w-full flex-col gap-[20px] border-t border-gray-300 pt-[20px]">
        <BubbleScenarioSkeleton />
        <BubbleUserSkeleton />
        <BubbleScenarioSkeleton />
        <BubbleUserSkeleton />
      </div>
    </div>
  );
};

export default ResultSkeleton;
