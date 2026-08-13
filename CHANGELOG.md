# CHANGELOG

zip 파일은 이제부터 버전을 올려서 저장합니다 (이전 버전 삭제하지 않음).

## v9 (2026-08-13, thpharm-web-source-v9.zip) — NEWSROOM을 INTELLIGENCE로 통합 + 뉴스 3건 반영

자세한 배경/이유는 `DECISIONS.md`의 2026-08-13 항목 참고.

- **메뉴 통합**: HEALTH/INTELLIGENCE/NEWSROOM 카드가 서로 비슷해 헷갈린다는 피드백에 따라
  NEWSROOM을 INTELLIGENCE로 흡수. HEALTH는 그대로 유지. 대메뉴 7개 → 6개.
- **콘텐츠 스키마**: `intelligence` 컬렉션의 `kind`에 `'news'` 추가, `news` 컬렉션 삭제.
  `tags`를 `string[]` → `{label, url?}[]`로 변경 — url이 있으면 해시태그 클릭 시 외부(원문
  기사·공식 모델 저장소·공식 기업 사이트)로 바로 연결, 없으면 장식용 칩으로만 표시.
- **뉴스 3건 신규/재확인 반영**: (1) 딥테크 TIPS 선정 (한국경제, 2026-07-28) (2) 충북지식경영포럼
  지역 스타트업 소개 (충청일보, 2026-08-11) (3) 인실리코 메디슨과 '역설계(Reverse Engineering)'
  공동연구 — PandaOmics로 기존 자산 재분석, 심부전·지방간질환·비만 우선 검토 (한국경제,
  2026-08-13). 기존 Reuters 뉴스 2건(경구 GLP-1 영국 승인, ISS 바이오프린팅)도 함께 이전.
  모든 뉴스는 원문 링크를 sourceMeta.source_url과 해시태그 양쪽에 노출.
- **INTELLIGENCE 페이지 재구축**: 랜딩에 신문기사/연구 신호/THPHARM 관점/스포트라이트 4종
  분류칩(필터 버튼) 추가, 발행일 기준 최신순 정렬. 상세 페이지에 KEY POINTS, RELATED, 출처
  원문 링크(DOI만 있는 경우 doi.org 링크로 대체) 렌더링을 새로 추가 — 기존 NEWSROOM 상세
  템플릿에 있던 기능을 그대로 흡수.
- **Bio-AI Atlas 해시태그 보강**: AlphaFold/Chai-1/Boltz/RFdiffusion/ProteinMPNN/Insilico
  Medicine/PandaOmics/NMPA/ChiCTR 등 검증된 공식 링크를 태그에 연결. `atlas-binding-affinity`,
  `atlas-protein-design` 본문에 남아있던 "V1.5 이후 검토" 같은 내부 개발단계 표기 제거.
- **정리**: `src/content/news/`, `src/pages/[locale]/newsroom/` 삭제. `i18n/ui.ts`의 NEWSROOM
  nav 항목 제거. `science/reveal.astro`의 죽은 `?tag=bio-ai-atlas` 링크를 `#atlas` 앵커로 수정.

## v8 (2026-08-12, thpharm-web-source-v8.zip) — 기획안 재검토 후 톤/UX 정정

v7 배포 화면을 보고 받은 2차 피드백(6개) 대응. 근본 원인은 하나로 수렴됨 — 기획안 문서 안의
"방문자용 카피"와 "개발자에게 주는 지시문/내부 전략명"을 구분하지 않고 그대로 옮긴 것.
자세한 원인 분석은 `REPORT_2026-08-12_홈페이지_목적과_점검.md`, 결정 로그는 `DECISIONS.md` 참고.

