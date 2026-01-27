import CardItemSkeleton from './CardItemSkeleton';

const CardListSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex h-[200px] w-[390px] items-center gap-[10px] overflow-hidden px-[148px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <CardItemSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default CardListSkeleton;
