'use client';
import MoonoGood from '@/assets/moono/moono_good.svg';
import MoonoBad from '@/assets/moono/moono_bad.svg';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const SummaryFeedback = () => {
  const router = useRouter();
  const handleRouter = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center gap-[30px]">
      <p className="heading2">무너의 요약은 어떠셨나요?</p>
      <div className="flex gap-[25px]">
        <motion.button
          initial={{}}
          whileHover={{ scale: 1.2 }}
          whileTap={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
          className="cursor-pointer"
          onClick={handleRouter}
        >
          <MoonoGood />
        </motion.button>
        <motion.button
          initial={{}}
          whileHover={{ scale: 1.2 }}
          whileTap={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
          className="cursor-pointer"
          onClick={handleRouter}
        >
          <MoonoBad />
        </motion.button>
      </div>
    </div>
  );
};

export default SummaryFeedback;
