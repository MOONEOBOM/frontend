// src/utils/QueryBoundary.tsx
'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  loadingFallback?: ReactNode;
  errorFallback?: (reset: () => void) => ReactNode; 
}

export const QueryBoundary = ({
  children,
  loadingFallback,
  errorFallback
}: ErrorBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}  // 에러 바운더리 리셋 시 쿼리도 리셋
          fallbackRender={({ resetErrorBoundary }) => (
            errorFallback ? (
              errorFallback(resetErrorBoundary)
            ) : (
                <div className="py-20 text-center">
                  <p className="text-red-500 mb-4 font-bold">에러...</p>
                  <button onClick={() => resetErrorBoundary()} className="px-4 py-2 bg-gray-100">
                    재시도
                  </button>
                </div>
              )
            )}
          >
          <Suspense fallback={loadingFallback || <div className="py-10 text-center text-gray-400">불러오는 중...</div>}>
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};