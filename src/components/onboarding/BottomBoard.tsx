import Button from '../common/Button';

interface BoardingProps {
  title: string;
  text: string;
  onNext: () => void;
  isLast: boolean;
}
export default function BottomBoard({
  title,
  text,
  onNext,
  isLast,
}: BoardingProps) {
  return (
    <div className="fixed bottom-0 mb-[60px] flex flex-col items-center justify-center">
      <div className="body1">{title}</div>
      <div className="body2 mt-[4px] text-gray-800">{text}</div>
      <div className="mt-[45px]">
        {!isLast ? (
          <Button
            onClick={onNext}
            className="white"
            size="full"
            variant="outline"
          >
            다음
          </Button>
        ) : (
          <Button
            onClick={onNext}
            className="bg-primary"
            size="full"
            variant="solid"
          >
            무너봄 시작하기
          </Button>
        )}
      </div>
    </div>
  );
}
