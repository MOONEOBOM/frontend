'use client';

import { useRouter } from 'next/navigation';
import MoonoError from '@/assets/moono/moono_lost.svg?react';
import Button from '@/components/common/Button';

interface ErrorPageProps {
  message?: string;
  buttonColor?: string;
  reset?: () => void;
}

export default function ErrorPage({
  message = "앗! 무너가 길을 잃었어요.\n잠시 후 다시 시도해 주시겠어요?",
  buttonColor,
  reset,
}: ErrorPageProps) {
  const router = useRouter();

  const ClickReset = () => {
    if (reset) {
      reset();
    }
    router.replace('/');
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-white pt-[205px]">
      {/* 무너 우는 이미지 */}
      <div className="mb-[35px] flex justify-center">
        <MoonoError aria-hidden="true" />
      </div>

      {/* 에러 안내 텍스트 */}
      <div className="px-[74px] text-center">
        <p className="script-title whitespace-pre-wrap">{message}</p>
      </div>

      {/* 버튼 */}
      <div className="mt-[80px] flex w-full justify-center px-[45px]">
        <Button
          size="full"
          variant="solid"
          className={
            buttonColor
              ? 'script-title w-full text-[`#111111`]'
              : 'bg-primary script-title w-full'
          }
          style={buttonColor ? { backgroundColor: buttonColor } : {}}
          onClick={ClickReset}
        >
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  );
}
