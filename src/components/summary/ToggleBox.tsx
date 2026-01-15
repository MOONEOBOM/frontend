import LeftChevron from '@/assets/icon/chevron_left.svg?react';
import BottomChevron from '@/assets/icon/chevron_bottom.svg?react';
import { useState } from 'react';
import LinkButton from './LinkButton';

const ToggleBox = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-white w-[315px] rounded-[10px] shadow-[0_0_3.4px_0_rgba(0,0,0,0.25)]">
      <div className="h-[50px] p-[10px] flex items-center justify-between heading4">
        {children}
        <button
          type="button"
          className="cursor-pointer bg-transparent border-none p-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <BottomChevron /> : <LeftChevron />}
        </button>
      </div>

      {isOpen ? (
        <div className="flex flex-col gap-[10px] p-[10px] pt-0">
          <div className="h-[1px] w-full bg-gray-300" />
          {/* TODO: 요약 내용에 따라 map하도록 수정 */}
          <LinkButton type="solid" onClick={() => {}}>
            로밍 해지하기
          </LinkButton>
          <LinkButton type="outline" onClick={() => {}}>
            자세히 보기
          </LinkButton>
        </div>
      ) : null}
    </div>
  );
};

export default ToggleBox;
