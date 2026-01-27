'use client';

import { useState, useEffect } from 'react';
import { TextBubbleScenario } from '../TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import { useRecentSummary } from '@/lib/tanstack/query/summary.query';
import { QueryBoundary } from '@/utils/QueryBoundary';
import { SummaryLoading } from './SummaryLoading';
import { SummaryError } from './SummaryError';
import { useSearchParams } from 'next/navigation';

const SummaryData = ({ summaryId }: { summaryId: number }) => {

  // 3) 아래에서 id로 전달받은 summaryId를 사용하여 API 호출하고 db에서 요약본 꺼냄
  const { data } = useRecentSummary(summaryId);

  return (
    <div className="flex w-full flex-col items-center gap-[50px]">
      {/* DB에서 가져온 title */}
      <p className="heading2 text-center">{data.title}</p>
      {/* DB에서 가져온 summary (= DB에서는 content) */}
      <p className="body1 px-[50px] text-center leading-relaxed break-words break-keep">
        {data.summary}
      </p>

      {/* 핵심 채팅 부분 */}
      <div className="flex w-full flex-col gap-[16px]">
        {data.core_chat && data.core_chat.length > 0 ? (
          data.core_chat.map((chat, idx) => (
            chat.speaker === 'agent' ? (
              <TextBubbleScenario key={idx} text={chat.message} />
            ) : (
              <TextBubbleUser key={idx} text={chat.message} />
            )
          ))
        ) : (
          <p className="text-gray-400 text-center script-title">핵심 대화가 없어요...</p>
        )}
      </div>
    </div>
  );
};

const SummaryContent = () => {

  const searchParams = useSearchParams();
  // 2) URL에서 summaryId 추출하고 이를 Number 타입으로 한 다음, id라는 변수에 새로 저장 (쿼리 파라미터)
  const id = searchParams.get('id');
  const summaryId = id ? Number(id) : null;  // 있으면 Number 타입으로 바꾸고 없으면 null

  // 3) id가 없음 -> 예외 처리 (안내문)
  if (!summaryId) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500 script-body-16">요약 내역을 찾을 수 없어요...</p>
      </div>
    );
  }

  return (
    <QueryBoundary
      // 로딩 시 보여줄 전용 UI 파일
      loadingFallback={<SummaryLoading />}
      // 에러 시 보여줄 전용 UI 파일 (reset 함수 전달)
      errorFallback={(reset) => <SummaryError reset={reset} />}
    >
      <SummaryData summaryId={summaryId} />
    </QueryBoundary>
  );
};

export default SummaryContent;