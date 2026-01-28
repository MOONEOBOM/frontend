'use client';

import { TextBubbleScenario } from '../TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import { useRecentSummary } from '@/lib/tanstack/query/summary.query';
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
    { speaker: 'user', text: '해외 다녀왔는데\n요금이 너무 많이 나왔어요' },
    {
      speaker: 'agent',
      text: '로밍 종량 과금은 \n현지 요율로 적용되어\n단가가 높을 수 있습니다.',
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
const SummaryOnboarding = () => {
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
        className="flex w-full flex-col"
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
};

const SummaryContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const summaryId = typeof id === 'string' ? Number(id) : Number(id?.[0]);
  const { isOnboarding } = useOnboardingStore();

  const { data, isLoading, isError, refetch } = useRecentSummary(summaryId, {
    enabled: !isOnboarding && !!summaryId,
  });

  if (isOnboarding) {
    return <SummaryOnboarding />;
  }

  if (!summaryId) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="script-body-16 text-gray-500">
          요약 내역을 찾을 수 없어요...
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <SummaryLoading />;
  }
  if (isError) {
    return <SummaryError reset={refetch} />;
  }
  if (!data) return null;
  return (
    <div className="flex w-full flex-col items-center gap-[50px]">
      <p className="heading2 text-center">{data.title}</p>
      <p className="body1 px-[50px] text-center leading-relaxed break-words break-keep">
        {data.summary}
      </p>
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
          <p className="script-title text-center text-gray-400">
            핵심 대화가 없어요...
          </p>
        )}
      </div>
    </div>
  );
};

export default SummaryContent;
