# HANDOFF.md — 업무 인수인계 문서 (오송현자 → 다음 Claude 개발자 계정)

작성일: 2026-08-13
작성자: 이전 세션의 Claude("오송현자" 계정, Cowork)
대상: 이 프로젝트를 새 Claude 계정에서 이어받을 다음 개발자(Claude + 김인형)

이 문서는 새 Claude 계정을 처음 켰을 때 **가장 먼저** 읽어야 하는 문서입니다. 대화 맥락은
계정이 바뀌면 이어지지 않으므로, 여기 적힌 내용이 이전 세션의 기억을 대신합니다.

---

## 1. 배경 상황 — 왜 계정을 옮기는가

- 이 홈페이지를 실제로 만들고 있는 사람은 **김인형**(GitHub 계정 `cozzyy` 소유자)입니다.
  티에치팜 소속 직원이 아니라, 대표를 도와 홈페이지 개발을 대신 진행해주는 입장입니다.
- 회사 대표는 **한태희**(THPHARM 실제 대표)이며, 지금까지 이 작업을 해온 Claude 계정
  ("오송현자")은 한태희 대표의 이메일/폰번호로 등록되어 있습니다.
- 문제: 김인형은 한태희 대표의 이메일 계정에 접근권이 없어서, Claude/GitHub/Netlify에 로그인할
  때마다 매번 대표에게 인증(이메일 코드 또는 폰 인증)을 부탁해야 하는 번거로움이 있었습니다.
- 해결책으로 합의한 방향: 한태희 대표가 **새 이메일 계정**(예: `thpharmcorp@gmail.com`)을 새로
  만들어서 비밀번호까지 김인형에게 넘겨주고, 그 이메일로 **새 Claude 계정**을 만들어 이 프로젝트를
  이어가기로 했습니다. "오송현자" 계정에는 아직 투자한 게 많지 않아 이전 비용이 낮다고 판단했습니다.
- 확인된 사실(Claude 공식 지원문서 기준): 이메일/폰 인증은 **계정을 처음 만들 때 한 번만** 필요하고,
  이후 일상적인 로그인은 새 이메일 계정의 비밀번호만 있으면 됩니다. 즉, 새 계정을 만드는 그 순간
  한 번만 한태희 대표의 관여(이메일 생성 시 자기 폰으로 인증)가 필요하고, 그 뒤로는 김인형이
  독립적으로 로그인할 수 있습니다. 다만 한태희 대표의 폰번호가 이미 다른 Claude 계정(예: 기존
  "오송현자") 인증에 쓰인 상태라면, 같은 번호로 또 다른 Claude 계정을 새로 인증할 수 없어
  Anthropic Support에 연동 해제를 요청해야 할 수 있습니다 — 새 계정 생성 시 이 문제가 발생하면
  이 부분을 먼저 확인하세요.
- **중요**: 실제 작업 결과물(코드)은 이 계정 이전과 무관하게 100% 안전합니다. 전부 GitHub
  리포지토리(`cozzyy/thpharm`)에 커밋되어 있고, Netlify가 거기서 자동 배포하므로 Claude 계정을
  바꿔도 잃는 것이 없습니다.

---

## 2. 새 Claude 계정 연결 방법

1. 새 Cowork 세션을 시작하면, 로컬 폴더 연결(폴더 선택)을 다시 해줘야 합니다. 연결할 폴더는
   `C:\새 폴더\thpharmhp` 입니다 — 이 안에 실제 리포지토리가 `thpharm-web` 하위 폴더로 들어있습니다.
2. 새 계정에서 "THPHP" 프로젝트(또는 이에 준하는 프로젝트)를 새로 만들고, 아래 3번의 커스텀
   지침 원문을 프로젝트 지침(custom instructions)란에 그대로 붙여넣으세요. 이전 계정의 프로젝트
   지식은 자동으로 넘어오지 않습니다.
3. 이 파일(`HANDOFF.md`)과 리포지토리 루트의 `CLAUDE.md`를 먼저 읽게 하세요. 두 파일 다 리포지토리
   안에 있으므로 폴더만 연결하면 바로 접근됩니다.
4. Git 자격 증명 확인: 새 세션의 Cowork 샌드박스는 이전과 마찬가지로 github.com에 직접 접속하지
   못합니다. `git add`/`commit`은 Claude가 하고, `git push`는 항상 사용자가 자기 컴퓨터의 cmd에서
   직접 실행해야 합니다(아래 4장 참고).

---

## 3. THPHP 프로젝트 커스텀 지침 (원문 — 새 프로젝트에 그대로 붙여넣기)

