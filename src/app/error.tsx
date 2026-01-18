'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MoonoError from '@/assets/icon/moono_lost.svg?react';
import Button from '@/components/common/Button';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-white pt-[205px]">
        
            {/* 무너 우는 이미지 */}
            <div className="mb-[35px] flex justify-center">
                <MoonoError
                    width={210}
                    height={180}
                    aria-hidden="true"
                />
            </div>

            {/* 에러 안내 텍스트 */}
            <div className="text-center px-[74px]">
                <p className="script-title whitespace-pre-wrap">
                    앗! 무너가 길을 잃었어요.{"\n"}
                    잠시 후 다시 시도해 주시겠어요?
                </p>
            </div>

            {/* 버튼 */}
            <div className="mt-[80px] px-[45px] w-full flex justify-center">
                <Button
                    size="full"
                    variant="solid"
                    className="bg-primary script-title w-full"
                    onClick={() => {
                        reset();
                        router.push('/');
                    }}
                    >
                    홈으로 돌아가기
                </Button>
            </div>
        </div>
    );
}