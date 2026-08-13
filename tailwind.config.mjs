/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // 디자인 토큰 — DESIGN_SYSTEM.md 참고.
      // 2026-08-13: Accent 색상을 로고 실물(public/images/logo.png)에서 픽셀 샘플링한 실제
      // 브랜드 오렌지(#EE7F1A)로 교체 (사용자 피드백 — "티에치팜이 원래 오렌지색을 쓰는 곳").
      // 토큰 이름(thp-teal/thp-tealDeep)은 40개 파일·190곳에서 참조 중이라 그대로 유지하고
      // 값만 교체했다 — 새로 짤 때는 orange 계열임을 유의할 것. navy는 로고 워드마크 톤 유지.
      colors: {
        'thp-ink': '#0B1220',      // 본문 텍스트 / 다크 배경
        'thp-navy': '#0A1E33',     // Primary — 신뢰감 있는 딥 네이비 (히어로 배경)
        'thp-navy2': '#0E2A47',    // Primary 밝은 톤 — 다크 섹션(Development Engine 등)
        'thp-teal': '#EE7F1A',     // Accent — 브랜드 오렌지 (로고에서 샘플링, 2026-08-13)
        'thp-tealDeep': '#C4650F', // Accent hover — 위 오렌지의 딥 톤
        'thp-amber': '#D98E2B',    // 경고/하이라이트 (최소 사용)
        'thp-mist': '#F4F6F8',     // 섹션 배경
        'thp-line': '#E2E8F0',     // 보더
      },
      // 2026-08-13: 전체 폰트 크기 약 1.5배 확대(사용자 피드백 — "글자가 너무 작아서 읽기 어렵다").
      // 이름 있는 스케일(text-xs~text-6xl)을 전부 여기서 키우면 버튼/본문/메뉴 등 사이트 전역에
      // 자동 반영된다. text-[10px]/[11px] 같은 임의값(arbitrary value) 클래스는 이 스케일을 타지
      // 않아 별도로 픽셀값을 직접 키웠다 (해당 커밋 참고).
      fontSize: {
        xs: ['1.1rem', { lineHeight: '1.5rem' }],
        sm: ['1.3rem', { lineHeight: '1.9rem' }],
        base: ['1.5rem', { lineHeight: '2.25rem' }],
        lg: ['1.7rem', { lineHeight: '2.5rem' }],
        xl: ['1.9rem', { lineHeight: '2.6rem' }],
        '2xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '3xl': ['2.8rem', { lineHeight: '3.2rem' }],
        '4xl': ['3.4rem', { lineHeight: '3.6rem' }],
        '5xl': ['4.5rem', { lineHeight: '1.05' }],
        '6xl': ['5.6rem', { lineHeight: '1' }],
      },
      fontFamily: {
        // 셀프호스팅 원칙(v2.1 §11): Google Fonts CDN 대신 로컬 폰트 파일 사용.
        // 실제 .woff2 파일은 build 전 /public/fonts 에 넣어야 함 — 지금은 시스템 폰트로 폴백.
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Noto Sans KR',
          'Noto Sans SC',
          'Noto Sans JP',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
