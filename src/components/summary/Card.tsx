import EyesLeft from '@/assets/icon/mooneobom_left.svg?react';

const MockData = {
  title: '베트남 로밍 해결 및 요금제 변경',
  content:
    "베트남에서 데이터가 안 터져서 <span>설정 변경</span>과 <span>재부팅</span>으로 해결했어요.<br/> 속도가 느려 <span>'제로프리미엄'</span>으로 요금제를 바꿨고, <span>데이터 무제한</span>과 <span>카톡 전화</span> 가능 여부까지 확인받아 안심했어요.",
};

const Card = () => {
  return (
    <div className="border-primary border-box my-[40px] flex h-[415px] w-[315px] flex-col items-center gap-[30px] rounded-[10px] border-[5px] py-[30px]">
      <EyesLeft />
      <div className="w-[250px]">
        <p className="heading2">{MockData.title}</p>
        <div className="border-border-300 mt-[20px] mb-[40px] w-[250px] border-[1px]" />
        <p
          dangerouslySetInnerHTML={{ __html: MockData.content }}
          className="body1 text-center"
        />
      </div>
    </div>
  );
};

export default Card;
