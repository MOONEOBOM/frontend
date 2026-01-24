'use client';

import { TextBubbleScenario } from '../TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import { useRecentSummary } from '@/lib/tanstack/query/summary.query';

const MOCK_SUMMARY = {
  title: '로밍 사용으로 인한 요금 과청구',
  content:
    '고객은 해외에서 로밍 서비스를 이용한 이후 높은 요금이 청구된 것에 대해 문의함. 상담 과정에서 로밍 요금 산정 기준과 실제 사용 내역에 대한 설명을받음. 추후 동일한 문제가 발생하지 않도록 사전 차단 설정 및 요금 관리방법을 안내받음.',
  highlights: [
    { speaker: 'user', text: '해외 다녀왔는데 요금이 너무 많이 나왔어요' },
    {
      speaker: 'agent',
      text: '사용 번호 010-1234-5678 성함 이OO 고객님 맞으실까요? 본인이신가요?',
    },
  ],
};

const SummaryContent = () => {

  const { data, isLoading, isError } = useRecentSummary();
  console.log("컴포넌트 내부 data:", data?.core_chat);

  if (isLoading) {
    return <div className="py-20 text-center">요약 불러오는 중...</div>;
  }
  if (isError || !data) {
    return <div className="py-20 text-center">데이터를 가져오기 실패</div>;
  }

  return (
    <div className="flex w-full flex-col items-center gap-[50px]">
      {/* DB에서 가져온 title */}
      <p className="heading2 text-center">{data.title}</p>

      {/* DB에서 가져온 summary (= DB에서는 content) */}
      <p className="body1 px-[50px] text-center leading-relaxed break-words break-keep">
        {data.summary}
      </p>

      {/* 3. 핵심 채팅 부분 */}
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
          <p className="text-gray-400 text-center">핵심 대화가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default SummaryContent;
