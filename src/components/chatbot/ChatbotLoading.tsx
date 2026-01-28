// src/components/common/ChatbotLoading.tsx
import MoonoSummary from '@/assets/moono/moono_summary.svg?react';

export const ChatbotLoading = () => {
  const dots = ['.', '.', '.'];

  return (
    <div className="fixed inset-0 z-[999] flex min-h-screen flex-col items-center bg-white pt-[255px]">
      {/* 1. 무너 로딩 이미지: animate-bounce 효과 추가 */}
      <div className="mb-[45px] flex animate-bounce justify-center">
        <MoonoSummary width={170} height={135} aria-hidden="true" />
      </div>

      {/* 2. 로딩 안내 텍스트: 점 세 개 애니메이션 추가 */}
      <div className="flex w-full justify-center px-[82px]">
        <p className="script-title flex items-center whitespace-nowrap">
          무너가 열심히 요약하고 있어요
          <span className="ml-1 flex w-[24px]">
            {dots.map((dot, index) => (
              <span
                key={index}
                className="animate-fast-wave inline-block"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {dot}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
};