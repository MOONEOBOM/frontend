import LeftChevron from '@/assets/icon/chevron_left.svg?react';
type HeaderProps =
  | { type?: 'default'; onClickButton?: () => void }
  | { type: 'chat'; onClickButton: () => void };

const Header = ({ type = 'default', onClickButton }: HeaderProps) => {
  return (
    <div className="flex h-[62px] w-full items-center justify-between px-[20px]">
      {type == 'chat' ? (
        <>
          <div />
          <button className="body2 text-red" onClick={onClickButton}>
            상담 종료
          </button>
        </>
      ) : (
        <button type="button" aria-label="뒤로 가기" onClick={onClickButton}>
          {' '}
          <LeftChevron />
        </button>
      )}
    </div>
  );
};

export default Header;