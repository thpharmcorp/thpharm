# CLAUDE.md — THPHARM 홈페이지 리포지토리 운영 규칙

이 파일은 이 리포지토리에서 작업하는 모든 Claude 세션(Claude Code, Cowork 등)이 읽어야 하는
장기 지침입니다. 세션이 바뀌어도 같은 원칙으로 일하기 위해 존재합니다.

## 읽는 순서

1. `THPHARM_홈페이지_리뉴얼_기획안_v2_0.docx` — 최상위 Source of Truth
2. `THPHARM_홈페이지_리뉴얼_기획안_v2_1_변경사항.md` — v2.0을 override하는 diff (있다면)
3. `DECISIONS.md` — 전략 결정 기록
4. 이 파일(`CLAUDE.md`)

충돌 시 우선순위: ① 회사가 승인한 최신 사실/공식자료 ② v2.1 변경사항 ③ v2.0 기획안 ④ 이 파일 ⑤ 구현 편의.
충돌을 발견하면 임의로 판단하지 말고 사용자에게 보고합니다.

## 확정된 V1 스코프 (DECISIONS.md 2026-08-12 참고)

- 로그인 게이트 없음. WEB-500 전체 Public 공개. Supabase Auth/OAuth는 V1.5.
- Bio-AI Playground는 Bio-AI Atlas 1개만 (카드형 UI, 3D 렌더링 없음). Protein 3D Explorer /
  Metabolic Target Explorer는 V1.5.
- 콘텐츠 큐레이션은 자동 배치가 아니라 대표가 매주 직접 Claude에게 명령하는 수동 워크플로.
- 폰트는 self-host (Google Fonts CDN 금지 — 中 접속성 고려). 현재는 시스템 폰트로 폴백 중이며
  실제 Pretendard(Sans/고딕, Bold~Black 웨이트) .woff2 파일을 `/public/fonts`에 넣으면
  `src/styles/global.css`의 주석 처리된 `@font-face`를 활성화합니다.
- 배포 호스트: 기획안 원안은 Cloudflare Pages였으나, 실사용자가 Netlify로 직접 배포하기로 결정.
  Cloudflare Pages 관련 문구가 남아 있다면 Netlify 기준으로 갱신 필요.

## 개발 원칙

- 정적 사이트 우선(Astro `output: 'static'`). Public 페이지는 Auth/API 장애와 무관하게 열려야 함.
- React는 클릭 상태가 필요한 interactive island에만 사용. 2026-08-12 기준 그런 요소가 없어
  React 컴포넌트는 0개 — DRIVE 5단계도 전부 펼쳐서 보여주는 정적 Astro로 충분해 `DriveInteractive.tsx`를
  제거했습니다. 나머지는 전부 정적 Astro + 필요시 순수 vanilla `<script>`.
- CMS 없음. `/src/content` 아래 JSON + `src/content/config.ts`의 zod 스키마로 콘텐츠 관리.
- 4개 언어(KR/EN/zh-CN/JP)는 하나의 콘텐츠 엔트리 안에서 `kr`/`en`/`zh_cn`/`jp` 필드로 관리.
  페이지를 4벌 복제하지 않습니다. 4개 필드 중 하나라도 비우지 않습니다 — 아직 번역이 없으면
  `[TODO_TRANSLATION]`처럼 명시적으로 표시합니다.
- 실제 회사 자료가 없는 값은 절대 지어내지 않습니다. `[COMPANY DATA NEEDED]` /
  `[TODO_SOURCE]` / `status: "company_confirm"` / `status: "todo_source"` 로 표시합니다.
- 디자인 톤: 다크 네이비 히어로(`HeroDark.astro`) + 티일 accent + Pretendard Bold/Black 헤드라인.
  세리프 폰트는 쓰지 않습니다(2026-08-12 사용자 피드백으로 확정 — 고딕/글로벌 스타트업 톤).

## 콘텐츠 추가/수정 시 체크

1. 4개 언어(kr/en/zh_cn/jp) 필드를 전부 채웠는가
2. 사실성 콘텐츠라면 `sourceMeta`(source_type, source_title, last_verified 등)를 채웠는가
3. 회사 확인이 필요한 값은 `status: "company_confirm"` 또는 `[COMPANY DATA NEEDED]`로 표시했는가
4. `npm run build`가 로컬에서 통과하는가 (이 개발 환경은 npm 네트워크 접근이 막혀 있어
   빌드를 직접 돌릴 수 없습니다 — RUNBOOK.md 참고)

## 알려진 제약

이 코드베이스의 상당 부분은 npm 패키지 레지스트리 접근이 차단된 환경(Claude Cowork 샌드박스,
Team/Enterprise 조직 설정 없음)에서 작성되었습니다. 즉 `npm install`/`npm run build`가 한 번도
실행되지 않은 상태로 커밋된 파일들이 있을 수 있습니다. 새 세션에서 작업을 이어받으면 가장 먼저
`npm install && npm run build`를 돌려 실제 컴파일 오류가 있는지 확인하십시오.