- **SCIENCE 랜딩**: DRIVE 5단계를 클릭해야 뜻이 드러나던 방식(원 5개, 글자만)을 폐기하고
  처음부터 5단계 전부를 카드로 펼쳐서 보여줌 (letter + 단계명 + 한 줄 설명 + 상세 링크).
  클라이언트 상태가 더 이상 필요 없어져 유일한 React 아일랜드였던 `DriveInteractive.tsx` 제거.
  "DRIVE를 영상으로 보기" 버튼(실제로는 "준비 중" 안내만 뜨던 죽은 기능)도 제거.
  PIPELINE 자산 상세의 DRIVE 배지도 빈 글자 원 → "DESIGN"/"EXECUTE" 같은 실제 단어 pill로 교체.
  INTELLIGENCE 랜딩의 SCOPE 5단계도 동일하게 각 단계에 한 줄 설명 추가.
- **초안/프로토타입 문구 전면 제거**: 전 페이지 상단에 뜨던 주황색 "이 페이지는 구조 확인용
  V1 프로토타입입니다" 배너(`PrototypeBanner.astro`) 삭제. Header의 LOGIN 버튼 위 마우스오버
  텍스트에 있던 "V1.5 예정 — 기획안 v2.1 변경 1" 같은 내부 버전 표기 제거. INTELLIGENCE/
  Bio-AI Playground의 "(V1)" 표기 제거. 개인정보처리방침·이용약관 제목의 "(초안)" 및 "법률
  검토 전 초안입니다" 경고문 제거 — 시행일 명시 + 개정 시 갱신한다는 문구로 교체. HEALTH
  4개 질환 본문에 그대로 노출되던 `[TODO_SOURCE]` 작업용 태그 제거 및 문장 재작성(내용 자체는
  일반적인 의학 지식이라 그대로 유지, 태그만 제거). PIPELINE 자산 출처 표기가 "기획안 v2.0
  (초안)"이라는 내부 문서명을 그대로 인용하던 것을 "THPHARM 내부 자료 — 회사 확인 대기"로 수정.
- **내부 전략 문구/편집 지시문 노출 제거**: IR 랜딩 헤드라인 "설득이 아니라, 평가할 수 있는
  증거를"는 기획안 §21.4의 **섹션 제목**이었을 뿐 실제 권장 카피가 아니었음 — 같은 절이 권장한
  실제 카피 "대사질환 치료제를 실제 개발·임상·사업화로 연결합니다"로 교체 (IR 랜딩, Investment
  Highlights, PT MODE 슬라이드 전부 동기화). IR Governance의 "'IPO READY'라는 표현은 사용하지
  않습니다" — 저에게 주는 지시문이 화면에 그대로 노출되고 있던 것을 제거. Vision/People/Science
  Reveal 3개 페이지에 있던 "표현 원칙: ..." 문단(카피라이팅 지침) 전부 제거 또는 방문자용
  문장으로 재작성. INTELLIGENCE eyebrow의 "— SCOPE" 등 내부 프레임명 노출 정리.
- **INTELLIGENCE "출처 및 편집정책" 페이지 재작성**: 기획안 §00.1 내부 콘텐츠 운영 원칙을 거의
  그대로 옮겨놓은 정책 문서였던 것을 4문단짜리 방문자용 안내로 축소 (제목도 "출처 안내"로 변경,
  Footer 링크 라벨도 동일하게 정리). 메타데이터 필드 표(source_type/source_title 등 CMS 스키마)
  삭제 — 방문자에게 무의미한 정보.
- **PIPELINE OVERVIEW 재설계**: 눌러도 아무 반응 없던 장식용 단계 필(Discovery~Regulatory)을
  제거하고, 기획안 §17.3이 원래 요구한 "가로축 = 개발단계, 세로축 = 자산, 현재 위치를 점으로
  표시" 구조를 실제로 구현 (자산별 진행 트랙 + 단계 마커, 카드 전체가 상세 페이지 링크).
