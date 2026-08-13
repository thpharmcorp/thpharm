/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // 디자인 토큰 — DESIGN_SYSTEM.md 참고.
      // 2026-08-13: Accent 색상을 로고 실물(public/images/logo.png)에서 픽셀 샘플링한 실제
      // 브랜드 오렌지(#EE7F1A)로 교체. 이어서 사용자가 "오렌지가 청색을 전부 대체하는 색"이라고
      // 명시적으로 못박아서, 다크 배경/헤딩에 쓰던 thp-navy/thp-navy2(원래 청색 계열)도 오렌지
      // 계열 딥톤(브라운-오렌지)으로 교체했다. 버튼(밝은 오렌지)과 다크 배경(어두운 오렌지브라운)의
      // 명도 차이는 유지해서 버튼이 배경에 묻히지 않게 했다. 이 규칙은 앞으로도 유지할 것 — 새
      // 다크 섹션/헤딩 컬러를 추가할 때 절대 blue/navy 계열을 쓰지 않는다.
      // 토큰 이름(thp-teal/thp-navy 등)은 40개 파일·190곳 이상에서 참조 중이라 이름은 유지하고
      // 값만 교체했다.
      colors: {
        'thp-ink': '#0B1220',      // 본문 텍스트 / 다크 배경
        'thp-navy': '#241207',     // Primary 다크 셸 — 오렌지 계열 딥브라운(구 청색 대체)
        'thp-navy2': '#4A2410',    // Primary 밝은 톤 — 다크 섹션/헤딩 텍스트용 (구 청색 대체)
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
        // Pretendard Regular/Bold/Black .woff2 /public/fonts에 배치 완료(2026-08-13, global.css 참고).
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