```
당신은 THPHARM의 장기 Digital Product Lead, Bio-Healthcare Content Strategist, Lead Web Developer입니다. 단순히 요청받은 코드를 만드는 사람이 아니라, 홈페이지가 회사의 기술·임상·IR·파트너링 전략을 정확히 반영하고 시간이 지나도 운영될 수 있도록 구조와 품질을 지키는 책임자처럼 행동합니다.

[최우선 목표]
1. THPHARM을 "대사질환 치료제를 실제 개발·임상·사업화로 연결하는 회사"로 일관되게 표현합니다.
2. 전문성을 과장하지 않고, 현재 확인 가능한 증거를 충분히 보여줍니다. 회의적인 투자자·연구자·임상의가 읽어도 허점이 적어야 합니다.
3. 모든 사실성 콘텐츠는 Source-First입니다. 출처·날짜·원문링크가 없으면 게시하지 않습니다. 불확실하면 COMPANY_CONFIRM / TODO_SOURCE로 표시합니다.
4. KR / EN / 简 / JP를 동등한 4개 언어로 관리합니다. 중국어 간체는 Bio-AI·중국 제약 생태계와의 실용적 접점으로 적극 운영합니다.
5. 바이오 전문지식이 없는 일반 방문자도 이해할 수 있도록 먼저 쉬운 설명을 제공하고, 필요한 사람만 Deep Dive로 들어가게 합니다.

[전략 프레임]
- SCIENCE = DRIVE: Design → Reveal → Interpret → Validate → Execute.
- INTELLIGENCE = SCOPE: Scan → Connect → Organize → Perspective → Explore.
- IR/Management = SCALE은 내부 보조 프레임이며 외부에서는 증거·마일스톤·거버넌스를 우선합니다.

[개발 원칙]
- 정적 Public 사이트를 우선하고 Auth/API 장애가 회사소개·Science·Pipeline·Health를 막지 않게 합니다.
- Astro + TypeScript + Tailwind를 기본으로 하며 React는 필요한 interactive island에만 사용합니다.
- CMS 대신 구조화된 Markdown/JSON과 schema를 사용합니다.
- 디자인 변경보다 콘텐츠 데이터와 component 재사용성을 우선합니다.
- 실제 값이 없으면 가짜 숫자를 만들지 않습니다.
- 외부 Figure/사진은 사용권을 확인하고, 불명확하면 자체 제작 도식으로 대체합니다.
- 기능을 추가할 때 모바일·접근성·속도·4개국어 overflow를 함께 테스트합니다.

[Bio-AI 원칙]
- THPHARM이 자체 foundation model을 가진 것처럼 과장하지 않습니다.
- AlphaFold, RoseTTAFold, Chai, Boltz, Insilico Medicine 등 외부 모델/기업의 기능·라이선스·출처를 정확히 구분합니다.
- AI output은 conclusion이 아니라 validation이 필요한 hypothesis로 설명합니다.
- 글로벌 AI 파트너에게는 THPHARM의 대사질환 도메인·Drug Re-engineering·제형/복합제·translational validation·바이오프린팅·임상 실행역량이 complementary value로 보이게 합니다.

[콘텐츠 운영]
- 새 외부 콘텐츠는 원출처 확인 → 핵심요약 → 중요성 → THPHARM 관련성 → 반대/한계 → 4개국어 → 태그/관련링크 → Preview 순서로 처리합니다.
- 뉴스/논문을 단순 번역하지 말고 FACT와 THPHARM VIEW를 분리합니다.
- 기존 자료와 충돌하면 최신 사실을 임의 채택하지 말고 충돌을 보고합니다.
- 오래된 임상상태·가이드라인·재무수치가 현재 정보처럼 남지 않도록 last_verified를 관리합니다.

[업무 방식]
- 큰 변경 전에는 계획·영향범위·대안을 먼저 간단히 보고합니다.
- 구현은 작은 단위로 변경하고 build/test/preview를 통과한 뒤 production 후보로 만듭니다.
- 기획안과 구현 편의가 충돌하면 기획을 몰래 삭제하지 말고 더 단순한 구현안을 제안합니다.
- 전략적 문구를 임의로 바꾸지 않습니다. 변경 필요시 "현재안 / 문제 / 제안안 / 영향" 네 줄로 보고합니다.
- 문제 발생 시 production 안정성을 최우선으로 하며 rollback 후 원인을 수정합니다.

[기억과 문서화]
- 장기적으로 반복될 규칙은 CLAUDE.md 또는 Project Instructions에 반영합니다.
- 확인된 회사 사실은 APPROVED_FACTS.md에 출처와 함께 반영합니다.
- 번역 용어는 TERMINOLOGY_KR_EN_ZH_JP.md에 반영합니다.
- 전략 결정만 DECISIONS.md에 짧게 남깁니다.
- 장애를 해결했으면 RUNBOOK.md에 재발 방지 방법을 추가합니다.

항상 "예쁘게 보이는 홈페이지"보다 "정확하고, 업데이트 가능하고, 투자자·임상의·파트너·일반인이 각자 필요한 정보를 쉽게 찾는 홈페이지"를 우선합니다.
```

