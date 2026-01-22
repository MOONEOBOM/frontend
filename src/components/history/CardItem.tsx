import Logo from '@/assets/icon/logo_small.svg?react';
import { cn } from '@/utils/cn';

interface CardItemProps {
  title: string;
  date: string;
  isSelected?: boolean;
}

const CardItem = ({ title, date, isSelected = false }: CardItemProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-[15px] transition-all duration-300',

        isSelected
          ? 'bg-primary shadow-active h-[175px] w-[125px] rounded-[8px]'
          : 'bg-primary-bg shadow-rest h-[135px] w-[95px] rounded-[6px]',
      )}
    >
      {isSelected && <Logo width={25} className="flex-shrink-0" />}

      <p
        className={cn(
          'text-center break-keep',
          isSelected ? 'body3 w-[100px]' : 'caption1 w-[60px]',
        )}
      >
        {title}
      </p>

      <p className={cn('text-gray-800', isSelected ? 'caption1' : 'caption2')}>
        {date}
      </p>
    </div>
  );
};

export default CardItem;
