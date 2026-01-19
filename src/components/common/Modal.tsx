'use client';
import { cn } from '@/utils/cn';
type ModalType = 'select' | 'info';

interface ModalProps {
  isOpen: boolean;
  type: ModalType;
  image?: React.ReactNode;
  onOverlayClick: (event: boolean) => void; // 오버레이 클릭 시
  onBack: () => void; // 돌아가기 버튼
  onClose?: () => void; // 종료 버튼
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  type,
  image,
  onBack,
  onClose,
  children,
  onOverlayClick,
}: ModalProps) {
  if (!isOpen) return null;
  const isInfoModal = type === 'info';
  const buttonSize = isInfoModal
    ? 'rounded-xl h-[35px] w-[139px]'
    : 'rounded-xl h-[35px] w-[90px]';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => onOverlayClick(false)}
    >
      <div
        className={cn(
          'body2 relative flex w-[230px] flex-col items-center justify-between rounded-2xl bg-white px-[18px] py-[16px]',
        )}
      >
        {isInfoModal && image && (
          <div className="shrink-0 pb-[20px]">{image}</div>
        )}
        <div className="flex flex-1 items-center justify-center text-center">
          <div className="pb-[20px] whitespace-pre-wrap">{children}</div>
        </div>
        <div className="flex w-full justify-center gap-[11px]">
          <button
            className={cn('bg-gray-100', buttonSize)}
            onClick={(e) => {
              e.stopPropagation(); //클릭 이벤트가 부모로 전달되는 것 방지
              onBack();
            }}
          >
            {isInfoModal ? '홈으로 돌아가기' : '돌아가기'}
          </button>
          {!isInfoModal && (
            <button
              className={cn('bg-primary', buttonSize)}
              onClick={(e) => {
                e.stopPropagation();
                onClose?.();
              }}
            >
              종료
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
