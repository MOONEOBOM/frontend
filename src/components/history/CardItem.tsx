import Logo from '@/assets/icon/logo_small.svg?react';

interface CardItemProps {
  title: string;
  date: string;
  isSelected?: boolean;
}

const CardItem = ({ title, date, isSelected = false }: CardItemProps) => {
  return (
    <div className="bg-primary-bg shadow-rest flex h-[135px] w-[95px] flex-col items-center justify-center gap-[15px] rounded-[6px]">
      {/* <Logo width={25} /> */}
      <p className="caption1 w-[60px] text-center break-keep">{title}</p>
      <p className="caption2 text-gray-800">{date}</p>
    </div>
  );
};

export default CardItem;
