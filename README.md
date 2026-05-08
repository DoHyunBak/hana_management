# 하나주택종합관리 — 공식 홈페이지

서울 용산구 기반 주택·상가·빌라 종합관리 전문 기업 **하나주택종합관리**의 공식 웹사이트입니다.  
2010년 창사 이래 15년 용산 현장 경험을 바탕으로 한 신뢰 중심 브랜딩 사이트입니다.

---

## 기술 스택

| 분류 | 라이브러리 / 도구 | 버전 |
|---|---|---|
| UI 프레임워크 | React | 19 |
| 언어 | TypeScript | 6 |
| 번들러 | Vite | 8 |
| 라우팅 | React Router DOM | 7 |
| 애니메이션 | Framer Motion | 12 |
| 스타일링 | Tailwind CSS | 4 (CSS `@theme` 방식) |
| 아이콘 | Lucide React | 최신 |
| 이메일 발송 | EmailJS Browser | 4 |
| 배포 | Vercel | — |

---

## 프로젝트 구조

```
hana/
├── public/                     # 정적 파일 (로고, 이미지, 파비콘)
├── src/
│   ├── pages/                  # 라우트 단위 페이지
│   │   ├── Home.tsx            # 메인 (/)
│   │   ├── Company.tsx         # 회사소개 (/company)
│   │   ├── Services.tsx        # 서비스 (/services)
│   │   ├── Inquiry.tsx         # 문의 (/inquiry)
│   │   ├── Portfolio.tsx       # 포트폴리오
│   │   └── Maintenance.tsx     # 점검 페이지
│   ├── components/             # 섹션 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── HistorySection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── LocalTrustSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── SuccessPortfolio.tsx
│   │   ├── FieldNewsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── MapSection.tsx
│   │   ├── MobileCTA.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── MaintenanceGuard.tsx  # 점검 모드 인터셉터
│   ├── lib/
│   │   └── utils.ts
│   ├── index.css               # Tailwind @theme 디자인 토큰
│   ├── App.tsx                 # 라우터 루트
│   └── main.tsx
├── vercel.json                 # 보안 헤더 (CSP, HSTS 등)
├── vite.config.ts
└── .env                        # 환경변수 (git 제외)
```

---

## 환경변수

`.env` 파일을 프로젝트 루트에 생성하세요.

---

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 점검 모드 (Maintenance Mode)

`.env`에서 `VITE_MAINTENANCE_MODE=true` 로 설정하면 모든 페이지가 점검 화면으로 전환됩니다.

**관리자 우회 접근:**

```
https://hanahousing.co.kr/?admin=<시크릿>
```

- 최초 접근 시 쿠키(`maintenance_bypass`)가 설정되어 이후 24시간 동안 유지됩니다.
- `?admin=` 파라미터는 `history.replaceState`로 즉시 URL에서 제거됩니다.
- 시크릿이 12자 미만이면 우회 기능 자체가 비활성화됩니다.

> **참고:** 순수 SPA 환경의 구조적 한계로, 클라이언트 번들을 분석하면 시크릿 확인이 가능합니다.  
> 강력한 접근 제어가 필요한 경우 Vercel / Netlify Edge Function으로 서버사이드 구현을 권장합니다.

---

## 보안 헤더

`vercel.json`에 아래 헤더가 모든 응답에 적용됩니다.

| 헤더 | 값 | 목적 |
|---|---|---|
| `Content-Security-Policy` | 허용 출처 화이트리스트 | XSS·스크립트 인젝션 방어 |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | HTTPS 강제 |
| `X-Frame-Options` | `DENY` | 클릭재킹 방어 |
| `X-Content-Type-Options` | `nosniff` | MIME 스니핑 방어 |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | 리퍼러 정보 최소화 |
| `Permissions-Policy` | 카메라·마이크·위치 비활성화 | 불필요한 브라우저 권한 차단 |

---

## 디자인 토큰

`src/index.css`의 `@theme` 블록에 전체 색상 팔레트와 폰트가 정의되어 있습니다.

| 토큰 | 값 | 용도 |
|---|---|---|
| `primary` | `#1F3F8F` | 메인 네이비 |
| `primary-dark` | `#10275F` | 강조 네이비 |
| `primary-deep` | `#071936` | 최심 네이비 (Hero 배경) |
| `accent` | `#E53935` | 포인트 레드 |
| `secondary` | `#8B5A44` | 헤리티지 브라운 |
| `bg-warm` | `#F7F5F1` | 섹션 배경 |

---

## 라이선스

© 2025 하나주택종합관리. All rights reserved.
