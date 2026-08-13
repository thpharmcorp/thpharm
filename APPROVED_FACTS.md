# APPROVED_FACTS.md

확인된 THPHARM 회사 사실만 출처와 함께 여기 기록합니다. 확인되지 않은 값은 이 파일에 넣지 않고
콘텐츠에 `[COMPANY DATA NEEDED]`로 표시한 채 둡니다.

## 전략 프레임 (기획안 확정사항)

- SCIENCE = DRIVE: Design → Reveal → Interpret → Validate → Execute
- INTELLIGENCE = SCOPE: Scan → Connect → Organize → Perspective → Explore
- IR/경영 보조 프레임 SCALE: Signal · Capital Discipline · Alliance · Listing Readiness · Execution
  (외부 노출은 최소화, 내부/IR 보조 프레임으로만 사용)
- 대메뉴 7개: COMPANY / SCIENCE / PIPELINE / HEALTH / INTELLIGENCE / NEWSROOM / IR & PARTNERING
- 언어 4개: KR(원문 기준) / EN / 简(zh-CN) / JP
- 파이프라인 자산: THP-001, THP-004 (기획안 §03) — 세부 적응증/개발단계는 미확인, `company_confirm` 상태

## 확인된 사실

- **법인명**: (주)티에치팜 / THPharm — 출처: 회사 제공 기존 홈페이지 Footer 스크린샷, 확인 2026-08-12
- **사업자등록번호**: 789-87-01821 — 상동
- **주소**: (28160) 충청북도 청주시 흥덕구 오송읍 오송생명1로 194-25, 3층 A-06호 (청주 SB플라자) — 상동
- **전화**: 070-8657-2278 / **팩스**: 070-4833-2271 — 상동
- **이메일**: admin@thpharm.co.kr — 상동
- **로고 원본**: 회사 제공 PNG (`public/images/logo.png`, 아이콘+워드마크, 흰/밝은 배경용) — 확인 2026-08-12.
  다만 벡터(SVG/AI) 원본과 정확한 브랜드 컬러 hex 값은 아직 미확인 — tailwind.config.mjs의 thp-navy/thp-teal 등은 로고를 보고 근사시킨 임시값
- **저작권 표기**: 기존 홈페이지 기준 "© 2023 THPharm Corp. All rights reserved." — 설립/서비스 시작연도가 2023년일 가능성, 정확한 법인 설립일은 별도 확인 필요
- **대표자 성명**: 한태희 — 출처: "티에치팜, 중소벤처기업부 '딥테크 TIPS' 선정", 한국경제(Hankyung), 2026-07-28
  (https://www.hankyung.com/article/202607278175O). 기사 본문에 "대표 한태희"로 명시, 대표 본인 발언도 직접 인용됨.
  다만 영문 표기(Tae-hee Han 등)와 정확한 직함(대표이사/CEO 등 공식 등기상 표기)은 별도 확인 필요.

## 미확인 — 회사 확인 대기 중 (COMPANY INPUT 체크리스트, 기획안 §COMPANY INPUT)
- [ ] 로고 벡터 원본(SVG/AI) 및 정확한 브랜드 컬러 hex 코드
- [ ] 임직원·핵심인력 명단과 경력 (WEB-103 PEOPLE & EXPERTISE)
- [ ] Clinical Advisory Board 명단 및 사진/소속 사용 권한
- [ ] THP-001 적응증·성분·개발단계·다음 마일스톤
- [ ] THP-004 관련 전체 정보
- [ ] 최근 3~5년 매출/재무 수치
- [ ] IR Deck / Fact Sheet / 감사보고서 원본
- [ ] 특허·논문·학회 발표 목록
- [ ] 공식 테마송(WEB-801) / 브랜드 필름(WEB-802) 원본 파일과 사용권
- [ ] 공식 운영 SNS 채널 (없으면 Footer에 아이콘 추가하지 않음)

이 목록이 채워지는 대로 각 항목을 이 파일 상단 "확인된 사실" 섹션으로 옮기고, 해당 콘텐츠 JSON의
`status`를 `company_confirm` → `published`로, 텍스트의 `[COMPANY DATA NEEDED]`를 실제 값으로 교체합니다.
