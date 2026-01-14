import LeftChervon from '@/assets/icon/chervon_left.svg';

const ToggleBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between heading4 w-[315px] h-[50px] p-[10px] rounded-[10px] shadow-[0_0_3.4px_0_rgba(0,0,0,0.25)]">
      {children}
      <LeftChervon />
    </div>
  );
};

export default ToggleBox;
