import Link from 'next/link';
import CallButton from './CallButton';

export default function TextBubbleCalling() {
  return (
    <>
      <div className="body2 shadow-bubble max-w-[240px] rounded-[2px_12px_12px_12px] bg-white px-[10px] py-[10px] break-words whitespace-pre-wrap">
        <div className="whitespace-pre-wrap">
          전화 상담이 필요하신가요? <br />
          무너와 함께 시나리오도 만들 수 있어요.
        </div>
      </div>
      <div className="flex gap-[5px] py-[9px]">
        <CallButton />
        <Link
          href="/scenario/pre"
          className="focus:bg-primary-100 body2 shadow-bubble flex h-[35px] max-w-[105px] cursor-pointer rounded-[20px] bg-white px-[14px] py-[8px] break-words whitespace-pre-wrap"
        >
          시나리오 생성
        </Link>
      </div>
    </>
  );
}
