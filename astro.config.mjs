import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// THPHARM 홈페이지 리뉴얼 — V1 Prototype
// 원칙(기획안 §36, CLAUDE_CODE_KICKOFF_PROMPT.md):
// - 정적 생성 우선 (output: 'static'). Public 페이지는 Auth/API 장애와 무관하게 열려야 함.
// - React는 필요한 interactive island에만 사용 (DRIVE 인터랙션 등).
// - 다국어는 자체 [lang] 라우팅으로 처리 (Astro 기본 i18n 대신 콘텐츠 스키마 기반으로 관리).
export default defineConfig({
  site: 'https://thpharm.co.kr',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false, // 커스텀 base(src/styles/global.css)를 직접 관리
    }),
    react(),
  ],
});
