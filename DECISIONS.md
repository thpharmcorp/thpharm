# DECISIONS.md — 전략 결정 기록

짧게, 날짜순으로. 이유가 있는 결정만 남깁니다.

## 2026-08-13 — GitHub/Netlify를 개인 계정에서 티에치팜(thpharmcorp) 계정으로 이전

- 지금까지 실제 개발은 김인형(GitHub `cozzyy`)이 대표 개인 계정 인증에 의존해 진행해와서 로그인
  때마다 대표에게 인증을 요청해야 하는 번거로움이 있었다. 회사 명의 계정(`thpharmcorp`,
  이메일 thpharmcorp@gmail.com)을 새로 만들어 GitHub 저장소와 Netlify 사이트를 이 계정으로
  이전했다.
- GitHub: `cozzyy/thpharm` → `thpharmcorp/thpharm`로 Transfer ownership. 커밋 히스토리는
  그대로 유지되고 `cozzyy`는 Collaborator로 남는다.
- Netlify: 새 계정(`thpharmcorp` 팀)에 저장소를 새로 연결해 사이트를 만들었다(`thpharm`,
  `thpharm.netlify.app`). 기존 개인 계정의 `thpharm-netlify-app` 사이트는 삭제하지 않고
  자동 배포만 꺼둔 채로 남겨뒀다 — 나중에 필요하면 완전히 정리할 것.
- 로컬 git 커밋 이메일이 `taehee.han@thpharm.co.kr`(어느 GitHub 계정에도 인증되지 않은
  이메일)로 되어 있던 게 예전 "Unrecognized Git contributor" 문제의 근본 원인이었을 가능성이
  높다고 보고, `thpharmcorp@gmail.com`(thpharmcorp 계정의 Verified/Primary 이메일)로
  통일했다.
- 이메일을 통일한 뒤 저장소를 다시 Private으로 전환했다 — Public 상태에서는
  DECISIONS.md/APPROVED_FACTS.md 같은 내부 전략 문서도 외부에 노출되는 트레이드오프가 있었기
  때문에, 문제의 근본 원인(이메일 불일치)을 고친 이상 굳이 Public으로 열어둘 이유가 없다고
  판단했다.

## 2026-08-13 — v9: NEWSROOM을 INTELLIGENCE로 통합

- HEALTH / INTELLIGENCE / NEWSROOM 3개 메뉴가 카드 형태가 거의 동일해 방문자가 구분하기
  어렵다는 지적(사용자 피드백)에 대해 전체 3-way 병합 대신 부분 병합을 택했다. HEALTH는
  B2C 성격(질환 정보, 일반인 대상)이 뚜렷해 그대로 유지하고, NEWSROOM(외부/사내 뉴스)과
  INTELLIGENCE(연구신호·THPHARM 관점·Bio-AI Atlas)만 통합했다 — 두 메뉴는 원래 기획안에서도
  같은 "신호를 읽는다"는 성격(SCOPE 프레임)을 공유하고 있었다.
  메뉴명은 기존 INTELLIGENCE를 유지한다(신규 이름을 만들지 않음).
- 콘텐츠 스키마: `news` 컬렉션을 별도로 두지 않고 `intelligence` 컬렉션의 `kind` enum에
  `'news'`를 추가해 흡수했다. 뉴스 전용 필드(`keyPoints`, `relatedLinks`, `newsType`,
  `region`, `year`)는 다른 kind에도 선택적으로 허용된다.
- 해시태그(`tags`)를 문자열 배열에서 `{label, url?}` 객체 배열로 바꿨다. url이 확인된
  태그만 외부 링크(원문 기사, 공식 모델 저장소, 공식 기업 사이트 등)로 연결하고, 확인되지
  않은 태그는 라벨만 있는 장식용 칩으로 남긴다 — 근거 없는 링크를 붙이지 않는다는 SOURCE-FIRST
  원칙을 해시태그에도 그대로 적용.
- INTELLIGENCE 피드에 뉴스/연구신호/THPHARM 관점/스포트라이트 4종 분류칩(카드 필터)을
  추가했다. NEWSROOM에 있던 vanilla-JS 필터 버튼 패턴을 그대로 재사용했다.
- `atlas-binding-affinity.json`, `atlas-protein-design.json` 본문에 남아있던 "V1에서는",
  "V1.5 이후 검토" 같은 내부 개발단계 표기를 제거했다 — v8에서 세운 "실제 서비스 화면에
  개발 과정의 흔적을 남기지 않는다" 원칙을 이번에 발견된 잔여 사례에도 적용.
- `src/content/news/` 디렉터리와 `src/pages/[locale]/newsroom/` 페이지, `i18n/ui.ts`의
  NEWSROOM nav 항목을 모두 삭제했다. 대메뉴는 6개(COMPANY/SCIENCE/PIPELINE/HEALTH/
  INTELLIGENCE/IR & PARTNERING)로 줄었다.

## 2026-08-12 — v8: 기획안을 문서가 아니라 소재로 다시 읽기

- SCIENCE의 "DRIVE"와 INTELLIGENCE의 "SCOPE"는 기획안이 명시적으로 화면에 노출하라고
  지시한 프레임(§16.2, §54)이라 유지한다. 다만 알파벳 5개만 던져놓고 클릭해야 뜻을 알 수 있던
  이전 구현은 폐기 — 5단계를 처음부터 전부 펼쳐 보여주고 한 줄 설명을 붙인다.
- IR의 "SCALE"과 각 페이지의 "표현 원칙" 주석은 기획안이 스스로 "내부 전용, 홈페이지 비노출"
  (§21.2, §403)이라고 못 박은 것들이다. 실제로 화면에 노출되고 있었던 것은 구현 실수였고,
  전부 제거했다.
- IR 랜딩 헤드라인은 기획안 §21.4의 섹션 제목("설득이 아니라 평가 가능한 증거를")을 그대로
  카피로 썼던 실수를 되돌리고, 같은 절이 실제로 권장한 메인카피("대사질환 치료제를 실제
  개발·임상·사업화로 연결합니다")로 교체했다.
- `DriveInteractive.tsx`(유일한 React 아일랜드)를 제거했다 — DRIVE 5단계를 클릭 없이 전부
  펼쳐 보여주기로 하면서 클라이언트 상태가 필요 없어졌기 때문. 현재 이 저장소에는 React
  컴포넌트가 0개다.
- PIPELINE OVERVIEW의 단계 필(Discovery~Regulatory)은 눌러도 아무 동작이 없는 장식이었다.
  기획안 §17.3이 원래 요구한 "가로축 = 개발단계, 세로축 = 자산, 점으로 현재 위치 표시"
  구조로 다시 만들었다.
- "출처 및 편집정책" 페이지는 기획안 §00.1(내부 콘텐츠 운영 원칙)을 거의 그대로 옮겨놓은
  정책 문서였다. 방문자에게는 그 정도 정보가 필요 없다고 판단해 4문단짜리 짧은 안내로
  줄였다. 원래의 상세 원칙은 CLAUDE.md/CONTENT_OPERATIONS.md에 남아 있고 그것으로 충분하다.
- 로그인·PT MODE·HEALTH 등 여러 화면에 흩어져 있던 "V1 프로토타입입니다", "초안입니다",
  "V1.5 예정" 같은 버전/상태 고지를 전부 제거하거나 자연스러운 문장으로 바꿨다. 실제 서비스
  화면에 개발 과정의 흔적을 남기지 않는다는 원칙을 세운다 — 다만 회사 확인이 필요한 사실
  자체를 숨기라는 뜻은 아니다 (`[COMPANY DATA NEEDED]` 표기는 유지).
