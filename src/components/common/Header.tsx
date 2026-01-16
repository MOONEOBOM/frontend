import LeftChevron from '@/assets/icon/chevron_left.svg?react';

const Header = ({
  type = 'default',
  onClose,
}: {
  type?: 'default' | 'chat';
  onClose: () => void;
}) => {
  return (
    <div className="flex h-[62px] w-full items-center justify-between px-[20px]">
      {type == 'chat' ? (
        <>
          <div />
          <div className="body2 text-red" onClick={onClose}>
            상담 종료
          </div>
        </>
      ) : (
        <LeftChevron />
      )}
    </div>
  );
};

export default Header;
