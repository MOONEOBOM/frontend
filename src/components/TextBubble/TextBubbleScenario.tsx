'use client';
import MooneoIcon from '@/assets/moono/moono_profile.svg?react';
import { useOnboardingStore } from '@/store/useOnboarding';
import { cn } from '@/utils/cn';
import { Variants, motion } from 'framer-motion';

interface TextBubbleScenarioProps {
  text?: string;
  itemVariants?: Variants;
}

export function TextBubbleScenario({
  text,
  itemVariants,
}: TextBubbleScenarioProps) {
  const { isOnboarding } = useOnboardingStore();
  return (
    <motion.div variants={itemVariants} className="flex w-full justify-start">
      <div
        className={cn(
          'flex items-start gap-[5px]',
          isOnboarding ? 'my-0' : 'my-4',
        )}
      >
        {/* 프로필 무너 아이콘 */}
        <div
          className="flex flex-shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white px-[8px] py-[6px]"
          aria-label="Mooneo 프로필"
        >
          <MooneoIcon className="h-[36px] w-[32px] translate-x-[0.5px]" />
        </div>
        {/* 말풍선 */}
        <div className="body2 shadow-bubble mt-[20px] max-w-[240px] rounded-[2px_12px_12px_12px] bg-gray-100 px-[10px] py-[10px] break-words whitespace-pre-wrap">
          {text}
        </div>
      </div>
    </motion.div>
  );
}
