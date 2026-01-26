'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { ReactNode, Suspense } from 'react';
import Button from './Button';
import MoonoError from '@/assets/moono/moono_lost.svg?react';

interface Props {
  children: ReactNode;
  fallback: ReactNode; // 로딩 시 보여줄 UI (Suspense용)
  errorFallback?: (props: FallbackProps) => ReactNode; // 에러 시 보여줄 UI
}

// 기본 에러 UI (따로 지정 안 했을 때 나옴)
const DefaultErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white pt-[205px]">
      {/* 무너 우는 이미지 */}
      <div className="mb-[35px] flex justify-center">
        <MoonoError aria-hidden="true" />
      </div>
      {/* 에러 안내 텍스트 */}
      <div className="px-[70px] text-center">
        <p className="script-title whitespace-pre-wrap">
          앗! 무너가 길을 잃었어요.
          <br /> 잠시 후 다시 시도해 주시겠어요?
        </p>
      </div>
      {/* 버튼 */}
      <div className="mt-[80px] flex w-full justify-center px-[45px]">
        <Button
          size="full"
          variant="solid"
          className={'bg-primary script-title w-full'}
          onClick={resetErrorBoundary}
        >
          다시 시도
        </Button>
      </div>
    </div>
  );
};

export default function ApiBoundary({
  children,
  fallback,
  errorFallback,
}: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          FallbackComponent={errorFallback || DefaultErrorFallback}
        >
          <Suspense fallback={fallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
