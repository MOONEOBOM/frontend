import Button from '../common/Button';
import Header from '../common/Header';

import script from '@/data/스크립트2.json';
import { TextBubbleScenario } from '../TextBubble/TextBubbleScenario';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';

const CallDetailPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header type="back" />
      <div className="flex w-[340px] flex-col">
        {script.map((item) => {
          return (
            <div key={item.message} className="w-full">
              {item.speaker === '상담사' && (
                <TextBubbleScenario text={item.message} />
              )}
              {item.speaker === '고객' && (
                <TextBubbleUser text={item.message} />
              )}
            </div>
          );
        })}
      </div>
      <Button
        className="bg-primary sticky bottom-[30px]"
        size="full"
        variant="solid"
      >
        요약하기
      </Button>
    </div>
  );
};

export default CallDetailPage;
