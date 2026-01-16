'use client';
import Logo from '@/assets/icon/logo.svg';
import Button from '../common/Button';
import GoogleIcon from '@/assets/icon/google.svg';
import HelloMoo from '@/assets/moono/moono_hello.svg';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebaseClient';

const LoginPage = () => {
  const [userData, setUserData] = useState<User | null>(null);
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
          onClick={handleGoogleLogin}
          className="bg-white"
        >
          구글로 로그인
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
