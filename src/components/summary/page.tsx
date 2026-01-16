import Header from '@/components/common/Header';
import Card from '@/components/summary/Card';
import LinkButton from '@/components/summary/LinkButton';

const TODO = ['로밍 해지하기', 'eSIM에 대해 알아보기'];

const SummaryPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header type="default" />

      <div className="flex flex-col gap-[20px]">
        <p className="heading2 w-[315px]">박예진님이 해야할 일은?</p>
        <div className="flex flex-col gap-[10px]">
          {TODO.map((todo, index) => {
            return (
              <LinkButton key={index} href="" type="outline" isFull>
                {todo}
              </LinkButton>
            );
          })}
        </div>
      </div>

      <Card />
      <p className="script-body-16">카드를 터치해보세요!</p>
    </div>
  );
};

export default SummaryPage;
