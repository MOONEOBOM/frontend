'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MoonoGood from '@/assets/moono/moono_good.svg';
import MoonoBad from '@/assets/moono/moono_bad.svg';
import { useRouter } from 'next/navigation';

const SummaryFeedback = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const hasAnimated = useRef(false);
  const handleFeedbackClick = () => {
    setIsSubmitted(true);
    if (!hasAnimated.current) {
      setTimeout(() => {
        router.push('/');
      }, 2000);
      hasAnimated.current = true;
    }
  };

  return (
    <div className="flex flex-col items-center gap-[30px]">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="question"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-[30px]"
          >
            <p className="heading2">무너의 요약은 어떠셨나요?</p>
            <div className="flex gap-[25px]">
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer"
                onClick={handleFeedbackClick}
              >
                <MoonoGood />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer"
                onClick={handleFeedbackClick}
              >
                <MoonoBad />
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[100px] items-center justify-center"
          >
            <p className="heading2 text-[#12CE66]">
              설문에 참여해주셔서 감사합니다!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SummaryFeedback;
