import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import { cn } from '@/utils/cn';

const ScenarioResultPage = () => {
  return (
    <>
      <Header />
      <div
        className={cn(
          'mt-[34px] flex w-full flex-col items-center gap-[34px] px-[25px] pb-[80px]',
        )}
      >
        <div className={cn('script-body-16 flex w-full flex-col items-center')}>
          <span>무너가 시나리오를 만들었어요.</span>
          <br />
          <span>전화 상담 연결 후,</span>
          <span>시나리오대로 상담을 진행해보아요!</span>
        </div>
        <div className={cn('flex gap-2')}>
          <Badge type="blue">요금제 변경</Badge>
          <Badge type="blue">요금 과다 부여</Badge>
          <Badge type="blue">요금제 추천</Badge>
        </div>
        <div className={cn('flex flex-col items-center gap-[24px]')}>
          <span className="script-body-14">
            통화 내용을 녹음하면 무너가 요약해드려요
          </span>
          <span className="heading4">
            <span className={cn('text-[var(--color-uplus)]')}>LG U+</span>{' '}
            고객센터: 1544-0010
          </span>
        </div>
        <div className={cn('flex h-100 w-full flex-col border-t border-b')}>
          {/* 시나리오 내용 */}
        </div>
        <div
          className={cn(
            'r flex w-full flex-col items-center gap-[50px] px-[18px] pt-[20px]',
          )}
        >
          <span className="title1 text-center">
            통화가 종료되었다면 <br />
            녹음 파일을 업로드해 주세요.
          </span>
          <div
            className={cn(
              'flex w-full flex-col items-center gap-[25px] rounded-[10px] border border-dashed bg-gray-200 py-[30px]',
            )}
          >
            <Button className="bg-white" variant="outline" size="half">
              파일 업로드
            </Button>
            <span className="body3">최대 00MB, mp3, wav 파일 지원</span>
          </div>
          <span className="script-body-16">녹음 파일이 없어요ㅠㅠ</span>
        </div>
      </div>
    </>
  );
};

export default ScenarioResultPage;
