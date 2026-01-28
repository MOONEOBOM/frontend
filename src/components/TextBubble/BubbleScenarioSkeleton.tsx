import { cn } from '@/utils/cn';

const BubbleScenarioSkeleton = ({
  isOnboarding,
}: {
  isOnboarding?: boolean;
}) => {
  return (
    <div className={cn('flex gap-[5px]')}>
      {/* 프로필 아이콘 스켈레톤 */}

      <div className="h-[45px] w-[45px] animate-pulse rounded-full bg-gray-200" />

      {/* 말풍선 스켈레톤 */}
      <div className="shadow-bubble max-w-[240px] rounded-[2px_12px_12px_12px] bg-gray-100 px-[10px] py-[10px]">
        <div className="flex flex-col gap-2">
          <div className="h-[14px] w-[180px] animate-pulse rounded bg-gray-300" />
          <div className="h-[14px] w-[150px] animate-pulse rounded bg-gray-300" />
          <div className="h-[14px] w-[90px] animate-pulse rounded bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default BubbleScenarioSkeleton;
