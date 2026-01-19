'use client';

import ErrorPage from '@/components/common/ErrorPage';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {

  return (
    <ErrorPage 
      message={`앗! 무너가 길을 잃었어요.\n잠시 후 다시 시도해 주시겠어요?`}
      reset={reset}
    />
  );
}