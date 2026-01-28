'use client';
import MoonoGood from '@/assets/moono/moono_good.svg';
import MoonoBad from '@/assets/moono/moono_bad.svg';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useState } from 'react';
const SummaryFeedback = () => {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(false);
  const handleRouter = () => {
    setShowConfetti(true);
    setTimeout(() => {
      router.push('/');
    }, 2500);
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={390}
          height={844}
          numberOfPieces={500}
          gravity={0.5}
          style={{
            position: 'fixed',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
          }}
        />
      )}
      <div className="flex flex-col items-center gap-[30px]">
        <p className="heading2">무너의 요약은 어떠셨나요?</p>
        <div className="flex gap-[25px]">
          <motion.button
            initial={{}}
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
            onClick={handleRouter}
          >
            <MoonoGood />
          </motion.button>
          <motion.button
            initial={{}}
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
            onClick={handleRouter}
          >
            <MoonoBad />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default SummaryFeedback;
