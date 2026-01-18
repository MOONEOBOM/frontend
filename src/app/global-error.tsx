'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MoonoError from '@/assets/icon/moono_lost.svg?react';
import Button from '@/components/common/Button';
import './globals.css';

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {

    const router = useRouter();

    useEffect(() => {
        console.error('Global Error:', error);
    }, [error]);

    return (
        <html lang="ko">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>오류 발생</title>
            </head>
            <body>
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
                        전체 시스템에 문제가 발생했습니다.
                        </p>
                    </div>
                

                    {/* 버튼 */}
                    <div className="mt-[80px] px-[45px] w-full flex justify-center">
                        <Button
                            size="full"
                            variant="solid"
                            className="bg-[#FFE37E] text-[#111111] w-full"
                            onClick={() => {
                                reset();
                                router.push('/');
                            }}
                            >
                            홈으로 돌아가기...
                        </Button>
                    </div>
                </div>
            </body>
        </html>
    );
}