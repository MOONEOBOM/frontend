// // src/app/test-loading/page.tsx
// export default async function TestLoadingPage() {
//   // 의도적으로 100초 동안 대기시켜서 loading.tsx가 계속 뜨게 만듭니다.
//   await new Promise((resolve) => setTimeout(resolve, 100000));

//   return <div>로딩 완료!</div>;
// }

// src/app/test/page.tsx
'use client';

import { useState } from 'react';

export default function TestPage() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("버튼 클릭으로 인한 테스트 에러!");
  }

  return (
    <div className="p-10">
      <h1 className="text-xl mb-4">테스트 페이지입니다.</h1>
      <button 
        onClick={() => setShouldError(true)}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        여기를 누르면 에러 발생!
      </button>
    </div>
  );
}