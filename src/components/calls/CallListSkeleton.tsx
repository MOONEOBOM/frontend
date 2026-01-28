const CallListSkeleton = () => {
  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex h-[62px] w-[315px] animate-pulse flex-col justify-center gap-[10px] rounded-[10px] bg-gray-200 px-[30px]"></div>
      <div className="flex h-[62px] w-[315px] animate-pulse flex-col justify-center gap-[10px] rounded-[10px] bg-gray-200 px-[30px]"></div>
      <div className="flex h-[62px] w-[315px] animate-pulse flex-col justify-center gap-[10px] rounded-[10px] bg-gray-200 px-[30px]"></div>
      <div className="flex h-[62px] w-[315px] animate-pulse flex-col justify-center gap-[10px] rounded-[10px] bg-gray-200 px-[30px]"></div>
    </div>
  );
};

export default CallListSkeleton;
