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
    const from = request.nextUrl.searchParams.get('from');

    // 1순위: URL의 from 파라미터로 리다이렉트
    if (from && from.startsWith('/') && !from.startsWith('//')) {
      return NextResponse.redirect(new URL(from, request.url));
    }

    // 2순위: Referer(이전 페이지) 헤더가 있다면 거기로 전송 (동일 도메인인지 확인 필수)
    const referer = request.headers.get('referer');
    if (referer) {
      try {
        const refererUrl = new URL(referer);

        // 보안 검사: 이전 페이지의 도메인(origin)이 우리 서비스와 일치하는지 확인
        if (refererUrl.origin === origin) {
          // 로그인 페이지에서 무한 루프 도는 것을 방지
          if (refererUrl.pathname !== '/login') {
            return NextResponse.redirect(refererUrl);
          }
        }
      } catch (e) {
        // 유효하지 않은 URL 형식일 경우 무시
      }
    }

    // 3순위: 기본값은 홈
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
