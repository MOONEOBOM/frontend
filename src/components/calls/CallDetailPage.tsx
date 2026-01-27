'use client';
import Button from '../common/Button';
import Header from '../common/Header';

import { TextBubbleScenario } from '../TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import { useCallMessages } from '@/lib/tanstack/query/calls.query';
import { useParams, useRouter } from 'next/navigation';
import { SummaryRequest } from '@/models/summary';
import { CallMessagesResponse } from '@/models/calls';
import { useSummaryMutation } from '@/lib/tanstack/mutation/summary.mutation';
import { useToastHook } from '@/hooks/useToastHook';

function toSummaryRequest(
  messages: CallMessagesResponse[] | undefined,
): SummaryRequest {
  if (messages === undefined) {
    return { conversation: [] };
  }
  return {
    conversation: messages.map(({ role, message }) => ({
      role,
      message,
    })),
  };
}

const CallDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data: call } = useCallMessages(Number(id));
  const { mutate: summary } = useSummaryMutation();
  const { toast } = useToastHook();

  return (
    <div className="flex flex-col items-center">
      <Header type="back" />
      <div className="mb-[50px] flex w-[340px] flex-col">
        {call?.map((item) => {
          return (
            <div key={item.seq} className="w-full">
              {item.role === 'agent' && (
                <TextBubbleScenario text={item.message} />
              )}
              {item.role === 'user' && <TextBubbleUser text={item.message} />}
            </div>
          );
        })}
      </div>
      <Button
        className="bg-primary sticky bottom-[30px]"
        size="full"
        variant="solid"
        onClick={() => {
          summary(toSummaryRequest(call), {
            onSuccess: (summaryId) => {
              router.replace(`/summary?id=${summaryId.data.data}`);
            },
            onError: () => {
              toast('negative', '요약 생성 중 오류가 발생했습니다');
            },
          });
        }}
      >
        요약하기
      </Button>
    </div>
  );
};

export default CallDetailPage;
