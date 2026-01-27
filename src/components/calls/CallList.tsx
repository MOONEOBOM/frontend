'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Box from '@/components/calls/Box';
import Link from 'next/link';
import { useCallList } from '@/lib/tanstack/query/calls.query';

dayjs.locale('ko');

const CallList = () => {
  const { data: callList } = useCallList();

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