- **홈페이지(COMPANY 랜딩) KEY FOCUS 섹션**: "대사질환은 하나씩 오지 않습니다"라는 겁주는
  카피(HEALTH 섹션용 문구가 잘못 재사용됨) 제거, "티에치팜이 집중하는 4대 대사질환"으로 교체.
  질환 카드도 로케일 무관 하드코딩(EN/KR 병기)이었던 것을 실제 4개 언어 콘텐츠 컬렉션에서
  가져오도록 수정하고, 존재하는 4개 질환 상세 페이지로 정확히 링크되도록 수정 (기존에는 3개가
  전부 `/health`로만 연결됨). 질환별 accent 컬러·아이콘도 HEALTH 페이지와 통일.
- `CLAUDE.md`의 React 관련 서술을 "React 아일랜드 0개"로 갱신, `DECISIONS.md` 신규 생성,
  `REPORT_2026-08-12_홈페이지_목적과_점검.md` 신규 작성 (기획안 재검토 결과와 근본 원인 보고).

## v7 (2026-08-12, thpharm-web-source-v7.zip) — 배포 확인 후 1차 QA 피드백 반영

- **Header**: 대메뉴 활성 상태(현재 페이지) 표시 추가 (하단 teal 밑줄 + 굵게, 모바일은 배경 반전). 텍스트 로고 "THPHARM" → 회사 제공 실제 로고 이미지(`public/images/logo.png`)로 교체
- **Footer**: 사업자등록번호(789-87-01821)/주소/전화/팩스/이메일 실제 값 반영 (기존 회사 홈페이지 Footer 스크린샷 기준, APPROVED_FACTS.md에 출처 기록), 로고 이미지 추가, 저작권 연도를 "© 2023" 기준으로 수정
- **전역**: 사용자 화면에 노출되던 "WEB-100/WEB-201/WEB-505 ·" 같은 기획 문서용 화면번호를 전체 페이지·컴포넌트·콘텐츠에서 제거 (56개 파일 점검). 내부 데이터 `code` 필드 자체는 유지하되 화면 렌더링에서만 제거. DRIVE 인터랙션의 "WEB-201 →" 링크 텍스트도 "자세히 보기 →"로 교체
- **HEALTH 질환 상세 페이지**: 텍스트만 나열되어 있던 문제 해결.
  - 질환별 accent 컬러 도입 (비만=teal/당뇨=블루/고혈압=레드/MASH=바이올렛, 브랜드 컬러 확정 전 근사값)
  - 상단에 컬러 그라데이션 배너 + "1분 이해" 카드에 아이콘 배지 추가
  - 4개 섹션(몸에서 일어나는 일/위험요인과 검사/치료의 현재/치료의 변화)에 각각 아이콘 배지 추가
  - "몸에서는 무슨 일이 일어날까?" 섹션에 질환별 자체 제작 SVG 도식 추가 (`HealthBioDiagram.astro`) — 비만(지방세포 비대)/당뇨(인슐린-세포 신호)/고혈압(혈관 압력)/MASH(간 염증) 각각 다른 그림
  - HEALTH 랜딩 카드에도 동일 accent 컬러 + 아이콘 적용해 일관성 확보
- 알려진 한계: 로고는 회사 제공 PNG 래스터본이며 벡터(SVG/AI) 원본은 아직 미확인. 대표자 성명도 미확인.

## v6 (2026-08-12, thpharm-web-source-v6.zip) — v5 빌드 에러 수정

- Netlify 빌드 에러 수정: `health/faq.astro`의 `faqs` 배열(`as const`)에서 `sciencePath` 필드를 일부 항목에만 넣어서, TS가 각 항목을 서로 다른 리터럴 타입으로 추론 → `.map()` 콜백에서 유니온 타입이 되어 `f.sciencePath` 접근 시 "Property does not exist" 에러 발생. 모든 항목에 `sciencePath: false`를 명시적으로 채워 타입을 통일해 해결.
- `science/design.astro`의 미사용 `strings` 변수 정리 (경고성 hint, 빌드 실패 원인은 아니었음).

