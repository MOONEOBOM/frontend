'use client';

import Header from '../common/Header';
import BottomBoard from './BottomBoard';
import { motion } from 'framer-motion';
import TranslateIcon from '@/assets/icon/generate.svg?react';
const OnboardingPage = () => {
  const handleNext = () => {
    console.log('여기에 라우터 연결하기');
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Header type="onboarding" />
      <div className="body2 mt-[22px] h-[430px] w-[295px] rounded-t-[42px] border-t-[5px] border-r-[5px] border-l-[5px] border-gray-500 bg-gray-100 px-[15px]">
        <div className="flex w-full justify-end">
          <div className="bg-primary body2 shadow-bubble mt-[128px] max-w-[190px] rounded-[12px_2px_12px_12px] px-[8px] py-[8px] break-words whitespace-pre-wrap text-black">
            안녕하세한어러에ㅑㅓㄴ
          </div>
        </div>
        <div className="flex w-full justify-start">
          <motion.div
            layout
            transition={{ layout: { duration: 0.4, delay: 1 } }} // 1초 뒤 애니메이션 시작
            className="body2 shadow-bubble mt-[24px] max-w-[180px] rounded-[2px_12px_12px_12px] bg-white px-[8px] py-[8px] break-words whitespace-pre-wrap"
          >
            <div>안녕하세한어러에ㅑㅓㄴ집에갈랭넬ㅇ네러네</div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5, delay: 1 }}
              className="overflow-hidden"
            >
              <div className="my-3 border-t border-gray-300" />
              <div className="text-sm whitespace-pre-wrap text-[#7E7E7E]">
                <div>안녕하세요, 집에 가려고 합니다.</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ scale: 1, backgroundColor: '#D1D5DB' }}
            animate={{
              scale: [1, 1.4, 1],
              backgroundColor: ['#D1D5DB', 'primary'],
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-[24px] ml-[10px] flex h-[20px] w-[20px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-300"
          >
            <TranslateIcon className="h-[10px] w-[10px]" />
          </motion.div>
        </div>
      </div>
      <BottomBoard
        type="white"
        title="통신 용어가 어려우신가요?"
        text="무너봄이 쉬운 말로 풀어드릴게요."
        onNext={handleNext}
      />
    </div>
  );
};

export default OnboardingPage;
