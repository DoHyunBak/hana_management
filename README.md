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
