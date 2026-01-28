import MoonoSummary from '@/assets/moono/moono_summary.svg?react';

const CallDetailLoading = () => {
  const dots = ['.', '.', '.'];

  return (
    <div className="flex min-h-screen flex-col items-center bg-white pt-[255px]">
      {/* 무너 로딩 이미지 */}
      <div className="mb-[45px] flex animate-bounce justify-center">
        <MoonoSummary width={170} height={135} aria-hidden="true" />
      </div>

      {/* 로딩 안내 텍스트 */}
      <div className="flex w-full justify-center px-[82px]">
        <p className="script-title flex items-center whitespace-nowrap">
          무너가 통화내역을 가져오고 있어요
          {/* 점 세 개만 따로 파도타기 애니메이션 적용 */}
          <span className="ml-1 flex w-[24px]">
            {dots.map((dot, index) => (
              <span
                key={index}
                className="animate-fast-wave inline-block"
                style={{ animationDelay: `${index * 0.15}s` }} // 점 사이의 간격을 0.15초로 설정
              >
                {dot}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CallDetailLoading;