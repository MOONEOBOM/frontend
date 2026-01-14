'use client';

import { auth } from '../../firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { User } from 'firebase/auth';
import Button from '@/components/common/Button';
import GoogleIcon from '@/assets/icon/google.svg';
import LinkButton from '@/components/summary/LinkButton';
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
        variant="full"
        buttonStyle="outline"
        icon={<GoogleIcon />}
      >
        구글로 로그인
      </Button>

      <LinkButton type="outline" onClick={() => {}}>
        자세히 보기
      </LinkButton>
      <LinkButton type="solid" onClick={() => {}}>
        로밍 해지하기
      </LinkButton>
      <LinkButton type="outline" isFull onClick={() => {}}>
        로밍 해지하기
      </LinkButton>
    </div>
  );
}

export default App;
