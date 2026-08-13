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
- 폰트는 self-host (Google Fonts CDN 금지 — 中 접속성 고려). Pretendard Regular/Bold/Black
  .woff2 파일을 `/public/fonts`에 배치하고 `src/styles/global.css`의 `@font-face`를
  활성화 완료(2026-08-13). zh-CN용 Noto Sans SC는 아직 미배치 — 필요 시 같은 방식으로 추가.
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
- 디자인 톤: 다크 배경 히어로(`HeroDark.astro`) + 오렌지/옐로우 accent + Pretendard Bold/Black 헤드라인.
  세리프 폰트는 쓰지 않습니다(2026-08-12 사용자 피드백으로 확정 — 고딕/글로벌 스타트업 톤).
  Accent 컬러는 2026-08-13 기준 실험 중 — 로고 오렌지(#EE7F1A)에서 골드 옐로우(#F5C518)로
  히어로 컴포넌트를 임시 테스트 중이니, 최종 확정 전까지 이 파일과 실제 화면이 다를 수 있음.

## 콘텐츠 추가/수정 시 체크

1. 4개 언어(kr/en/zh_cn/jp) 필드를 전부 채웠는가
2. 사실성 콘텐츠라면 `sourceMeta`(source_type, source_title, last_verified 등)를 채웠는가
3. 회사 확인이 필요한 값은 `status: "company_confirm"` 또는 `[COMPANY DATA NEEDED]`로 표시했는가
4. `npm run build`가 로컬에서 통과하는가 (Claude Cowork 클라우드 샌드박스는 npm 레지스트리 접근이
   막혀 있어 이 환경에서는 빌드를 직접 돌릴 수 없습니다 — Netlify 빌드 로그로 확인하거나
   사용자 로컬 컴퓨터에서 직접 빌드해 확인. RUNBOOK.md 참고)

## GitHub / Netlify 계정 (2026-08-13 이전 완료)

- GitHub 저장소: `github.com/thpharmcorp/thpharm` (기존 `cozzyy/thpharm`에서 2026-08-13 소유권 이전.
  커밋 히스토리 그대로 유지됨. `cozzyy`(김인형)는 Collaborator로 남아있음.)
- Netlify 사이트: `thpharm` (`thpharm.netlify.app`, thpharmcorp 팀 계정 소유). 기존
  `thpharm-netlify-app`(개인 계정)은 더 이상 쓰지 않음 — 자동 배포만 꺼둔 상태로 미정리 남아있음.
- 로컬 git 커밋 이메일은 `thpharmcorp@gmail.com`(thpharmcorp GitHub 계정의 Verified/Primary
  이메일)로 통일했습니다.
- 저장소는 **Public 상태를 유지**합니다(2026-08-13 확인). 이메일을 thpharmcorp로 맞춘 뒤 Private
  전환을 시도했지만, Netlify 무료 플랜은 private repo에서 "컨트리뷰터 1명"만 허용하는데
  `cozzyy`가 여전히 Collaborator로 남아 push 이력에 등장하는 한 email 일치 여부와 무관하게
  "Unrecognized Git contributor"로 빌드가 막혔습니다(Netlify의 Git Contributor 연결 기능에도
  cozzyy를 추가로 연결하는 옵션은 없었음). Netlify Pro로 업그레이드하거나 cozzyy를
  Collaborator에서 제거하기 전까지는 Public 유지가 현실적인 선택입니다 — Private 재검토 시
  RUNBOOK.md의 관련 항목 참고.

## 배포 워크플로 (변경 없음)

- `main` 브랜치 push → Netlify 자동 빌드/배포.
- 이 개발 환경(Cowork)은 보안상 github.com에 직접 접속할 수 없습니다(`git push`가 프록시에서
  403으로 막힘). 그래서 파일 수정 → `git add -A && git commit -m "..."`까지는 이 세션에서
  처리하되(로컬로 마운트된 사용자 컴퓨터 폴더에서 실행), 마지막 `git push`는 사용자가 자기
  컴퓨터의 cmd에서 직접 실행해야 합니다. **커밋을 만들 때마다 사용자에게 `git push` 실행을
  안내할 것** — 사용자가 이 방식을 선호함(GitHub Desktop 등 GUI 도구 대신 cmd 사용 확정,
  2026-08-13).
- 마운트된 폴더에서 git 명령을 실행하면 `.git/index.lock` 등 lock 파일을 git이 스스로 못 지워서
  경고가 뜰 수 있습니다 — 대부분 무해한 경고이니 RUNBOOK.md 참고.

## 알려진 제약

이 코드베이스의 상당 부분은 npm 패키지 레지스트리 접근이 차단된 환경(Claude Cowork 클라우드
샌드박스)에서 작성되었습니다. 클라우드 샌드박스에서 `npm install`/`npm run build`를 직접 실행할
수 없으니, 빌드 검증은 Netlify 배포 로그로 확인하거나 사용자 로컬 컴퓨터에서 진행하십시오.
