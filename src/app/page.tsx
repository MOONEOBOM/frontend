'use client';

import { auth } from '../../firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { User } from 'firebase/auth';
import Button from '@/components/common/Button';
import GoogleIcon from '@/assets/icon/google.svg';
import CryMoo from '@/assets/icon/moono_cry.svg';
import Modal from '@/components/common/Modal';
import LinkButton from '@/components/summary/LinkButton';
import ToggleBox from '@/components/summary/ToggleBox';
import Badge from '@/components/common/Badge';
import Header from '@/components/common/Header';

function App() {
  const [userData, setUserData] = useState<User | null>(null);
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console에 UserCredentialImpl 출력
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleBackAction = () => {
    setIsModalOpen(false);
  };

  const handleCloseAction = () => {
    setIsModalOpen(false);
    // 메인 페이지나 다른 경로로 이동
  };

  return (
    <div>
      <h3>구글 로그인 테스트</h3>
      <button onClick={handleGoogleLogin}>로그인</button>
      <h4>로그인하면 아래쪽에 이름이 나타납니다.</h4>
      <div>
        {userData
          ? '당신의 이름은 : ' + userData.displayName
          : '로그인 버튼을 눌러주세요 :)'}
      </div>
      <Button
        onClick={handleGoogleLogin}
        className="bg-white"
        size="full"
        variant="outline"
        icon={<GoogleIcon />}
      >
        구글로 로그인
      </Button>
      <Modal
        type="select"
        isOpen={isModalOpen}
        onBack={handleBackAction}
        onClose={handleCloseAction}
      >
        상담을 종료하시겠습니까?
        <br />
        상담 종료시 요약이 진행됩니다
      </Modal>
      {/* <Modal
        type="info"
        isOpen={isModalOpen}
        onBack={handleBackAction}
        image={<CryMoo />}
      >
        무너봄은 음성 파일에 한해
        <br />
        상담 요약을 제공해드리고 있어요. 불편을 드려 죄송합니다.
      </Modal> */}

      <div className="flex flex-col gap-[20px]">
        <LinkButton type="outline" onClick={() => {}}>
          자세히 보기
        </LinkButton>
        <LinkButton type="solid" onClick={() => {}}>
          로밍 해지하기
        </LinkButton>
        <LinkButton type="outline" isFull onClick={() => {}}>
          로밍 해지하기
        </LinkButton>

        <ToggleBox>로밍으로 인한 과청구</ToggleBox>
        <ToggleBox>로밍으로 인한 과청구</ToggleBox>
      </div>

      <Badge type="blue">대학생 요금제 추천해줘</Badge>
      <Badge type="primary">요금제 변경</Badge>

      <Header />
      <Header type="chat" />
    </div>
  );
}

export default App;
