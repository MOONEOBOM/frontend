const BubbleUserSkeleton = () => {
  return (
    <div className="flex w-full justify-end">
      <div className="bg-primary shadow-bubble max-w-[190px] rounded-[12px_2px_12px_12px] px-[10px] py-[10px]">
        <div className="flex flex-col gap-2">
          <div className="h-[14px] w-[140px] animate-pulse rounded bg-black/20" />
          <div className="h-[14px] w-[110px] animate-pulse rounded bg-black/20" />
        </div>
      </div>
    </div>
  );
};

export default BubbleUserSkeleton;
