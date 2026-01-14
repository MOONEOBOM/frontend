'use client';

import { useState } from 'react';
import { LoginTest } from '@/components/auth/LoginTest';
import UserTest from '@/components/auth/UserTest';
import { LogoutTest } from '@/components/auth/LogoutTest';

function App() {
  const [userData, setUserData] = useState<boolean>(false);

  const handlerData = () => {
    setUserData(true);
  };

  return (
    <div>
      <h3>구글 로그인 테스트</h3>

      <LoginTest />
      <LogoutTest />
      <br />
      <button onClick={handlerData}>이름 확인</button>
      {userData && <UserTest />}
    </div>
  );
}

export default App;
