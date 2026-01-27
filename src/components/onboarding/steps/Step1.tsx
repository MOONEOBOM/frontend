'use client';
import { motion } from 'framer-motion';
import TranslateIcon from '@/assets/icon/generate.svg?react';

const Step1 = () => {
  return (
    <div className="body2 mt-[22px] h-[510px] w-[295px] rounded-t-[42px] border-t-[5px] border-r-[5px] border-l-[5px] border-gray-500 bg-gray-100 px-[15px]">
      <div className="flex w-full justify-end">
        <div className="bg-primary body2 shadow-bubble mt-[128px] max-w-[190px] rounded-[12px_2px_12px_12px] px-[8px] py-[8px] break-words whitespace-pre-wrap text-black">
          안녕하세요, 반갑습니다.
        </div>
      </div>
      <div className="flex w-full justify-start">
        <motion.div
          layout
          transition={{ layout: { duration: 0.5, delay: 1 } }} // 1초 뒤 애니메이션 시작
          className="body2 shadow-bubble mt-[24px] max-w-[180px] rounded-[2px_12px_12px_12px] bg-white px-[8px] py-[8px] break-words whitespace-pre-wrap"
        >
          <div>안녕하세요? 온보딩입니다. </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden"
          >
            <div className="my-3 border-t border-gray-300" />
            <div className="text-sm whitespace-pre-wrap text-[#7E7E7E]">
              <div>상세 설명입니다. 보다 쉬운 용어로 풀어 설명해드릴게요.</div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-[24px] ml-[10px] flex h-[20px] w-[20px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-300"
        >
          <TranslateIcon className="h-[10px] w-[10px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Step1;
