import { useLogout } from '@/lib/tanstack/mutation/chat.mutation';

export const LogoutTest = () => {
  const { mutate: logout, isPending } = useLogout();

  return (
    <button onClick={() => logout()} disabled={isPending}>
      Google 로그아웃
    </button>
  );
};
