'use client';
import Box from '@/components/common/Box';
import { useSummaryRecent } from '@/lib/tanstack/query/history.query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RecentHistory = () => {
  const { data: summary } = useSummaryRecent();
  const router = useRouter();

  function handleHistory() {
    router.push('/history');
  }
  return (
    <>
      <div className="mt-[58px] mb-[19px] flex w-full items-center justify-between px-[37.5px]">
        <div className="heading2">최근 상담 내역</div>
        <button
          className="body3 flex cursor-pointer items-center gap-[5px]"
          onClick={handleHistory}
        >
          전체보기 &gt;
        </button>
      </div>
      <div className="mb-[82px] flex flex-col gap-[15px]">
        {summary && summary.length > 0 ? (
          summary.map((item) => (
            <Box key={item.id}>
              <Link href={`/history?selected=${item.id}`}>{item.title}</Link>
            </Box>
          ))
        ) : (
          <div className="shadow-box flex h-[115px] w-[315px] items-center justify-center rounded-xl text-center">
            <span className="script-body-14 text-gray-800">
              아직 진행한 상담이 없어요 T_T
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default RecentHistory;
