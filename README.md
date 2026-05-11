# 하나주택종합관리

서울 용산구를 기반으로 2010년 창사한 주택·상가·빌라 종합관리 전문 기업입니다.  
15년 용산 현장 경험과 흔들리지 않는 정직함으로 건물 자산의 가치를 지킵니다.

---

## 디자인 시스템

### 색상

| 토큰 | 값 | 용도 |
|---|---|---|
| `primary` | `#1F3F8F` | 메인 네이비 |
| `primary-dark` | `#10275F` | 강조 네이비 |
| `primary-deep` | `#071936` | 배경 최심 네이비 |
| `accent` | `#E53935` | 포인트 레드 |
| `secondary` | `#8B5A44` | 헤리티지 브라운 |
| `secondary-light` | `#B08A72` | 브라운 보조 |
| `bg-warm` | `#F7F5F1` | 섹션 배경 |
| `border-warm` | `#E5E0D8` | 구분선 |
| `text-main` | `#111827` | 본문 텍스트 |
| `text-sub` | `#374151` | 보조 텍스트 |
| `text-muted` | `#6B7280` | 흐린 텍스트 |

### 타이포그래피

| 역할 | 클래스 | 폰트 |
|---|---|---|
| 본문 | `font-sans` | Pretendard Variable |
| 헤리티지 강조 | `font-serif` | Cinzel / Playfair Display |

### 주요 패턴

**섹션 헤더**
```
font-serif text-secondary → 소제목 레이블
h-[2px] w-12 bg-accent   → 빨간 어센트 라인
text-4xl~6xl font-bold text-primary-dark → 메인 헤딩
```

**버튼**
```
bg-primary-dark text-white px-8 py-4 font-bold → 주요 CTA
bg-accent text-white → 강조 CTA
border border-white/10 shadow-2xl → 공통 수식
```

**Hero / 어두운 섹션 배경**
```
bg-primary-deep
opacity-[0.15] mix-blend-luminosity → 배경 이미지 레이어
bg-gradient-to-b from-primary-deep/90 to-primary-deep → 그라디언트 오버레이
```

---

## 보안 및 환경변수 관리 가이드

이 프로젝트는 보안 강화를 위해 프론트엔드와 백엔드(Vercel Serverless Functions)의 역할을 엄격히 분리합니다.

### 1. 환경변수 구분
- **`VITE_` 접두사 변수:** 클라이언트 사이드 번들에 포함되며 누구나 브라우저에서 읽을 수 있습니다. 공개 가능한 설정값만 저장하십시오.
- **접두사가 없는 변수:** `api/` 디렉토리(백엔드)에서만 접근 가능하며, 클라이언트에는 절대로 노출되지 않습니다. 모든 Secret, API Key, Password는 여기에 저장하십시오.

### 2. 백엔드 중계 (Backend Mediation)
- **Maintenance Bypass:** `BYPASS_SECRET`은 서버에서만 검증하며, 클라이언트에는 해싱/서명된 임시 토큰만 전달합니다.
- **이메일 발송 (EmailJS):** Service ID, Template ID 등을 보호하기 위해 클라이언트가 직접 외부 API를 호출하지 않고 `/api/send-email`을 통해 중계합니다.

### 3. 로컬 개발 설정
로컬 환경에서는 `.env` 파일을 생성하여 `.env.example`의 구조를 따르십시오.
API 라우트(Serverless Functions)를 로컬에서 테스트하려면 `vercel dev` 명령어를 사용하시는 것을 권장합니다.
Vercel 배포 시에는 Vercel Dashboard의 Environment Variables 설정에 모든 변수를 등록해야 합니다.

