interface TextBubbleUserProps {
  text?: string;  // 임시로 선택사항으로 바꿈
}

const MOCK_TEXT = "해외 다녀왔는데 요금이 너무 많이 나왔어요";

export function TextBubbleUser({ text }: TextBubbleUserProps) {
  const displayText = text ?? MOCK_TEXT;
  return (
    <div className="flex justify-end gap-2 my-5">
      <div
        className="
          max-w-[190px]
          px-[10px] py-[10px]
          bg-primary
          text-black
          body2
          rounded-[12px_2px_12px_12px]
          shadow-[0px_2px_4px_rgba(0,0,0,0.1)]
          whitespace-pre-wrap
          break-words
        "
        >
        {displayText}
      </div>
    </div>
  );
}
