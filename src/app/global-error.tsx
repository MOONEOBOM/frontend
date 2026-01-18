'use client';

import ErrorPage from '@/components/common/ErrorPage';
import './globals.css';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {

  return (
    <html lang="ko">
      <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>오류 발생</title>
      </head>
      <body>
          <ErrorPage 
          message={`앗! 무너가 길을 잃었어요.\n전체 시스템에 문제가 발생했습니다.`}
          buttonColor="#FFE37E"
          reset={reset}
          />
      </body>
    </html>
  );
}