/**
 * TextBubbleService.tsx란?
 *  서비스(상대방)가 보낸 채팅 메시지를,
 *  주어진 데이터 고대로 보여주기만 하는 UI 컴포넌트
 */

"use client";

import { useState } from "react";
import TranslateIcon from "@/assets/icon/generate.svg?react";

const MOCK_ORIGINAL = `지금 <span class="highlight">결합할인</span>에 대해 알아보고 계시군요
<span class="highlight">단어</span> 여러개
`;

const MOCK_SIMPLIFIED = `여러 상품을 함께 쓰면
<span class="highlight">요금을 깎아주는 제도</span>입니다.
`;

export function TextBubbleService() {
  const [showSimplified, setShowSimplified] = useState(false);

  return (
    <>
      <style>{`
        .highlight {
          display: inline-block;
          padding: 3px;
          border-radius: 3px;
          background-color: var(--color-primary-200);
        }
      `}</style>

      <div className="flex justify-start my-4">
        {/* 서비스 말풍선 */}
        <div
          className="
            max-w-[240px]
            px-[10px] py-[10px]
            bg-white
            body2
            rounded-[2px_12px_12px_12px]
            shadow-[0px_2px_4px_rgba(0,0,0,0.1)]
            whitespace-pre-wrap
            break-words
          "
        >
          <div
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: MOCK_ORIGINAL }}
          />

          {showSimplified && (
            <>
              <div className="border-t border-gray-300 my-3" />
              <div
                className="text-gray-400 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: MOCK_SIMPLIFIED }}
              />
            </>
          )}
        </div>

        {/* 번역 버튼 */}
        <button
          onClick={() => setShowSimplified((prev) => !prev)}
          className="
            ml-[10px]
            mt-[10px]
            w-[20px] h-[20px]
            flex items-center justify-center
            rounded-full
            bg-gray-300
            cursor-pointer
            flex-shrink-0
          "
        >
          <TranslateIcon className="w-[10px] h-[10px]" />
        </button>
      </div>
    </>
  );
}

