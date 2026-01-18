'use client';

import { useRouter } from 'next/navigation';
import MoonoError from '@/assets/icon/moono_lost.svg?react';
import Button from '@/components/common/Button';

interface ErrorPageProps {
  message: string;
  buttonColor?: string;
  reset: () => void;
}

export default function ErrorPage({ message, buttonColor, reset }: ErrorPageProps) {

  const router = useRouter();
  
  const ClickReset = () => {
    reset();
    router.push('/');
  };
  
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-[205px]">
    
      {/* 무너 우는 이미지 */}
      <div className="mb-[35px] flex justify-center">
        <MoonoError aria-hidden="true"
        />
      </div>

      {/* 에러 안내 텍스트 */}
      <div className="text-center px-[74px]">
        <p className="script-title whitespace-pre-wrap">
            {message}
        </p>
      </div>

      {/* 버튼 */}
      <div className="mt-[80px] px-[45px] w-full flex justify-center">
        <Button
          size="full"
          variant="solid"
          className={buttonColor ? `text-[#111111] w-full` : "bg-primary script-title w-full"}
          style={buttonColor ? { backgroundColor: buttonColor } : {}}
          onClick={ClickReset}
        >
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  )
}