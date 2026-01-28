'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Box from '@/components/calls/Box';
import Link from 'next/link';
import { useCallList } from '@/lib/tanstack/query/calls.query';
import CallListSkeleton from './CallListSkeleton';
import Restart from '@/assets/icon/restart.svg';

dayjs.locale('ko');

const CallList = () => {
  const { data: callList, isLoading, isError, refetch } = useCallList();

  if (isLoading) {
    return <CallListSkeleton />;
  }

  if (isError) {
    return (
      <div className="shadow-rest mt-10 flex flex-col items-center gap-3 rounded-[20px] border border-gray-300 bg-white p-4">
        <button onClick={() => refetch()}>
          <Restart className="text-primary h-6 w-6 cursor-pointer" />
        </button>
        <p className="body2">통화내역을 불러오지 못했어요</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[25px]">
      {callList?.map((c) => {
        return (
          <Link key={c.id} href={`/calls/${c.id}`}>
            <Box
              date={dayjs(c.startedAt).format('YYYY.MM.DD A h:mm')}
              text={c.previewText}
              isNew={c.id === 1}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default CallList;