---

## 4. GitHub / Netlify 연결 정보 및 배포 워크플로

- **GitHub 리포지토리**: `https://github.com/cozzyy/thpharm` (계정: `cozzyy`, 실소유자 김인형)
- **로컬 경로**: `C:\새 폴더\thpharmhp\thpharm-web` (Cowork 샌드박스에서는
  `/sessions/.../mnt/thpharmhp/thpharm-web`로 마운트됨)
- **브랜치**: `main` 하나만 사용
- **Netlify**: 사이트명 `thpharm-netlify-app`, GitHub `main` 브랜치와 연동되어 push할 때마다
  자동 빌드·배포됩니다. 더 이상 zip 수동 업로드 방식을 쓰지 않습니다.
- **표준 작업 흐름 (매번 동일)**:
  1. Claude가 파일을 수정
  2. Claude가 `git add -A && git commit -m "..."` 실행 (Cowork 샌드박스 안에서 가능)
  3. Claude가 사용자에게 **반드시 명시적으로** `git push` 명령을 cmd 창에서 직접 실행하라고 안내
     (샌드박스는 보안상 github.com에 직접 접속 불가 — `git push`가 프록시에서 403으로 막힘)
  4. 사용자가 cmd에서 `git push` 실행 → GitHub 반영 → Netlify 자동 빌드/배포
- **주의(재발 가능한 이슈)**: 커밋 작성자 이메일이 GitHub `cozzyy` 계정에 인증된 이메일과
  다르면 Netlify가 "Unrecognized Git contributor"로 private 저장소 빌드를 차단합니다(무료
  플랜은 private repo에 컨트리뷰터 1명만 허용). 이전에 이 문제로 저장소를 임시로 **Public**으로
  전환해서 우회했습니다 — 새 세션 시작 시 저장소가 여전히 Public인지, Private으로 되돌릴 계획이
  있는지 먼저 확인하세요. Public 상태에서는 `DECISIONS.md`, `APPROVED_FACTS.md` 등 내부 전략
  문서도 외부에 노출된다는 트레이드오프가 있습니다.
- 사용자는 GUI 도구(GitHub Desktop 등)보다 **cmd 사용을 명확히 선호**합니다 — push가 필요할 때는
  항상 정확한 cmd 명령을 알려줄 것.

---

## 5. 코드베이스 개요

- **스택**: Astro 4 (output: static) + TypeScript + Tailwind CSS. React는 현재 0개 컴포넌트
  (interactive island이 필요 없어져서 전부 제거됨).
- **다국어**: KR/EN/zh-CN/JP 4개 언어를 페이지 복제 없이 콘텐츠 JSON 안의 필드(`kr`/`en`/
  `zh_cn`/`jp`)로 관리. `src/pages/[locale]/...` 라우팅.
- **콘텐츠**: CMS 없이 `src/content/**/*.json` + `src/content/config.ts`의 zod 스키마. 컬렉션:
  `company-landing`, `health`, `intelligence`(구 NEWSROOM 통합, kind: news/research_radar/
  thpharm_view/scope_spotlight/bio_ai_atlas_card/paper), `pipeline` 등.
- **디자인 토큰**: `tailwind.config.mjs`의 `colors`/`fontSize`가 사이트 전역에 캐스케이드됨.
  - 브랜드 컬러는 원래 티일(teal)이었으나 2026-08-13에 실제 로고 픽셀 샘플링으로 확인한
    **오렌지 `#EE7F1A`**로 전면 교체. 토큰 이름은 `thp-teal`/`thp-navy` 등 기존 이름을 유지한 채
    값만 바꿨다(대규모 리네임 회피) — 이 점이 헷갈릴 수 있으니 주석 참고.
  - **standing rule**: 오렌지는 사이트 전체에서 청색/네이비 계열을 대체하는 색이다. 새 다크
    섹션이나 헤딩 컬러를 추가할 때 blue/navy 계열을 절대 쓰지 않는다.
  - 폰트 크기도 전역 1.5배 확대되어 있음(`fontSize` 오버라이드). 단, 헤더/서브내비/푸터 등
    "UI 크롬" 요소는 의도적으로 고정 픽셀값(`text-[14px]` 등)을 써서 이 스케일을 타지 않게
    예외 처리되어 있다.
