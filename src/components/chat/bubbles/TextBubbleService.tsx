/**
 * TextBubbleService.tsx란?
 *  서비스(상대방)가 보낸 채팅 메시지를,
 *  주어진 데이터 고대로 보여주기만 하는 UI 컴포넌트 -> 안에 머 APi같은 기능 없음...보여주기만!
 */

"use client";
import { useState } from "react";

interface HighlightToken {
  text: string;
  highlight?: boolean;
}

// 🔹 Mock 데이터
const MOCK_ORIGINAL: HighlightToken[] = [
  { text: "지금 " },
  { text: "결합할인", highlight: true },
  { text: "에 대해 알아보고 계시군요 " },
  { text: "단어", highlight: true },
  { text: " 여러개" },
];

const MOCK_SIMPLIFIED: HighlightToken[] = [
  { text: "여러 상품을 함께 쓰면 " },
  { text: "요금을 깎아주는 제도", highlight: true },
  { text: "입니다." },
];

export function TextBubbleService() {
  const [showSimplified, setShowSimplified] = useState(false);

  return (
    <div className="flex justify-start gap-2 my-4">
      {/* 서비스 말풍선 */}
      <div
        className="
          max-w-[240px]
          px-[10px] py-[10px]
          bg-white
          text-black
          text-body2
          rounded-[2px_12px_12px_12px]
          shadow-[0px_2px_4px_rgba(0,0,0,0.1)]
          whitespace-pre-wrap
          break-words
        "
      >
        {/* 원본 텍스트 */}
        <div className="whitespace-pre-wrap">
          {MOCK_ORIGINAL.map((token, idx) => (
            <span
              key={idx}
              className={
                token.highlight
                  ? `
                    inline-block
                    px-[3px] py-[3px]
                    rounded-[3px]
                    bg-primary-200
                    cursor-pointer
                  `
                  : ""
              }
            >
              {token.text}
            </span>
          ))}
        </div>

        {/* 쉽게 번역된 텍스트 */}
        {showSimplified && (
          <>
            <div className="border-t border-border-300 my-3" />
            <div className="text-border-400 whitespace-pre-wrap">
              {MOCK_SIMPLIFIED.map((token, idx) => (
                <span
                  key={idx}
                  className={
                    token.highlight
                      ? `
                        inline-block
                        px-[3px] py-[3px]
                        rounded-[3px]
                        bg-primary-200
                      `
                      : ""
                  }
                >
                  {token.text}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 요약/번역 토글 아이콘 */}
      <button
        onClick={() => setShowSimplified((prev) => !prev)}
        className="
          shrink-0
          w-7 h-7
          flex items-center justify-center
          rounded-full
          bg-border-300
          hover:bg-border-400
          cursor-pointer
        "
        aria-label="요약 보기"
      >
        ⟳
      </button>
    </div>
  );
}