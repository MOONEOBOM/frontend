import { Suspense } from 'react';
import LoginForm from '@/components/login/page';

const LoginPage = () => {
  return (
    // TODO: 로딩 수정
    <Suspense fallback={<div>로딩 중...</div>}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
