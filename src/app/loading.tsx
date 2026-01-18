import './globals.css';
import MoonoSummary from '@/assets/icon/moono_summary.svg?react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-[255px]">
      
      {/* 무너 로딩 이미지 */}
      <div className="mb-[45px] flex justify-center">
        <MoonoSummary
          width={170}
          height={135}
          aria-hidden="true"
        />
      </div>
      
      {/* 로딩 안내 텍스트 */}
      <div className="flex justify-center w-full px-[82px]">
        <p className="script-title whitespace-nowrap">
          무너가 열심히 요약하고 있어요
        </p>
      </div>
    </div>
  );
}