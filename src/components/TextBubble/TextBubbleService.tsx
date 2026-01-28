'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Generate from '@/assets/icon/generate.svg?react';

interface TextBubbleServiceProps {
  normal: string;
  easy: string;
}

export function TextBubbleService({ normal, easy }: TextBubbleServiceProps) {
  const [showSimplified, setShowSimplified] = useState(false);

  return (
    <div className="my-4 flex items-start justify-start">
      {/* 서비스 말풍선 */}
      <motion.div
        layout
        className="body2 shadow-bubble max-w-[240px] rounded-[2px_12px_12px_12px] bg-white px-[10px] py-[10px] break-keep"
      >
        <motion.div layout className="whitespace-pre-wrap">
          {normal}
        </motion.div>

        <AnimatePresence>
          {showSimplified && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="my-3 border-t border-gray-300" />
              <div className="whitespace-pre-wrap text-gray-600">{easy}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <button
        onClick={() => setShowSimplified((prev) => !prev)}
        className="mt-[10px] ml-[10px] flex h-[20px] w-[20px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-300"
      >
        <Generate />
      </button>
    </div>
  );
}
