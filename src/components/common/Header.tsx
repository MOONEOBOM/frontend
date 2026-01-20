import BackButton from '@/components/common/BackButton';

const Header = ({
  type = 'back',
}: {
  type: 'back' | 'home' | 'chat' | 'scenario';
}) => {
  return (
    <div className="flex h-[62px] w-full items-center justify-between px-[20px]">
      <BackButton type={type} />

      {type == 'chat' ? (
        <button className="body2 text-red" onClick={() => {}}>
          상담 종료
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Header;
