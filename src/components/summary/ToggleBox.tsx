import RightChevron from '@/assets/icon/chevron_right.svg?react';
import BottomChevron from '@/assets/icon/chevron_bottom.svg?react';
import { useState } from 'react';
import LinkButton from './LinkButton';
import Link from 'next/link';

interface ToggleBoxProps {
  children: React.ReactNode;
  isHome?: boolean;
  href?: string;
}

const ToggleBox = ({
  children,
  isHome = false,
  href = '#',
}: ToggleBoxProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const content = (
    <div className="block w-[315px] overflow-hidden rounded-[10px] bg-white shadow-[0_0_3.4px_0_rgba(0,0,0,0.25)]">
      <div
        className={`heading4 flex h-[50px] items-center justify-between p-[10px] ${!isHome ? 'cursor-pointer' : ''}`}
        {...(!isHome && { onClick: () => setIsOpen(!isOpen) })}
      >
        {children}
        {isOpen ? <BottomChevron /> : <RightChevron />}
      </div>

      {!isHome && isOpen && (
        <div className="flex flex-col gap-[10px] p-[10px] pt-0">
          <div className="h-[1px] w-full bg-gray-300" />
          <LinkButton type="solid" href="#">
            로밍 해지하기
          </LinkButton>
          <LinkButton type="outline" href="#">
            자세히 보기
          </LinkButton>
        </div>
      )}
    </div>
  );

  if (isHome) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default ToggleBox;
