'use client';
import { useRouter } from 'next/navigation';

export default function TextBubbleCalling() {
  const router = useRouter();
  return (
    <>
      <div className="body2 shadow-bubble max-w-[240px] rounded-[2px_12px_12px_12px] bg-white px-[10px] py-[10px] break-words whitespace-pre-wrap">
        <div className="whitespace-pre-wrap">
          전화 상담이 필요하신가요? <br />
          무너와 함께 시나리오도 만들 수 있어요.
        </div>
      </div>
      <div className="py-[9px]">
        <button className="body2 shadow-bubble mr-[5px] max-w-[105px] rounded-[20px] bg-white px-[14px] py-[8px] break-words whitespace-pre-wrap">
          전화 상담
        </button>
        <button
          onClick={() => {
            router.push('/scenario/pre');
          }}
          className="body2 shadow-bubble max-w-[105px] rounded-[20px] bg-white px-[14px] py-[8px] break-words whitespace-pre-wrap"
        >
          시나리오 생성
        </button>
      </div>
    </>
  );
}
