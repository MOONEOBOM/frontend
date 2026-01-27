import Chevron from '@/assets/icon/chevron_right.svg?react';

const Box = ({
  date,
  text,
  isNew = false,
}: {
  date: string;
  text: string;
  isNew?: boolean;
}) => {
  return (
    <div className="shadow-box flex h-[62px] w-[315px] cursor-pointer items-center justify-between rounded-[10px] px-[15px]">
      <div className="flex flex-col">
        <div className="body3 flex items-center gap-[7px]">
          {isNew && (
            <div className="bg-uplus text-w-700 rounded-[2px] px-[6px] text-white">
              new!
            </div>
          )}
          {date}
        </div>
        <p className="body2">{text}</p>
      </div>
      <Chevron />
    </div>
  );
};

export default Box;
