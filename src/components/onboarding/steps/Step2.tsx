'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ScenarioContainer from '@/components/scenario/pre/ScenarioClientContainer';
import ScenarioIntroBubble from '@/components/scenario/pre/ScenarioIntroBubble';

const Step2 = () => {
  const [showScenario, setShowScenario] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!showScenario ? (
        <div>
          <div className="body2 mt-[22px] h-[430px] w-[295px] rounded-t-[42px] border-t-[5px] border-r-[5px] border-l-[5px] border-gray-500 bg-gray-100 px-[15px]">
            <div className="flex w-full justify-end">
              <div className="bg-primary body2 shadow-bubble mt-[128px] max-w-[190px] rounded-[12px_2px_12px_12px] px-[8px] py-[8px] break-words whitespace-pre-wrap text-black">
                전화상담 연결하기
              </div>
            </div>
            <div className="body2 shadow-bubble mt-[24px] w-[170px] rounded-[2px_12px_12px_12px] bg-white px-[10px] py-[10px] break-words whitespace-pre-wrap">
              <div className="whitespace-pre-wrap">
                전화 상담이 필요하신가요? <br />
                무너와 함께 시나리오도 만들 수 있어요.
              </div>
            </div>
            <div className="flex py-[9px]">
              <div className="body2 shadow-bubble mr-[5px] max-w-[105px] rounded-[20px] bg-white px-[14px] py-[8px] break-words whitespace-pre-wrap">
                전화 상담
              </div>
              <motion.div
                initial={{ scale: 1, backgroundColor: 'var(--color-white)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  backgroundColor: [
                    'var(--color-white)',
                    'var(--color-primary)', //이렇게 해야 색상이 인식됩니다.
                    'var(--color-primary)',
                  ],
                }}
                transition={{
                  duration: 0.5,
                  delay: 1, //1초 뒤 시작으로 통일
                  times: [0, 0.5, 1],
                }}
                onAnimationComplete={() => {
                  setTimeout(() => setShowScenario(true), 800);
                }}
                className="body2 shadow-bubble max-w-[105px] rounded-[20px] px-[14px] py-[8px] break-words whitespace-pre-wrap"
              >
                시나리오 생성
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        <div className="body2 mt-[22px] flex h-[430px] w-[295px] justify-center overflow-hidden rounded-t-[42px] border-[5px] border-b-0 border-gray-500 bg-white">
          {/* 실제 페이지를 축소하여 작은 화면 안에 렌더링합니다.
           */}
          <div
            style={{
              transform: 'scale(0.8)',
              transformOrigin: 'top center',
              width: '142%',
              pointerEvents: 'none',
            }}
          >
            <ScenarioContainer isOnboarding={true}>
              <ScenarioIntroBubble />
            </ScenarioContainer>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Step2;
