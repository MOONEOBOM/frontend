import EyesRight from '@/assets/icon/mooneobom_right.svg?react';
import styles from '@/styles/Card.module.css';

const MockData = {
  title: '베트남 로밍 해결 및 요금제 변경',
  content:
    '베트남에서 <span>데이터 로밍</span> 차단을 풀고 재부팅해서 연결했어요. <br/>속도가 답답해 <span>제로프리미엄</span>으로 바꿨고, <span>400kbps</span> 속도로 무제한 쓸 수 있어 안심돼요.',
};

const Card = () => {
  return (
    <div className="border-primary border-box my-[40px] flex h-[415px] w-[315px] flex-col items-center gap-[30px] rounded-[10px] border-[5px] py-[30px]">
      <EyesRight />
      <div className="w-[250px]">
        <p className="heading2">{MockData.title}</p>
        <div className="border-border-300 mt-[20px] mb-[40px] w-[250px] border-[1px]" />
        <p
          dangerouslySetInnerHTML={{ __html: MockData.content }}
          className="body1 [&_span]:bg-secondary text-center"
        />
      </div>
    </div>
  );
};

export default Card;
