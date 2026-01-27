'use client';

import Logo from '@/assets/icon/logo.svg';
import Button from '../common/Button';
import GoogleIcon from '@/assets/icon/google.svg';
import HelloMoo from '@/assets/moono/moono_hello.svg';
import { useLogin } from '@/lib/tanstack/mutation/auth.mutation';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToastHook } from '@/hooks/useToastHook';
import { Suspense } from 'react'
import { useOnboardingStore } from '@/store/useOnboarding';

// 1. 실제 로그인 로직을 담은 내부 컴포넌트 생성
const LoginForm = () => {
  const { mutate: login } = useLogin();
  const router = useRouter();
  const { toast } = useToastHook();

  // useSearchParams를 사용하는 로직
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  const safeFrom =
    from && from.startsWith('/') && !from.startsWith('//') ? from : '/';
  const startOnboarding = useOnboardingStore((state) => state.startOnboarding);
  const stopOnboarding = useOnboardingStore((state) => state.stopOnboarding);
  const handleLogin = () => {
    login(undefined, {
      onSuccess: (data) => {
        if (data?.firstLogin) {
          startOnboarding();
          router.replace('/onboarding');
          return;
        }
        stopOnboarding();
        router.replace(safeFrom);
      },
      onError: () => {
        toast('negative', '로그인에 실패하였습니다.');
      },
    });
  };

  return (
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
  );
};

// 2. 메인 페이지 컴포넌트에서 Suspense로 감싸기
const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <HelloMoo className="mt-[195px]" />
      <div className="mt-[30px]">
        <Logo />
      </div>
      
      {/* useSearchParams를 사용하는 컴포넌트를 Suspense로 감쌉니다 */}
      <Suspense fallback={<div className="mt-[146px] mb-[117px]">로딩 중...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;