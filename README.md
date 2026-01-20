<img width="5760" height="3240" alt="image" src="https://github.com/user-attachments/assets/0730dddc-32b6-4028-88b2-30ead0465b8e" />

## 👥 팀원 소개

| <img src="https://github.com/yezzan9.png" width="150"> | <img src="https://github.com/tree0-0.png" width="150"> | <img src="https://github.com/RyuJaeHwi.png" width="150"> | <img src="https://github.com/dahlia0916.png" width="150"> |
| :---: | :---: | :---: | :---: |
| [**박예진**](https://github.com/yezzan9) | [**정현문**](https://github.com/tree0-0) | [**유재휘**](https://github.com/RyuJaeHwi) | [**이수빈**](https://github.com/dahlia0916) |
<br/>

## ⭐️ 주요 기능

### 초기 화면
| 로그인 | 홈 |
| :---: | :---: |
|<img width="310" alt="image" src="https://github.com/user-attachments/assets/523596b1-a1dc-4deb-87e7-479b20cd8fdf" /> | <img width="310" alt="image" src="https://github.com/user-attachments/assets/216969d5-d367-4768-a9c6-4820d2c1ba00" /> |

### 온보딩 (현재 구현 중)
| <img width="310" alt="image" src="https://github.com/user-attachments/assets/d9a543bf-0852-4466-a2ac-3aa92ca4cbf5" /> | <img width="310" alt="image" src="https://github.com/user-attachments/assets/fbdab48c-57ee-45ca-bf7d-996ba9a5aadb" /> | <img width="310" alt="image" src="https://github.com/user-attachments/assets/b80f7be7-97d4-427c-b992-a6174e9cde2c" /> |
| :---: | :---: | :---:|

### 시나리오
<table>
  <thead>
    <tr>
      <th>사전 정보 입력</th>
      <th>시나리오 생성 결과</th>
      <th>시나리오 결과 평가</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top" align="center">
        <img width="310" alt="image" src="https://github.com/user-attachments/assets/39fa515a-dc0b-4dce-a42a-7c073e2e31cb" />
      </td>
      <td valign="top" align="center">
        <img width="310" alt="image" src="https://github.com/user-attachments/assets/8fb401b0-5d99-481e-9abd-73c7609cb244" />
      </td>
      <td valign='top' align='center'>
        <img width="310" alt="image" src="https://github.com/user-attachments/assets/3ccfa0bc-c600-4d31-9331-55fa68b26151" />
      </td>
    </tr>
  </tbody>
</table>

### 챗봇 상담
| 챗봇 상담 | 상담 종료 |
| :---: | :---: |
| <img width="310" height="1506" alt="image" src="https://github.com/user-attachments/assets/2ec1f5f9-49f4-4c02-94f6-29e529da5dff" /> | <img width="310" alt="image" src="https://github.com/user-attachments/assets/9c790ff6-5ff8-4676-8af6-1e54d103eeb7" /> |


### 요약 페이지
<table>
  <thead>
    <tr>
      <th colspan="2">요약 결과</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top" align="center">
        <img width="310" alt="image" src="https://github.com/user-attachments/assets/bc8c0e78-10ac-4aad-9a20-0f5e03919015" />
      </td>
      <td valign="top" align="center">
        <img width="310" alt="summary gif" src="https://github.com/user-attachments/assets/46c5d5fa-5164-4fd3-aeff-1c3073452bd6" />
      </td>
    </tr>
  </tbody>
</table>

## ⚒️ 서비스 아키텍처
<img width="3840" height="2160" alt="image" src="https://github.com/user-attachments/assets/8ba3d104-bb61-47f1-853e-f1234ea7fe8f" />


## 📂 디렉토리 구조
```
src/
├── app/                  # App Router: 페이지 라우팅 및 레이아웃
│   ├── chatbot/          # 챗봇 페이지
│   ├── history/          # 히스토리/기록 페이지
│   ├── login/            # 로그인 페이지
│   ├── onboarding/       # 온보딩 페이지
│   ├── scenario/         # 시나리오 관련 페이지
│   ├── summary/          # 요약 페이지
│   ├── error.tsx         # 페이지 에러 핸들링
│   ├── global-error.tsx  # 전역 에러 핸들링
│   ├── globals.css       # 전역 스타일 시트
│   ├── layout.tsx        # 루트 레이아웃
│   ├── loading.tsx       # 전역 로딩 UI
│   └── page.tsx          # 메인(홈) 페이지
├── assets/               # 정적 자원
│   ├── fonts/            # 폰트 파일
│   ├── icon/             # 아이콘 이미지/SVG
│   └── moono/            # 무너 이미지
├── components/           # 재사용 가능한 UI 컴포넌트
│   ├── auth/             # 인증 관련 컴포넌트
│   ├── chatbot/          # 챗봇 전용 컴포넌트
│   ├── common/           # 공통 UI 컴포넌트 (Button, Input 등)
│   ├── history/          # 히스토리 UI 컴포넌트
│   ├── home/             # 홈 화면 전용 컴포넌트
│   ├── login/            # 로그인 관련 컴포넌트
│   ├── onboarding/       # 온보딩 단계별 컴포넌트
│   ├── scenario/         # 시나리오 UI 컴포넌트
│   ├── summary/          # 요약 UI 컴포넌트
│   └── TextBubble/       # 채팅 말풍선 등 텍스트 컴포넌트
├── hooks/                # 커스텀 React 훅
├── lib/                  # 외부 라이브러리 설정 및 클라이언트 정의
├── models/               # TypeScript 인터페이스 및 데이터 모델 (Type 정의)
├── services/             # API 통신 및 비즈니스 로직
├── stories/              # Storybook 컴포넌트 테스트 파일
└── utils/                # 공통 유틸리티 함수
```

<br/>

## ⚙️ 서버 실행 방법
```
# 1. 패키지 설치
pnpm install

# 2. 환경 변수 설정
# NEXT_PUBLIC_FIREBASE_API_KEY= your_firebase_key
# NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= your_firebase_domain
# NEXT_PUBLIC_FIREBASE_PROJECT_ID= your_firebase_project_id
# NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET= your_firebase_bucket
# NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID= your_firbase_messaging_id
# NEXT_PUBLIC_FIREBASE_APP_ID= your_firebase_app_id
# NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID= your_firebase_measurement_id
# NEXT_PUBLIC_API_URL= your_api_url

# 3. 개발 서버 실행
pnpm run dev
```
