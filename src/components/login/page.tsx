'use client';

import Logo from '@/assets/icon/logo.svg';
import Button from '../common/Button';
import GoogleIcon from '@/assets/icon/google.svg';
import HelloMoo from '@/assets/moono/moono_hello.svg';
import { useLogin } from '@/lib/tanstack/mutation/auth.mutation';
import { useRouter, useSearchParams } from 'next/navigation';

const LoginPage = () => {
  const { mutate: login } = useLogin();
  const router = useRouter();

  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  const safeFrom =
    from && from.startsWith('/') && !from.startsWith('//') ? from : '/';

  const handleLogin = () => {
    login(undefined, {
      onSuccess: () => {
        router.replace(safeFrom);
      },

      onError: () => {
        // TODO: 토스트 에러 추가
      },
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <HelloMoo className="mt-[195px]" />
      <div className="mt-[30px]">
        <Logo />
      </div>
      <div className="mt-[146px] mb-[117px]">
        <Button
          size="full"
          variant="outline"
          icon={<GoogleIcon />}
          onClick={handleLogin}
          className="bg-white"
        >
          구글로 로그인
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
