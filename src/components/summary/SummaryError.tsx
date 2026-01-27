// src/components/summary/SummaryError.tsx
export const SummaryError = ({ reset }: { reset: () => void }) => {
  return (
    <div className="flex w-full min-h-[400px] flex-col items-center justify-center py-10">
      <p className="text-gray-400 mb-6 script-title text-center">
        요약 데이터를 불러오지 못했어요... <br />
        잠시 후 다시 시도해주세요!
      </p>
      <button 
        onClick={reset}
        className="px-6 py-2 bg-primary text-gray-black script-body-16 rounded-lg active:scale-95 transition-transform"
      >
        재요청
      </button>
    </div>
  );
};