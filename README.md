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
|<img width="310" alt="image" src="https://github.com/user-attachments/assets/b068258d-1f2a-4a20-902c-4e1cc4997aee" />| <img width="310" alt="image" src="https://github.com/user-attachments/assets/bc23fba8-d7cf-4152-9ddc-90367dbff22c" /> |

### 온보딩
| <img width="310" alt="image" src="https://github.com/user-attachments/assets/58690d7a-7fde-4427-910e-591ae8911b7f" /> | <img width="310" alt="image" src="https://github.com/user-attachments/assets/59dc1706-3465-4c09-b256-3c42a2b432e0" /> | <img width="310" alt="image" src="https://github.com/user-attachments/assets/d7c8ff1e-5815-4e8e-bf4f-88433ac218a5" /> |
| :---: | :---: | :---:|
| <img width="310" alt="image" src="https://github.com/user-attachments/assets/fa8599d9-cc61-4b89-b8d8-00fc87fe2066" /> | <img width="310" alt="image" src="https://github.com/user-attachments/assets/45e6f4a8-c5ae-4328-8401-8ac8d3fb560b" /> |

### 시나리오
<table>
  <thead>
    <tr>
      <th>사전 정보 입력</th>
      <th>시나리오 생성 결과</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top" align="center">
        <img width="310" alt="image" src="https://github.com/user-attachments/assets/af6e3923-fc64-4489-99de-a5fb0ddad106" />
      </td>
      <td valign="top" align="center">
        <img width="310" alt="image" src="https://github.com/user-attachments/assets/4b94d68b-289c-4843-8f08-fa8194194525" />
      </td>
    </tr>
  </tbody>
</table>

### 통화 상담
<table>
  <thead>
    <tr>
      <th>통화 상담 내역</th>
      <th>통화 상담 전문</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top" align="center">
        <img width="310" alt="image" src="https://github.com/user-attachments/assets/a859c603-7a0f-4027-9697-505f066c75c8" />
      </td>
      <td valign="top" align="center">
        <img width="310" alt="image" src="https://github.com/user-attachments/assets/d1888751-1670-462e-98db-42eec2ebfc15" />
      </td>
    </tr>
  </tbody>
</table>

### 챗봇 상담
| 챗봇 상담 | 상담 종료 |
| :---: | :---: |
| <img width="310" alt="image" src="https://github.com/user-attachments/assets/255b4cb4-5c34-4eae-b8e1-b1ac131bc611" /> | <img width="310" alt="image" src="https://github.com/user-attachments/assets/6fc3d500-4b4f-4ad4-965e-364eadd76b2e" /> |


### 요약 페이지
<table>
  <thead>
    <tr>
      <th>요약 결과</th>
      <th>요약 내역</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top" align="center">
        <img width="310" alt="image" src="https://github.com/user-attachments/assets/894e0a0d-5f8a-424e-9dc2-6e9c8dd77d8e" />
      </td>
      <td valign="top" align="center">
        <img width="310" alt="summary gif" src="https://github.com/user-attachments/assets/6f94f969-192e-45fc-8342-4a39103798ec" />
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