## v5 (2026-08-12, thpharm-web-source-v5.zip) — 기획안 2.0 전체 콘텐츠 구현 1차

MVP 검증이 끝나고 "회사에서 받아야 할 자료는 빼고 최대한" 기획안 2.0 전체 범위를 구현한 라운드. 페이지 수 21개 → 36개.

- **SCIENCE**: WEB-201~206 6개 서브페이지 신규 (DRUG RE-ENGINEERING/BIO-AI/METABOLIC SCIENCE/TRANSLATIONAL TECHNOLOGY/CLINICAL TRANSLATION/EVIDENCE & IP). DRIVE 인터랙션 클릭 시 실제로 연결됨. SciSubnav 컴포넌트 추가.
- **HEALTH**: WEB-402 당뇨/WEB-403 고혈압/WEB-404 MASH 콘텐츠 신규 (오비시티와 동일 템플릿, 4개 언어, [TODO_SOURCE] 표기). WEB-405 TREATMENT TRENDS, WEB-406 FAQ 페이지 신규. 질환 상세 템플릿에 DOCTOR'S NOTE 렌더링 추가(스키마엔 있었지만 미렌더링이었던 버그 수정).
- **PIPELINE**: WEB-303 THP-004 자산 추가 (GLP-1/MASH 방향, company_confirm 상태). 기존 THP-001과 함께 Overview에 자동 노출.
- **INTELLIGENCE**: WEB-502 THPHARM VIEW 샘플(경구 GLP-1 승인), SCOPE Spotlight 샘플(바이오프린팅) 추가. WEB-505 BIO-AI PLAYGROUND V1 신규 페이지 — GLP1R/GIPR/GCGR/SGLT2/AGTR1 5개 표적을 질환별로 큐레이션해 AlphaFold DB 공식 페이지로 연결(UniProt accession 개별 검색 확인). 실시간 계산·임의 서열 입력 없음, 출처·라이선스 고정 표기.
- **NEWSROOM**: WEB-601 뉴스 상세 템플릿 신규 (WHAT HAPPENED/KEY POINTS/THPHARM NOTE/RELATED/Sources). news 스키마에 keyPoints/thpharmNote/relatedLinks 필드 추가(기존 항목과 호환되도록 전부 optional).
- **IR**: WEB-701~706 6개 서브페이지 신규 (INVESTMENT HIGHLIGHTS/FINANCIAL & OPERATING/CLINICAL COLLABORATION/GOVERNANCE/BUSINESS PARTNERING/IR LIBRARY). IrSubnav 컴포넌트 추가. 실제 수치가 필요한 부분은 전부 [회사 자료 확인 필요]로 명시.
- 알려진 한계: WEB-503 METABOLIC MAP, WEB-504 DATA LAB(WHO/IDF/OECD 등 실제 글로벌 데이터셋 필요), Bio-AI Playground V2/V3(Binding Explorer 등 실시간 계산), PIPELINE COMPARE 기능은 이번 라운드에 포함되지 않음 — 다음 라운드 후보.

## v4 (2026-08-12, thpharm-web-source-v4.zip)

- HeroDark 기본 우측 비주얼을 SVG 다이어그램 → 실제 "바이오 셀" 이미지로 교체
  - 출처: `THPHARM_홈페이지_리뉴얼_기획안_v2.0.docx`에 내장된 원본 홈페이지 목업(image1.png)에서 셀/버블 그래픽 부분만 크롭 (`public/images/hero-cell.png`, 481×364px)
  - 원본이 기획안 자체 첨부 이미지라 별도 라이선스 확인 없이 사내 자산으로 사용. **다만 원본이 1024px 폭 축소본이라 크롭본 해상도가 크지 않음 — 레티나 대형 화면에서 살짝 부드럽게 보일 수 있음.** 정식 고해상도 원본(제작자 보유분)이 있으면 교체 권장
  - 보라/틸 라디얼 글로우 + mask-image로 사각형 이미지 경계를 자연스럽게 페이드아웃 처리해 배경과 블렌딩
  - HeroDark에 `visualImage`(다른 이미지로 교체) / `hideDefaultVisual`(기본 비주얼 끄기) prop 추가 — 페이지별로 다른 이미지를 쓰고 싶을 때 커스텀 없이 prop만 넘기면 됨
