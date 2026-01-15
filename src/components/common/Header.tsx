import LeftChevron from '@/assets/icon/chevron_left.svg?react';

const Header = ({ type = 'default' }: { type?: 'default' | 'chat' }) => {
  return (
    <div className="flex items-center justify-between px-[20px] h-[62px] w-full">
      {type == 'chat' ? (
        <>
          <div />
          <div
            className="body2 text-red"
            onClick={() => {
              // TODO: 상담 요약 API 요청 및 페이지 이동
            }}
          >
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
