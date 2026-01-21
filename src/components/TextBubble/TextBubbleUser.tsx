interface TextBubbleUserProps {
  text?: string; // 임시로 선택사항으로 바꿈
}

const MOCK_TEXT = '해외 다녀왔는데 요금이 너무 많이 나왔어요';

export function TextBubbleUser({ text }: TextBubbleUserProps) {
  const displayText = text ?? MOCK_TEXT;
  return (
    <div className="my-5 flex justify-end gap-2">
      <div className="bg-primary body2 shadow-bubble max-w-[190px] rounded-[12px_2px_12px_12px] px-[10px] py-[10px] break-words whitespace-pre-wrap text-black">
        {displayText}
      </div>
    </div>
  );
}
