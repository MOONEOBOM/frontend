'use client';
import MoonoError from '@/assets/moono/moono_lost.svg?react';
import Button from '@/components/common/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface detailErrorProps {
  refetch: () => void;
}

const CallDetailError = ({ refetch }: detailErrorProps) => {
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
          통화 내역을 불러오지 못했어요...
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
        <Link href="/" className="body3 w-fit cursor-pointer underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default CallDetailError;
