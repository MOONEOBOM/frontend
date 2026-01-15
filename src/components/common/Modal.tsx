'use client';
type ModalType = 'select' | 'info';

interface ModalProps {
  isOpen: boolean;
  type: ModalType;
  image?: React.ReactNode;
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
}: ModalProps) {
  if (!isOpen) return null;
  const isSelect = type === 'select';
  const buttonSize = isSelect
    ? 'rounded-xl h-[35px] w-[90px]'
    : 'rounded-xl h-[35px] w-[139px]';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={`relative w-[230px] rounded-2xl body2 bg-white px-[18px] py-[16px] flex flex-col items-center justify-between 
        ${isSelect ? 'h-[121px]' : 'h-[267px]'}`}
      >
        {!isSelect && image && (
          <div className="shrink-0 pb-[20px]">{image}</div>
        )}
        <div className="flex-1 flex items-center justify-center text-center">
          <h2 className="whitespace-pre-wrap pb-[20px]">{children}</h2>
        </div>
        <div className="flex w-full gap-[11px] justify-center">
          <button className={`bg-border-100  ${buttonSize}`} onClick={onBack}>
            {isSelect ? '돌아가기' : '홈으로 돌아가기'}
          </button>
          {isSelect && (
            <button
              className={` bg-primary-100  ${buttonSize}`}
              onClick={onClose}
            >
              종료
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
