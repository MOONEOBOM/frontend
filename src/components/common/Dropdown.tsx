'use client';
import { useEffect, useRef, useState } from 'react';
import BottomChevron from '@/assets/icon/chevron_bottom.svg?react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useOnboardingStore } from '@/store/useOnboarding';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  onChange: (value: string) => void;
  value: string | null;
  options: Option[];
  placeholder?: string;
  width?: string;
}

const Dropdown = ({
  onChange,
  value,
  options,
  placeholder = '이유를 선택하세요',
  width = 'w-[300px]',
}: DropdownProps) => {
  const { isOnboarding } = useOnboardingStore();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  // 바깥 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={cn(width, 'body2 relative h-[40px]')}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'border-primary flex h-[40px] w-full cursor-pointer items-center justify-between rounded-[10px] border bg-white p-[15px]',
        )}
      >
        {selected?.label ?? placeholder} <BottomChevron />
      </button>
      {(open || isOnboarding) && (
        <motion.ul
          className={cn(
            width,
            'no-scrollbar absolute z-10 max-h-[180px] overflow-auto [&>li:first-child]:rounded-t-[10px] [&>li:first-child]:border-none [&>li:last-child]:rounded-b-[10px]',
          )}
          initial={
            isOnboarding
              ? { opacity: 0, scaleY: 0, originY: 0 }
              : { opacity: 1 }
          }
          animate={isOnboarding ? { opacity: 1, scaleY: 1 } : { opacity: 1 }}
          transition={
            isOnboarding
              ? { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1 }
              : { duration: 0.1 } // 일반 오픈 시
          }
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={cn(
                'border-primary flex h-[40px] cursor-pointer items-center border-t bg-white p-[15px] hover:bg-gray-100',
              )}
            >
              {option.label}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};
export default Dropdown;
