'use client';

import { cn } from '@/utils/cn';
type ModalType = 'select' | 'info';

interface ModalProps {
  isOpen: boolean;
  type?: ModalType;
  image?: React.ReactNode;
  onOverlayClick: (event: boolean) => void; // 오버레이 클릭 시
  onBack: () => void; // 돌아가기 버튼
  onActive?: () => void; // 종료 버튼
  activeText: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  type,
  image,
  onBack,
  onActive,
  children,
  activeText,
  onOverlayClick,
}: ModalProps) {
  if (!isOpen) return null;
  const isInfoModal = type === 'info';
  const buttonSize = isInfoModal
    ? 'rounded-xl h-[35px] w-[139px]'
    : 'rounded-xl h-[35px] w-[90px]';

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50',
      )}
      onClick={() => onOverlayClick(false)}
    >
      <div
        className={cn(
          'body2 relative flex w-[230px] flex-col items-center justify-between rounded-2xl bg-white px-[18px] py-[16px]',
        )}
      >
        {isInfoModal && image && (
          <div className={cn('shrink-0 pb-[20px]')}>{image}</div>
        )}
        <div
          className={cn('flex flex-1 items-center justify-center text-center')}
        >
          <div className={cn('pb-[20px] whitespace-pre-wrap')}>{children}</div>
        </div>
        <div className={cn('flex w-full justify-center gap-[11px]')}>
          <button
            className={cn('cursor-pointer bg-gray-100', buttonSize)}
            onClick={(e) => {
              e.stopPropagation(); //클릭 이벤트가 부모로 전달되는 것 방지
              onBack();
            }}
          >
            {isInfoModal ? '홈으로 돌아가기' : '돌아가기'}
          </button>
          {!isInfoModal && (
            <button
              className={cn('bg-primary cursor-pointer', buttonSize)}
              onClick={(e) => {
                e.stopPropagation();
                onActive?.();
              }}
            >
              {activeText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
