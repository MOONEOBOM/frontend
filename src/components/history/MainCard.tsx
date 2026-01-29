const MainCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-focus bg-primary-bg border-box mt-[15px] flex h-[350px] w-[240px] flex-col items-center justify-center gap-[30px] rounded-[20px] border-2 border-gray-300 text-center">
      {children}
    </div>
  );
};

export default MainCard;
