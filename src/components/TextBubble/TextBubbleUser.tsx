interface TextBubbleUserProps {
  text: string;
}

export function TextBubbleUser({ text }: TextBubbleUserProps) {
  const displayText = text;
  return (
    <div className="my-5 flex justify-end gap-2">
      <div className="bg-primary body2 shadow-bubble max-w-[190px] rounded-[12px_2px_12px_12px] px-[10px] py-[10px] break-words whitespace-pre-wrap text-black">
        {displayText}
      </div>
    </div>
  );
}
