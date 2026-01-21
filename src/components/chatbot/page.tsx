import Badge from '../common/Badge';
import { TextBubbleService } from '../TextBubble/TextBubbleService';
import { TextBubbleUser } from '../TextBubble/TextBubbleUser';
import SendIcon from '@/assets/icon/send.svg';
import ChatModal from './ChatModal';

const ChatbotPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="px-[20px]">
        <div>
          <ChatModal />
        </div>

        <TextBubbleUser />
        <TextBubbleService />
        <TextBubbleUser />
        <TextBubbleService />
      </div>
      <div className="fixed bottom-0">
        <div className="mx-[12px] mb-[10px]">
          <Badge type="blue">대학생 요금제 추천해줘</Badge>
        </div>
        <div className="flex h-[45px] w-[390px] items-center justify-between bg-white p-[12px]">
          <input
            type="text"
            className="body1 flex-1 outline-none placeholder:text-gray-300"
            placeholder="상담 내용을 입력하세요."
          />
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
