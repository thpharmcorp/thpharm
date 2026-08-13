/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // DRAFT 디자인 토큰 — DESIGN_SYSTEM.md 참고. 실제 브랜드 컬러/로고 확정 전까지 임시값.
      // [COMPANY DATA NEEDED] 회사 공식 브랜드 컬러(AI/PNG/SVG 가이드) 확정되면 교체.
      colors: {
        'thp-ink': '#0B1220',      // 본문 텍스트 / 다크 배경
        'thp-navy': '#0A1E33',     // Primary — 신뢰감 있는 딥 네이비 (히어로 배경)
        'thp-navy2': '#0E2A47',    // Primary 밝은 톤 — 다크 섹션(Development Engine 등)
        'thp-teal': '#12A594',     // Accent — Bio-AI/데이터 포인트
        'thp-tealDeep': '#0B7A6E', // Accent hover
        'thp-amber': '#D98E2B',    // 경고/하이라이트 (최소 사용)
        'thp-mist': '#F4F6F8',     // 섹션 배경
        'thp-line': '#E2E8F0',     // 보더
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
