import MoonoSummary from '@/assets/moono/moono_summary.svg?react';

const CallLoading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white pt-[255px]">
      <div className="mb-[45px] flex animate-bounce justify-center">
        <MoonoSummary width={170} height={135} aria-hidden="true" />
      </div>

      <div className="flex w-full flex-col items-center px-[82px]">
        <p className="script-title flex items-center whitespace-nowrap">
          무너가 통화 내역을 가져오고 있어요
          <span className="ml-1 inline-flex w-[24px]">
            <span className="animate-[bounce_1s_infinite_0ms]">.</span>
            <span className="animate-[bounce_1s_infinite_200ms]">.</span>
            <span className="animate-[bounce_1s_infinite_400ms]">.</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CallLoading;
