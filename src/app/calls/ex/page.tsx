import Calling from '@/assets/icon/call.svg?react';
import Timer from '@/components/calls/Timer';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="ios-call-bg flex h-[100vh] w-full flex-col items-center justify-center text-white">
      <div className="flex h-[80vh] flex-col justify-between">
        <div className="flex flex-col gap-[10px]">
          <Timer />
          <p className="heading1 text-[30px]">U+ 고객센터</p>
        </div>
        <div className="flex flex-col items-center gap-[12px]">
          <Link
            href="/calls"
            className="bg-red flex h-[80px] w-[80px] items-center justify-center rounded-full"
          >
            <Calling />
          </Link>
          <p className="heading4">통화 종료</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
