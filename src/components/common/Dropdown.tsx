'use client';
import { useEffect, useRef, useState } from 'react';
import BottomChevron from '@/assets/icon/chevron_bottom.svg?react';

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

  const baseCls = [width, 'h-[40px]', 'body2'].join(' ');

  const triggerCls = [
    'w-full',
    'h-[40px]',
    'flex',
    'items-center',
    'justify-between',
    'p-[15px]',
    'rounded-[10px]',
    'bg-[var(--color-white)]',
    'border',
    'border-[var(--color-primary)]',
    'cursor-pointer',
  ].join(' ');
  return (
    <div ref={ref} className={`${baseCls} relative`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={triggerCls}
      >
        {selected?.label ?? placeholder} <BottomChevron />
      </button>
      {open && (
        <ul
          className={`absolute z-10  ${width} overflow-auto [&>li:first-child]:rounded-t-[10px] [&>li:first-child]:border-none [&>li:last-child]:rounded-b-[10px]`}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`bg-[var(--color-white)] cursor-pointer hover:bg-gray-100 flex items-center h-[40px] p-[15px] border-t border-[var(--color-primary)]`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
