import { cn } from '@/utils/cn';

const CardItemSkeleton = () => {
  return (
    <div
      className={cn(
        'shadow-rest flex flex-shrink-0 flex-col items-center justify-center gap-[15px]',
        'h-[135px] w-[95px] animate-pulse rounded-[6px] bg-gray-100',
      )}
    >
      {/* 텍스트 Skeleton (제목) */}
      <div className="h-[14px] w-[60px] rounded bg-gray-200" />

      {/* 텍스트 Skeleton (날짜) */}
      <div className="h-[10px] w-[40px] rounded bg-gray-200" />
    </div>
  );
};

export default CardItemSkeleton;
