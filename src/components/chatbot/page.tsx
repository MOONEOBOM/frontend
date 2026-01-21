'use client';
import Badge from '../common/Badge';
import { TextBubbleService } from '../TextBubble/TextBubbleService';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import SendIcon from '@/assets/icon/send.svg';
import ChatModal from './ChatModal';
import { useChat } from '@/lib/tanstack/mutation/chat.mutation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
type Message =
  | { role: 'call' }
  | { role: 'user'; text: string }
  | { role: 'service'; normal: string; easy: string };

const ChatbotPage = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const { mutate, isPending } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (sendMessage: string) => {
    if (!sendMessage.trim() || isPending) return;
    setMessages((prev) => [...prev, { role: 'user', text: sendMessage }]);
    if (sendMessage === text) setText('');
    mutate(sendMessage, {
      onSuccess: (res) => {
        if (res.data?.answer?.length > 0) {
          const returnAnswer = res.data.answer[0];
          setMessages((prev) => [
            ...prev,
            {
              role: 'service',
              normal: returnAnswer.normal,
              easy: returnAnswer.easy,
            },
          ]);
        }
      },
    });
  };

  const handleSend = () => sendMessage(text);

  const handleAddCallButton = () => {
    setMessages((prev) => [...prev, { role: 'call' }]);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="px-[20px] pb-[120px]">
        <div>
          <ChatModal />
        </div>
        {messages.map((msg, index) => {
          if (msg.role === 'user') {
            return <TextBubbleUser key={index} text={msg.text} />;
          }
          if (msg.role === 'service') {
            return (
              <TextBubbleService
                key={index}
                normal={msg.normal}
                easy={msg.easy}
              />
            );
          }
          if (msg.role === 'call') {
            return (
              <div key={index}>
                <div className="body2 shadow-bubble max-w-[240px] rounded-[2px_12px_12px_12px] bg-white px-[10px] py-[10px] break-words whitespace-pre-wrap">
                  <div className="whitespace-pre-wrap">
                    전화 상담이 필요하신가요? <br />
                    무너와 함께 시나리오도 만들 수 있어요.
                  </div>
                </div>
                <div className="py-[9px]">
                  <button className="body2 shadow-bubble mr-[5px] max-w-[105px] rounded-[20px] bg-white px-[14px] py-[8px] break-words whitespace-pre-wrap">
                    전화 상담
                  </button>
                  <button
                    onClick={() => {
                      router.push('/scenario/pre');
                    }}
                    className="body2 shadow-bubble max-w-[105px] rounded-[20px] bg-white px-[14px] py-[8px] break-words whitespace-pre-wrap"
                  >
                    시나리오 생성
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
        {isPending && <div className="ml-2 text-sm text-gray-400">...</div>}
      </div>
      <div className="fixed bottom-0">
        <div className="mx-[12px] mb-[10px] flex gap-[5px]">
          <Badge type="blue" onClick={handleAddCallButton}>
            전화 상담 연결하기
          </Badge>
          <Badge type="primary" onClick={() => sendMessage('요금제 추천')}>
            요금제 추천
          </Badge>
          <Badge type="primary" onClick={() => sendMessage('해외 로밍 가입')}>
            해외 로밍 가입
          </Badge>
        </div>
        <div className="flex h-[45px] w-[390px] items-center justify-between bg-white p-[12px]">
          <input
            type="text"
            className="body1 flex-1 outline-none placeholder:text-gray-400"
            placeholder="상담 내용을 입력하세요."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isPending} // 전송 중일 때 입력 막기
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={isPending || !text.trim()}
            className={isPending ? 'opacity-50' : 'opacity-100'}
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
