import { Variants, motion } from 'framer-motion';

interface TextBubbleUserProps {
  text: string;
  itemVariants?: Variants;
}

export function TextBubbleUser({ text, itemVariants }: TextBubbleUserProps) {
  const displayText = text;

  return (
    <motion.div variants={itemVariants} className="my-5 flex justify-end gap-2">
      <div className="bg-primary body2 shadow-bubble max-w-[190px] rounded-[12px_2px_12px_12px] px-[10px] py-[10px] break-words whitespace-pre-wrap text-black">
        {text}
      </div>
    </motion.div>
  );
}
