import Button from '@/components/common/Button';
import { cn } from '@/utils/cn';

interface UploadLayoutProps {
  onClick: () => void;
}

const UploadLayout = ({ onClick }: UploadLayoutProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-[50px] px-[18px] pt-[20px]',
      )}
    >
      <span className="title1 text-center">
        통화가 종료되었다면 <br />
        녹음 파일을 업로드해 주세요.
      </span>
      <div
        className={cn(
          'flex h-[150px] w-full flex-col items-center gap-[25px] rounded-[10px] border border-dashed bg-[var(--color-gray-200)] py-[30px]',
        )}
      >
        <Button
          onClick={onClick}
          className="bg-white"
          variant="outline"
          size="half"
        >
          파일 업로드
        </Button>
        <span className="body3">최대 00MB, mp3, wav 파일 지원</span>
      </div>
    </div>
  );
};

export default UploadLayout;
