import Button from '../common/Button';

type ButtonType = 'white' | 'primary';

interface BoardingProps {
  type: ButtonType;
  title: string;
  text: string;
  onNext: () => void;
}
export default function BottomBoard({
  type,
  title,
  text,
  onNext,
}: BoardingProps) {
  return (
    <div className="fixed bottom-0 mb-[60px] flex flex-col items-center justify-center">
      <div className="body1">{title}</div>
      <div className="body2 mt-[4px] text-gray-800">{text}</div>
      <div className="mt-[45px]">
        {type === 'white' ? (
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
            className="primary"
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
