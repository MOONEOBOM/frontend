'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Badge from '../common/Badge';
import { TextBubbleService } from '../TextBubble/TextBubbleService';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import SendIcon from '@/assets/icon/send.svg';
import { useChat } from '@/lib/tanstack/mutation/chat.mutation';
import Header from '../common/Header';
import TextBubbleCalling from '../TextBubble/TextBubbleCalling';
import { ChatMessage } from '@/models/summary';
import { cn } from '@/utils/cn';
import DotLoading from '../common/DotLoading';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Message =
  | { role: 'call' }
  | { role: 'user'; text: string }
  | { role: 'service'; normal: string; easy: string };

const ChatbotPage = () => {
  const [text, setText] = useState('');
  const { mutate, isPending } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [messages, isPending]);

  const bubbleVariants = {
    initial: { opacity: 0, y: 15, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.3, ease: 'easeOut' },
  };

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

  const handleAddCallButton = async () => {
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: '전화 상담 연결하기' },
    ]);
    await delay(500);
    setMessages((prev) => [...prev, { role: 'call' }]);
  };

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
      <Header type="chat" conversation={conversation} />

      <div className="flex flex-col gap-4 px-[20px] pt-[20px] pb-[100px]">
        <AnimatePresence mode="popLayout">
          {messages.map((msg, index) => (
            <motion.div
              key={`${msg.role}-${index}`}
              initial="initial"
              animate="animate"
              variants={bubbleVariants}
              layout
            >
              {msg.role === 'user' && <TextBubbleUser text={msg.text} />}
              {msg.role === 'service' && (
                <TextBubbleService normal={msg.normal} easy={msg.easy} />
              )}
              {msg.role === 'call' && <TextBubbleCalling />}
            </motion.div>
          ))}
        </AnimatePresence>

        {isPending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-2 text-sm text-gray-800"
          >
            <DotLoading />
          </motion.div>
        )}

        {/* 4. 스크롤 위치를 잡기 위한 빈 div 생성 */}
        <div ref={scrollRef} />
      </div>

      {/* 하단 입력바 영역 */}
      <div className="fixed bottom-0 w-full max-w-[390px] bg-gray-100 pb-[env(safe-area-inset-bottom)]">
        <div className="no-scrollbar mx-[12px] mb-[10px] flex gap-[5px] overflow-x-auto">
          <Badge
            color="blue"
            onClick={handleAddCallButton}
            className="cursor-pointer whitespace-nowrap"
            outline
          >
            전화 상담 연결하기
          </Badge>
          <Badge
            color="primary"
            onClick={() => sendMessage('요금제 추천')}
            className="cursor-pointer whitespace-nowrap"
          >
            요금제 추천
          </Badge>
          <Badge
            color="primary"
            onClick={() => sendMessage('해외 로밍 가입')}
            className="cursor-pointer whitespace-nowrap"
          >
            해외 로밍 가입
          </Badge>
        </div>

        <div className="flex h-[60px] w-full items-center justify-between bg-white px-[20px]">
          <input
            type="text"
            className="body1 flex-1 outline-none placeholder:text-gray-300"
            placeholder="상담 내용을 입력하세요."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isPending}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                handleSend();
              }
            }}
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={isPending || !text.trim()}
            className={cn(
              'ml-2 transition-opacity',
              isPending || !text.trim() ? 'opacity-30' : 'opacity-100',
            )}
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
