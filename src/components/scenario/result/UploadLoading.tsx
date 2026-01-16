import { cn } from '@/utils/cn';
import Spinner from './Spinner';

const UploadLoading = () => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-[50px] px-[18px] pt-[20px]',
      )}
    >
      <span className="title1 text-center">
        통화내용을 업로드중입니다. <br />
        잠시만 기달려주세요.
      </span>
      <div
        className={cn(
          'flex h-[150px] w-full flex-col items-center justify-center rounded-[10px] border border-dashed bg-[var(--color-gray-200)] py-[30px]',
        )}
      >
        <Spinner size="md" />
      </div>
    </div>
  );
};

export default UploadLoading;
