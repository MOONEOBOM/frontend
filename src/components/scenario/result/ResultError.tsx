'use client';
import MoonoError from '@/assets/moono/moono_lost.svg?react';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

interface resultErrorProps {
  refetch: () => void;
}

const ResultError = ({ refetch }: resultErrorProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center bg-white pt-[170px]">
      {/* 무너 우는 이미지 */}
      <div className="mb-[35px] flex justify-center">
        <MoonoError aria-hidden="true" />
      </div>

      {/* 에러 안내 텍스트 */}
      <div className="px-[50px] text-center">
        <p className="script-title whitespace-pre-wrap">
          시나리오 생성에 문제가 생겼어요...
        </p>
      </div>

      {/* 버튼 */}
      <div className="mt-[30px] flex w-full flex-col items-center justify-center gap-[20px] px-[45px]">
        <Button
          size="full"
          variant="solid"
          className={'bg-primary script-title w-full'}
          onClick={refetch}
        >
          다시 시도
        </Button>
        <span
          onClick={() => router.replace('/')}
          className="script-body-14 w-fit cursor-pointer bg-[linear-gradient(to_top,var(--color-primary)_40%,transparent_40%)] px-0.5 leading-[1.2]"
        >
          홈으로 이동
        </span>
      </div>
    </div>
  );
};

export default ResultError;
