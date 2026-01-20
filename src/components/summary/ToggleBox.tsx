import RightChevron from '@/assets/icon/chevron_right.svg?react';
import BottomChevron from '@/assets/icon/chevron_bottom.svg?react';
import { useState } from 'react';
import LinkButton from './LinkButton';

const ToggleBox = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-[315px] rounded-[10px] bg-white shadow-[0_0_3.4px_0_rgba(0,0,0,0.25)]">
      <button
        className="heading4 flex h-[50px] w-full cursor-pointer items-center justify-between p-[10px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        {isOpen ? <BottomChevron /> : <RightChevron />}
      </button>

      {isOpen ? (
        <div className="flex flex-col gap-[10px] p-[10px] pt-0">
          <div className="h-[1px] w-full bg-gray-300" />
          {/* TODO: 요약 내용에 따라 map하도록 수정 */}
          <LinkButton type="solid" href="#">
            로밍 해지하기
          </LinkButton>
          <LinkButton type="outline" href="#">
            자세히 보기
          </LinkButton>
        </div>
      ) : null}
    </div>
  );
};

export default ToggleBox;
