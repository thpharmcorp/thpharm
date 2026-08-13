# THPHARM 홈페이지 리뉴얼 — V1 Prototype (소스코드)

이 zip은 **소스코드**입니다. `index.html`이 이미 만들어진 빌드 결과물이 아닙니다.

## 왜 빌드가 안 되어 있나

이 코드를 작성한 환경(Claude Cowork 샌드박스)이 npm 패키지 레지스트리에 접근할 수 없어서
`npm install`을 실행하지 못했습니다. 그래서 Astro가 실제 HTML로 컴파일한 결과물을 만들 수 없었고,
소스코드만 전달합니다. 즉 **이 코드는 아직 한 번도 빌드/실행 검증을 거치지 않았습니다.**
자세한 원인과 해결 옵션은 `RUNBOOK.md`를 참고하세요.

## 로컬에서 빌드해서 실제 index.html 만드는 법

인터넷 되는 컴퓨터에서 (Node.js 18+ 필요):

```bash
cd thpharm-web
npm install
npm run build
```

`npm run build`가 끝나면 `dist/` 폴더가 생깁니다. 이 폴더 안에 언어별
`index.html`(`/kr/index.html`, `/en/index.html`, `/zh-cn/index.html`, `/jp/index.html` 등)이
실제로 만들어집니다. 배포 방법은 `DEPLOYMENT.md` 참고 (Netlify 기준으로 정리되어 있습니다).

미리보기만 하고 싶다면 빌드 없이:

```bash
npm install
npm run dev
```

`http://localhost:4321` 에서 바로 확인할 수 있습니다.

디자인 방향만 빠르게 보고 싶다면 빌드/설치 없이 `preview/design-preview.html`을
브라우저로 더블클릭해서 열면 됩니다 (Tailwind/폰트를 CDN으로 불러오는 별도 정적 목업입니다).

## 지금 상태 (2026-08-12)

완성된 메뉴 (7개 대메뉴 전부 최소 1개 화면씩, breadth-first):

| 메뉴 | 상태 |
|---|---|
| WEB-100 COMPANY | Landing + WEB-101 About, 4개 언어 |
| WEB-200 SCIENCE | Landing + DRIVE 5단계 인터랙션(React island) + Hidden Film 트리거 |
| WEB-300 PIPELINE | Overview + THP-001 상세 템플릿 (공통 템플릿, THP-004는 추가만 하면 됨) |
| WEB-400 HEALTH | Landing + Obesity 1개 상세 (당뇨/고혈압/MASH는 같은 템플릿에 콘텐츠만 추가하면 됨) |
| WEB-500 INTELLIGENCE | Landing(SCOPE) + Research Radar 샘플 1건 + Bio-AI Atlas 카드 4개 (로그인 게이트 없음 — v2.1) |
| WEB-600 NEWSROOM | One News DB + TYPE 필터(vanilla JS) + 샘플 2건 |
| WEB-700 IR & PARTNERING | Landing + 섹션 5개 요약 + IR Library placeholder |
| PT MODE | 최소 슬라이드 프로토타입 (`/{locale}/pt`) — Company/Science/Pipeline/IR 데이터 재사용 |
| WEB-801/802 이스터에그 | Footer ♪ 아이콘, SCIENCE 페이지 필름 트리거 — 실제 오디오/영상 자산 없이 "준비 중" 안내만 |

공통: Header/Footer/언어전환(KR/EN/简/JP)/프로토타입 안내배너/다크 히어로 디자인 시스템(`HeroDark.astro`).

아직 없는 것: Contact/Privacy/Terms/Sources 같은 법무 페이지, WEB-104 OUR EVOLUTION,
WEB-103 PEOPLE & EXPERTISE, PIPELINE/HEALTH/NEWS의 나머지 항목들. 회사 실제 자료(로고,
사업자정보, 임직원 등)는 전부 `[COMPANY DATA NEEDED]` placeholder 상태입니다 — `APPROVED_FACTS.md`에
체크리스트가 있습니다.

콘텐츠는 한국어 원문은 기획안 v2.0 초안 카피를 기준으로 삼았고, 영어/中/日는 초안 번역입니다.
**게시 전 사람 검수가 필요합니다** (기획안 §5.2 — COMPANY/PIPELINE/CLINICAL/IR은 "중요 고정 페이지").

## 문서 구조

- `CLAUDE.md` — 이 리포에서 작업할 때의 장기 규칙
- `APPROVED_FACTS.md` — 확인된 사실 + 회사에 요청해야 할 자료 체크리스트
- `TERMINOLOGY_KR_EN_ZH_JP.md` — 4개 언어 용어집
- `CONTENT_OPERATIONS.md` — 콘텐츠 추가/수정/검증/복구 표준 명령
- `DEPLOYMENT.md` — 빌드 및 Netlify 배포 방법
- `RUNBOOK.md` — 장애 대응
- `DECISIONS.md`, `THPHARM_홈페이지_리뉴얼_기획안_v2_1_변경사항.md` — 이전 세션에서 확정된 전략 결정

## 다음 단계

- 로컬에서 `npm install && npm run build` 돌려서 실제 컴파일 오류 확인 (아직 한 번도 안 돌아감)
- 회사 실제 자료 확보되는 대로 `[COMPANY DATA NEEDED]` 교체
- Contact/Privacy/Terms/Sources 법무 페이지, WEB-103/104 등 남은 서브페이지 추가
- 콘텐츠 운영이 안정되면 `CONTENT_OPERATIONS.md`의 4개 표준 명령을 Cowork 스킬로 패키징
