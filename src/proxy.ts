import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_USE_PROXY === 'false') {
    return NextResponse.next();
  }
  const session = request.cookies.get('2team_session');
  const { pathname } = request.nextUrl;

  // 1. 로그인이 된 상태인데 /login 페이지로 가려고 할 때
  if (session && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 2. 로그인이 안 된 상태인데 /login 이외의 보호된 페이지로 가려고 할 때
  if (!session && pathname !== '/login') {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};
