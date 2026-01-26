'use client';

import { useState, useEffect } from 'react';
import { TextBubbleScenario } from '../TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import { useRecentSummary } from '@/lib/tanstack/query/summary.query';
import { QueryBoundary } from '@/utils/QueryBoundary';
import { SummaryLoading } from './SummaryLoading';
import { SummaryError } from './SummaryError';

// 실제 데이터 관련 (아래 본문에서 호출하고 사용함)
const SummaryData = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // useSuspenseQuery를 사용하면 data가 undefined일 수 없음 -> (?.) 없이도 타입 에러가 나지 않음
  const { data } = useRecentSummary();  // useSuspenseQuery 사용

  // 중요: 마운트되기 전(빌드/서버 타임)에는 아무것도 렌더링하지 않아 API 호출을 차단
  if (!isMounted) {
    return <SummaryLoading />;
  }

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
          <p className="text-gray-400 text-center">핵심 대화가 없어요...</p>
        )}
      </div>
    </div>
  );
};

const SummaryContent = () => {
  return (
    <QueryBoundary
      // 로딩 시 보여줄 전용 UI 파일
      loadingFallback={<SummaryLoading />}
      // 에러 시 보여줄 전용 UI 파일 (reset 함수 전달)
      errorFallback={(reset) => <SummaryError reset={reset} />}
    >
      <SummaryData />
    </QueryBoundary>
  );
};

export default SummaryContent;