'use client';
import { FallbackProps } from 'react-error-boundary';
import CardItemSkeleton from './CardItemSkeleton';
import Restart from '@/assets/icon/restart.svg';

const CardListError = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="relative flex flex-col items-center gap-10">
      <div className="flex h-[200px] w-[390px] items-center gap-[10px] overflow-hidden px-[148px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <CardItemSkeleton key={i} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 rounded-[20px] bg-white/90 p-4">
          <button onClick={resetErrorBoundary}>
            <Restart className="text-primary h-6 w-6 cursor-pointer" />
          </button>
          <p className="body2">목록을 불러오지 못했어요</p>
        </div>
      </div>
    </div>
  );
};

export default CardListError;
