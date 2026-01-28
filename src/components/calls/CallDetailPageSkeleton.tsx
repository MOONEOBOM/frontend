import BubbleScenarioSkeleton from '../TextBubble/BubbleScenarioSkeleton';
import BubbleUserSkeleton from '../TextBubble/BubbleUserSkeleton';

const CallDetailPageSkeleton = () => {
  return (
    <div className="mt-[100px] flex w-full flex-col items-center gap-[25px] px-[25px]">
      <div className="flex w-full flex-col gap-[20px] pt-[20px]">
        <BubbleScenarioSkeleton />
        <BubbleUserSkeleton />
        <BubbleScenarioSkeleton />
        <BubbleUserSkeleton />
        <BubbleScenarioSkeleton />
        <BubbleUserSkeleton />
      </div>
    </div>
  );
};

export default CallDetailPageSkeleton;
