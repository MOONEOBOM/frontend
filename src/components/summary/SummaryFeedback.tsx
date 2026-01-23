'use client';
import MoonoGood from '@/assets/moono/moono_good.svg';
import MoonoBad from '@/assets/moono/moono_bad.svg';
import { useRouter } from 'next/navigation';

const SummaryFeedback = () => {
  const router = useRouter();
  const handleRouter = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center gap-[30px]">
      <p className="heading2">무너의 요약은 어떠셨나요?</p>
      <div className="flex gap-[14px]">
        <button className="cursor-pointer" onClick={handleRouter}>
          <MoonoGood />
        </button>
        <button className="cursor-pointer" onClick={handleRouter}>
          <MoonoBad />
        </button>
      </div>
    </div>
  );
};

export default SummaryFeedback;
