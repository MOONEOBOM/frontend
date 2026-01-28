// src/components/summary/SummaryError.tsx
export const SummaryError = ({ reset }: { reset: () => void }) => {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center py-10">
      <p className="script-title mb-6 text-center text-gray-400">
        요약 데이터를 불러오지 못했어요... <br />
        잠시 후 다시 시도해주세요!
      </p>
      <button
        onClick={reset}
        className="bg-primary text-gray-black script-body-16 cursor-pointer rounded-lg px-6 py-2 transition-transform active:scale-95"
      >
        재요청
      </button>
    </div>
  );
};
