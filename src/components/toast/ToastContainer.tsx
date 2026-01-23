'use client';

import { useToastStore } from "@/store/useToastStore";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

export default function ToastContainer() {

  const { toast, isOpen } = useToastStore();
  
  const bgStyles = {
    negative: 'bg-[#E54050]',  // 나쁨 (빨강)
    normal: 'bg-[#AC7F5E]',  // 일반 (갈색)
    positive: 'bg-[#12CE66]',  // 좋음 (초록)
  };

  return (
    <AnimatePresence>
      {isOpen && toast && (
        <div className="fixed bottom-10 left-1/2 z-[9999] -translate-x-1/2 pointer-events-none">
          <motion.div
            role="status" aria-live="polite" aria-atomic="true"
            // 1) 나타날 때: 아래(y: 20)에서 위(y: 0)로 올라오며 생성
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // 2) 사라질 때: 아래(y: 20)로 내려가며 소멸
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            
            className={cn("flex items-center justify-center shadow-lg w-[330px] h-[35px] rounded-[101px]",
              bgStyles[toast.type]
            )}
          >
            <p className={cn("text-white", "body1")}>
              {toast.content}
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}