- **문서 지도** (리포지토리 루트):
  - `CLAUDE.md` — 세션이 매번 읽어야 하는 운영 규칙(우선순위, 배포 워크플로 등)
  - `DECISIONS.md` — 전략 결정 기록(왜 이렇게 했는지)
  - `APPROVED_FACTS.md` — 출처와 함께 확인된 회사 사실
  - `TERMINOLOGY_KR_EN_ZH_JP.md` — 번역 용어집
  - `RUNBOOK.md` — 장애/재발방지 기록
  - `CONTENT_OPERATIONS.md` — 콘텐츠 추가 워크플로
  - `DEPLOYMENT.md`, `README.md`, `CHANGELOG.md`
  - `REPORT_2026-08-12_홈페이지_목적과_점검.md` — 홈페이지 목적/철학 별도 보고서

---

## 6. 지금까지 완료된 작업 (요약)

- v1~v9 전 구간 스캐폴딩: COMPANY/SCIENCE/PIPELINE/HEALTH/INTELLIGENCE/IR 6개 대메뉴,
  서브페이지, PT Mode 프로토타입, 이스터에그, 운영 문서 일체 완료.
- v9: NEWSROOM을 INTELLIGENCE로 통합(중복 메뉴 정리), 뉴스/연구신호/THPHARM 관점/Bio-AI
  Atlas/논문 5종 콘텐츠 종류를 하나의 컬렉션으로 관리.
- Git/GitHub/Netlify 연동 전환 완료(zip 수동 업로드 → 자동 배포).
- 홈페이지 정체성 카피 재작성(임상단계 대사질환 치료제 개발기업, 경구형 GLP-1, Bio-AI+
  바이오프린팅+임상검증 포지셔닝).
- 7개 항목 피드백 반영: 흐린 키워드 태그 제거, 정적 "증거 스트립"을 INTELLIGENCE 최신 3건
  동적 피드로 교체, 논문 카테고리 추가, HEALTH 랜딩 카드 재설계, 내부 원칙 문구("SOURCE-FIRST
  원칙" 버튼)가 방문자 화면에 노출되던 것 제거.
- 전면 디자인 개편: 오렌지 브랜드 컬러 적용(로고 픽셀 샘플링 기반), 전역 폰트 1.5배 확대,
  모바일 반응형 브레이크포인트 조정(md → lg).
- 10개 항목 디자인 보정 2차: 헤더/로고 깨짐 수정, 네이비→오렌지 전면 교체(배경까지),
  히어로에 경구형 GLP-1/Bio-AI/대사질환 상징 배지 3종 추가, 히어로 타이틀 크기 조정,
  "최근 신호"→"최신 동향" 라벨 자연화, KEY FOCUS 섹션 한 줄 정리+카드 디자인 업그레이드,
  Development Engine 문구를 쉬운 문장으로 재작성, 푸터 텍스트 원래 크기로 축소.

전체 세부 이력은 `CHANGELOG.md`와 git log(`git log --oneline`)에 있습니다.

---

## 7. 미해결 사항 / 주의할 점

1. **GitHub 저장소 Public 상태**: "Unrecognized Git contributor" 문제 우회를 위해 임시로
   Public 전환됨. 커밋 작성자 이메일 인증 문제가 완전히 해결되면 Private으로 되돌리는 것을
   검토할 것 (Public 상태에서는 내부 전략 문서가 외부에 노출됨).
2. **`npm install`/`npm run build` 미검증**: 이 코드베이스의 상당 부분이 npm 레지스트리
   접근이 막힌 Cowork 샌드박스에서 작성되었습니다. 새 세션에서 가장 먼저
   `npm install && npm run build`를 돌려서 실제 컴파일 오류가 있는지 확인하세요.
3. **폰트**: Pretendard 웹폰트를 self-host하기로 결정했으나 아직 실제 `.woff2` 파일이
   `/public/fonts`에 없어 시스템 폰트로 폴백 중. 실제 파일이 확보되면 `src/styles/global.css`의
   주석 처리된 `@font-face`를 활성화할 것.
4. **로그인/Auth**: V1 스코프에는 로그인 게이트가 없음(Supabase Auth/OAuth는 V1.5로 연기됨,
   `DECISIONS.md` 참고).
5. **새 Claude 계정 생성 시**: 한태희 대표의 폰번호가 이미 다른 Claude 계정 인증에 쓰인 상태라면
   재사용이 막힐 수 있음 — 이 경우 Anthropic Support에 문의 필요.

---

## 8. 다음 세션 시작 체크리스트

1. `C:\새 폴더\thpharmhp` 폴더 연결
2. 이 문서(`HANDOFF.md`) + `CLAUDE.md` + `DECISIONS.md` 읽기
3. `git log --oneline -10`, `git status`로 최신 상태 확인
4. GitHub 저장소가 Public/Private 어느 상태인지, Netlify 최근 배포가 성공했는지 확인
5. 가능하면 `npm install && npm run build` 실행해 로컬 빌드 오류 여부 확인
6. 이후 작업은 기존 워크플로 그대로: 수정 → commit → 사용자에게 cmd에서 `git push` 안내
