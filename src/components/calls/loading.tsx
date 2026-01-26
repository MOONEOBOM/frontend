import MoonoSummary from '@/assets/moono/moono_summary.svg?react';

const CallLoading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white pt-[255px]">
      {/* 무너 로딩 이미지 */}
      <div className="mb-[45px] flex justify-center">
        <MoonoSummary width={170} height={135} aria-hidden="true" />
      </div>

      {/* 로딩 안내 텍스트 */}
      <div className="flex w-full justify-center px-[82px]">
        <p className="script-title whitespace-nowrap">
          무너가 열심히 요약하고 있어요
        </p>
      </div>
    </div>
  );
};

export default CallLoading;
