'use client';

import Logo from '@/assets/icon/logo_small.svg?react';
import Moono from '@/assets/moono/moono_summary.svg?react';
import dayjs from 'dayjs';

const MockData = {
  title: '베트남 로밍 해결 ',
  default:
    '베트남에서 데이터 로밍 차단을 풀고 재부팅해서 연결했어요. 속도가 답답해 제로프리미엄으로 바꿨고 400kbps 속도로 무제한 쓸 수 있어 안심돼요.',
  createdAt: '2026-01-21T07:30:15.123Z',
};

import { useState } from 'react';
import Card from '@/components/history/Card';

export default function FlipCard() {
  const [isTouched, setIsTouched] = useState(false);
  const formattedDate = dayjs(MockData.createdAt).format('YYYY.MM.DD');

  return (
    <div
      className="group group cursor-pointer [perspective:1000px]"
      onClick={() => setIsTouched(!isTouched)}
    >
      <div
        className={`relative grid duration-700 [transform-style:preserve-3d] ${
          isTouched ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* 앞면 */}
        <div className="[backface-visibility:hidden] [grid-area:1/1]">
          <Card>
            <Moono className="w-[140px]" />
            <div className="flex flex-col items-center gap-[20px]">
              <p className="heading3">{MockData.title}</p>
              <p className="body3 text-gray-800">{formattedDate}</p>
            </div>
          </Card>
        </div>

        {/* 뒷면 */}
        <div className="[transform:rotateY(180deg)] [backface-visibility:hidden] [grid-area:1/1]">
          <Card>
            <Logo />
            <div className="flex h-[200px] w-[210px] flex-col items-center gap-[15px]">
              <p className="heading3">{MockData.title}</p>
              <div className="w-[200px] border-t-1 border-gray-300" />
              <p className="body2 text-center">{MockData.default}</p>
            </div>
            <p className="body3 t bottom-[20px] text-gray-800">
              {formattedDate}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
