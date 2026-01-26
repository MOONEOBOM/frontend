'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useRouter } from 'next/navigation';
import Box from '@/components/calls/Box';

dayjs.locale('ko');

const SCRIPT = [
  {
    id: 1,
    date: '2026-01-21T07:30:15.123Z',
    text: '해외 로밍 신청하려고 전화드렸어요',
  },
  {
    id: 2,
    date: '2026-01-21T07:30:15.123Z',
    text: '베트남에 있는데 로밍이 안 되는 것 같아요',
  },
  {
    id: 3,
    date: '2026-01-21T07:30:15.123Z',
    text: '해외 다녀왔는데 요금이 너무 많이 나왔어요',
  },
  {
    id: 4,
    date: '2026-01-21T07:30:15.123Z',
    text: '해외에서 휴대폰을 도둑맞았어요',
  },
  {
    id: 5,
    date: '2026-01-21T07:30:15.123Z',
    text: '대치동에서 데이터가 너무 느려요',
  },
  {
    id: 6,
    date: '2026-01-21T07:30:15.123Z',
    text: '오늘 밤 출국인데 가족 2명 로밍 같이 신청하려구요',
  },
];

const CallList = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-[25px]">
      {SCRIPT.map((c) => {
        return (
          <button key={c.id} onClick={() => router.push(`/calls/${c.id}`)}>
            <Box
              date={dayjs(c.date).format('YYYY.MM.DD A h:mm')}
              text={c.text}
              isNew={c.id === 1}
            />
          </button>
        );
      })}
    </div>
  );
};
export default CallList;