- WEB-400 HEALTH: 이전에 넣었던 4대 질환 연결 SVG 다이어그램 제거하고 공통 바이오 셀 이미지로 통일 (질환 태그는 기존 태그 행에 유지)
- COMPANY/PIPELINE/INTELLIGENCE/NEWSROOM/IR 히어로도 자동으로 동일 비주얼 적용됨 (slot 지정 안 한 페이지는 전부 기본값 사용)

## v3 (2026-08-12, thpharm-web-source-v3.zip)

- HeroDark.astro 리디자인 (배포 후 HEALTH 페이지가 밋밋하다는 피드백 반영)
  - 우측 "비주얼 슬롯" 추가 (slot="visual") — 페이지별 커스텀 그래픽을 넣을 수 있는 2컬럼 레이아웃
  - 헤드라인 뒤 라디얼 글로우(teal) 2개로 입체감 부여, 배경 분자 네트워크 텍스처 유지하되 더 은은하게 조정
  - 슬롯 미지정 시에도 기본 글래스 카드로 빈 공간이 남지 않게 처리
- WEB-400 HEALTH 히어로: 비만·당뇨·고혈압·MASH 4개 질환이 중심 노드에 연결된 커스텀 SVG 다이어그램을 비주얼 슬롯에 배치, CTA 버튼 2개(연결된 질환 보기/SOURCE-FIRST 원칙) + 태그 4개 추가, 앵커 이동(#topics)까지 연결
- 나머지 HeroDark 사용처(PIPELINE/INTELLIGENCE/NEWSROOM/IR) 전부 태그 행 추가해 하단 여백 채움 — COMPANY는 기존에 이미 CTA+태그 보유

## v2 (2026-08-12, thpharm-web-source-v2.zip)

- Footer 링크였던 Contact(WEB-105)/Privacy/Terms/Sources 실제 페이지 구현 (v1까지는 전부 404)
- WEB-102 VISION & CAPABILITIES, WEB-103 PEOPLE & EXPERTISE, WEB-104 OUR EVOLUTION 추가
- COMPANY 5개 페이지(About/Vision/People/Evolution/Contact) 간 이동용 서브내비게이션 추가
- WEB-500 INTELLIGENCE: China Bio-AI Watch, AI Partner-ready 샘플 추가 (1차 구현범위 F 항목 완성)

## v1 (2026-08-12, thpharm-web-source.zip) — 실제 Netlify 배포 성공 확인됨

- Astro 프로젝트 스캐폴딩, 콘텐츠 스키마(zod), 공통 레이아웃/i18n
- 7개 대메뉴 전부 최소 1화면: COMPANY(Landing+About), SCIENCE(DRIVE 인터랙션), PIPELINE(Overview+THP-001),
  HEALTH(Obesity), INTELLIGENCE(Research Radar+Bio-AI Atlas), NEWSROOM(필터), IR & PARTNERING
- PT MODE 최소 프로토타입, WEB-801/802 이스터에그 placeholder
- 운영 문서 6종 (CLAUDE.md/APPROVED_FACTS/TERMINOLOGY/CONTENT_OPERATIONS/DEPLOYMENT/RUNBOOK)
- 빌드 버그 2건 수정 (Astro data collection `.slug`→`.id`, `<script>` 안 `{}` 표현식 → `define:vars`,
  `localizedOptional` 스키마의 필드-자체-생략 허용 누락)
