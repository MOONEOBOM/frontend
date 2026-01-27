// src/components/summary/SummaryLoading.tsx
export const SummaryLoading = () => {
  return (
    <div className="flex w-full min-h-[400px] flex-col items-center justify-center py-20">
      <div className="animate-pulse gap-4">
        <p className="text-gray-400 script-body-16">요약 내용을 정리하고 있어요...</p>
      </div>
    </div>
  );
};