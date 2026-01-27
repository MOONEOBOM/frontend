// src/components/common/ChatbotLoading.tsx
import MoonoSummary from '@/assets/moono/moono_summary.svg?react';

export const ChatbotLoading = () => {
  return (
    <div className="fixed inset-0 z-[999] flex min-h-screen flex-col items-center bg-white pt-[255px]">
      <div className="mb-[45px] flex justify-center">
        <MoonoSummary width={170} height={135} aria-hidden="true" />
      </div>
      <div className="flex w-full justify-center px-[82px]">
        <p className="script-title whitespace-nowrap">무너가 열심히 요약하고 있어요</p>
      </div>
    </div>
  );
};