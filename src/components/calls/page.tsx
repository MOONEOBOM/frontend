import Header from '@/components/common/Header';
import MoonoCall from '@/assets/moono/moono_calling.svg?react';

const SCRIPT = [
  {
    date: '2026-01-21T07:30:15.123Z',
    text: '해외 로밍 신청하려고 전화드렸어요',
  },
  {
    date: '2026-01-21T07:30:15.123Z',
    text: '베트남에 있는데 로밍이 안 되는 것 같아요',
  },
  {
    date: '2026-01-21T07:30:15.123Z',
    text: '해외 다녀왔는데 요금이 너무 많이 나왔어요',
  },
  {
    date: '2026-01-21T07:30:15.123Z',
    text: '해외에서 휴대폰을 도둑맞았어요',
  },
  {
    date: '2026-01-21T07:30:15.123Z',
    text: '대치동에서 데이터가 너무 느려요',
  },
  {
    date: '2026-01-21T07:30:15.123Z',
    text: '오늘 밤 출국인데 가족 2명 로밍 같이 신청하려구요',
  },
];

const CallPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header type="home" />
      <MoonoCall className="mt-[10px] mb-[25px]" />
      <p className="script-body-16 text-center">
        무너가 확인한 통화내역이에요.
        <br />
        요약하고 싶은 상담을 선택해주세요.
      </p>
      {SCRIPT.map((c) => {
        return <div>{c.text}</div>;
      })}
    </div>
  );
};

export default CallPage;
