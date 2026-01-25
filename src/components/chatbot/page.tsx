'use client';

import Badge from '../common/Badge';
import { TextBubbleService } from '../TextBubble/TextBubbleService';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import SendIcon from '@/assets/icon/send.svg';
import { useChat } from '@/lib/tanstack/mutation/chat.mutation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../common/Header';
import Spinner from '../scenario/result/Spinner';
import TextBubbleCalling from '../TextBubble/TextBubbleCalling';
import { ChatMessage } from '@/models/summary';

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
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const handleSend = () => sendMessage(text);

  const handleAddCallButton = () => {
    setMessages((prev) => [...prev, { role: 'call' }]);
  };

  // 요약 API용 conversation 생성 -> 챗봇 ~ 사용자 사이의 대화
  const conversation: ChatMessage[] = messages
    .filter((msg) => msg.role === 'user' || msg.role === 'service')
    .map((msg) => {
      if (msg.role === 'user') {
        return { role: 'user', message: msg.text };
      }
      return { role: 'agent', message: msg.normal };
    });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 헤더(Header.tsx)에 conversation 전달하는거 type 뒤에 추가함 */}
      <Header type="chat" conversation={conversation} />
      <div className="px-[20px] pb-[120px]">
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
            return <TextBubbleCalling key={index} />;
          }
          return null;
        })}
        {isPending && (
          <div className="ml-2 text-sm text-gray-800">
            <Spinner />
          </div>
        )}
      </div>

      <div className="fixed bottom-0">

        <div className="mx-[12px] mb-[10px] flex gap-[5px]">
          <Badge color="blue" onClick={handleAddCallButton}>
            전화 상담 연결하기
          </Badge>
          <Badge color="primary" onClick={() => sendMessage('요금제 추천')}>
            요금제 추천
          </Badge>
          <Badge color="primary" onClick={() => sendMessage('해외 로밍 가입')}>
            해외 로밍 가입
          </Badge>
        </div>

        <div className="flex h-[45px] w-[390px] items-center justify-between bg-white p-[12px]">
          <input
            type="text"
            className="body1 flex-1 outline-none placeholder:text-gray-300"
            placeholder="상담 내용을 입력하세요."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isPending} // 챗봇에게 입력한 값을 전송 중일 때, 입력 못하도록 추가함
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
