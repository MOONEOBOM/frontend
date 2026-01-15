import LeftChevron from '@/assets/icon/chevron_left.svg?react';

const Header = ({ type = 'default' }: { type?: 'default' | 'chat' }) => {
  return (
    <div className="flex items-center justify-between px-[20px] h-[62px] w-full">
      {type == 'chat' ? (
        <>
          <div />
          <div className="body2 text-red">상담 종료</div>
        </>
      ) : (
        <LeftChevron />
      )}
    </div>
  );
};

export default Header;
