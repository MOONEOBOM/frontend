'use client';

import CallingMoono from '@/assets/icon/moono_calling.svg?react';
import Good from '@/assets/icon/moono_good.svg?react';
import Bad from '@/assets/icon/moono_bad.svg?react';
import Badge from '@/components/common/Badge';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const KEYWORD = ['데이터 로밍', '제로프리미엄', '400kbps'];

const BottomSheet = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const isAnswered = searchParams.get('answered') === 'true';

  const closeSheet = () => {
    router.replace(`${pathname}?answered=true`);
  };

  return (
    <AnimatePresence>
      {!isAnswered && (
        <motion.div
          key="bottomSheetContent"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="shadow-card fixed bottom-0 z-50 flex h-[80vh] min-w-[390px] flex-col gap-[50px] rounded-t-[50px] bg-white pt-[75px]"
        >
          <div className="flex flex-col items-center gap-[20px]">
            <CallingMoono />
            <p className="heading2 text-center">
              시나리오에서 핵심 키워드는
              <br />잘 말씀하셨나요?
            </p>
            <div className="flex gap-[8px]">
              {KEYWORD.map((k) => (
                <Badge type="blue" key={k}>
                  {k}
                </Badge>
              ))}
            </div>
            <p className="body2 text-center text-gray-800">
              무너가 확인한 통화내역에서는
              <br />
              요금 과다 부여, 어쩌고만 있었어요
              <br />
              추가 상담이 필요하다면 진행해주세요!
            </p>
          </div>

          <div className="flex flex-col items-center gap-[15px]">
            <p className="heading2 text-center">무너의 시나리오는 어땠나요?</p>
            <div className="flex gap-[20px]">
              <Good className="cursor-pointer" onClick={closeSheet} />
              <Bad className="cursor-pointer" onClick={closeSheet} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
