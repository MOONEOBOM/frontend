import Header from '@/components/common/Header';
import LinkButton from '@/components/summary/LinkButton';
import FlipCard from '@/components/history/FlipCard';
import BottomSheet from './BottomSheet';
import { Suspense } from 'react';

const TODO = ['로밍 해지하기', 'eSIM에 대해 알아보기'];

const SummaryPage = () => {
  return (
    <>
      <Suspense fallback={null}>
        <BottomSheet />
      </Suspense>
      <div className="flex flex-col items-center">
        <Header type="back" />

        <div className="flex flex-col gap-[20px]">
          <p className="heading2 w-[315px]">박예진님이 해야할 일은?</p>
          <div className="flex flex-col gap-[10px]">
            {TODO.map((todo) => {
              return (
                <LinkButton key={todo} href="" type="outline" isFull>
                  {todo}
                </LinkButton>
              );
            })}
          </div>
        </div>

        <FlipCard />
        <p className="script-body-16">카드를 터치해보세요!</p>
      </div>
    </>
  );
};

export default SummaryPage;
