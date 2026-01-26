import { TextBubbleScenario } from '../TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import { motion } from 'framer-motion';

const MOCK_SUMMARY = {
  title: '로밍 사용으로 인한 요금 과청구',
  content:
    '고객은 해외에서 로밍 서비스를 이용한 이후 높은 요금이 청구된 것에 대해 문의함. 상담 과정에서 로밍 요금 산정 기준과 실제 사용 내역에 대한 설명을받음.',
  highlights: [
    { speaker: 'user', text: '해외 다녀왔는데 요금이 너무 많이 나왔어요' },
    {
      speaker: 'agent',
      text: '사용 번호 010-1234-5678 성함 이OO 고객님 맞으실까요? 본인이신가요?',
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

const SummaryContent = ({ isOnboarding }: { isOnboarding?: boolean }) => {
  if (isOnboarding) {
    return (
      <div className="flex w-full flex-col items-center gap-[30px]">
        <p className="heading3">{MOCK_SUMMARY.title}</p>

        <p className="body2 px-[40px] text-center leading-relaxed break-words break-keep">
          {MOCK_SUMMARY.content}
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {MOCK_SUMMARY.highlights.map((bubble, idx) => {
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

  return (
    <div className="flex w-full flex-col items-center gap-[50px]">
      <p className="heading2">{MOCK_SUMMARY.title}</p>

      <p className="body1 px-[50px] text-center leading-relaxed break-words break-keep">
        {MOCK_SUMMARY.content}
      </p>
      <div>
        {MOCK_SUMMARY.highlights.map((bubble, idx) => {
          return bubble.speaker === 'agent' ? (
            <TextBubbleScenario key={idx} text={bubble.text} />
          ) : (
            <TextBubbleUser key={idx} text={bubble.text} />
          );
        })}
      </div>
    </div>
  );
};

export default SummaryContent;
