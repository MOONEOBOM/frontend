'use client';

import CallingMoono from '@/assets/icon/moono_calling.svg?react';
import Good from '@/assets/icon/moono_good.svg?react';
import Bad from '@/assets/icon/moono_bad.svg?react';
import Badge from '@/components/common/Badge';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import router from 'next/router';

const KEYWORD = ['데이터 로밍', '제로프리미엄', '400kbps'];

const BottomSheet = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const isHidden = searchParams.get('answered') === 'true';

  const closeSheet = () => {
    router.replace(`${pathname}?answered=true`);
  };

  if (isHidden) return null;

  return (
    <div className="absolute bottom-0 z-99 flex h-[80vh] w-full flex-col gap-[50px] rounded-t-[50px] bg-white pt-[75px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center gap-[20px]">
        <CallingMoono />
        <p className="heading2 text-center">
          시나리오에서 핵심 키워드는
          <br />잘 말씀하셨나요?
        </p>
        <div className="flex gap-[8px]">
          {KEYWORD.map((k) => {
            return (
              <Badge type="blue" key={k}>
                {k}
              </Badge>
            );
          })}
        </div>
        <p className="body2 text-center">
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
          <Good
            onClick={() => {
              closeSheet();
            }}
          />
          <Bad
            onClick={() => {
              closeSheet();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
