'use client';

import { useState, useEffect } from 'react';
import { TextBubbleScenario } from '../TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import { useRecentSummary } from '@/lib/tanstack/query/summary.query';
import { QueryBoundary } from '@/utils/QueryBoundary';
import { SummaryLoading } from './SummaryLoading';
import { SummaryError } from './SummaryError';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useOnboardingStore } from '@/store/useOnboarding';

const ONBOARD_SUMMARY = {
  title: '로밍 사용으로 인한 요금 과청구',
  content:
    '고객은 해외에서 로밍 서비스를 이용한 이후 높은 요금이 청구된 것에 대해 문의함. 상담 과정에서 로밍 요금 산정 기준과 실제 사용 내역에 대한 설명을 받음.',
  highlights: [
    { speaker: 'user', text: '해외 다녀왔는데 요금이 너무 많이 나왔어요' },
    {
      speaker: 'agent',
      text: '로밍 종량 과금은 현지 요율로 적용되어 단가가 높을 수 있습니다.',
    },
  ],
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // 각 자식 요소 간격
      delayChildren: 0.4,
    },
  },
};

const SummaryData = ({ summaryId }: { summaryId: number }) => {

  const { isOnboarding } = useOnboardingStore();

  // 1. 인자를 쉼표(,)로 구분하여 2개(ID, 옵션객체)로 전달합니다. 
  // query 파일의 export const useRecentSummary = (summaryId, options) 구조와 맞춤
  const { data } = useRecentSummary(summaryId, {
    enabled: !isOnboarding && !!summaryId,
  });

  if (isOnboarding) {
    return (
      <div className="flex w-full flex-col items-center gap-[30px]">
        <p className="heading3">{ONBOARD_SUMMARY.title}</p>
        <p className="body2 px-[40px] text-center leading-relaxed break-words break-keep">
          {ONBOARD_SUMMARY.content}
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {ONBOARD_SUMMARY.highlights.map((bubble, idx) => {
            return bubble.speaker === 'agent' ? (
              <TextBubbleScenario
                key={idx}
                text={bubble.text}
                itemVariants={itemVariants}
              />
            ) : (
              <TextBubbleUser
                key={idx}
                text={bubble.text}
                itemVariants={itemVariants}
              />
            );
          })}
        </motion.div>
      </div>
    );
  }
  
  if (!data) return null;

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
          data.core_chat.map((chat, idx) =>
            chat.speaker === 'agent' ? (
              <TextBubbleScenario key={idx} text={chat.message} />
            ) : (
              <TextBubbleUser key={idx} text={chat.message} />
            ),
          )
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