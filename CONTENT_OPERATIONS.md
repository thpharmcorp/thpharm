# CONTENT_OPERATIONS.md

콘텐츠를 추가·수정·검증·복구할 때 쓰는 표준 절차입니다. 기획안 §37을 이 리포지토리 구조에
맞게 정리한 버전입니다.

## 콘텐츠 위치

| 영역 | 경로 |
|---|---|
| COMPANY Landing/About | `src/content/company-landing/`, `src/content/company-about/` |
| SCIENCE Landing | `src/content/science-landing/` |
| PIPELINE 자산 | `src/content/pipeline/` (파일명 = slug, 예: `thp-001.json`) |
| HEALTH 질환 | `src/content/health/` (`slug` 필드가 URL이 됨) |
| INTELLIGENCE (Research Radar / THPHARM View / Bio-AI Atlas) | `src/content/intelligence/` |
| NEWSROOM | `src/content/news/` |
| IR & PARTNERING | `src/content/ir/` |

스키마는 `src/content/config.ts`에서 zod로 강제됩니다. 필수 필드가 비어 있으면 빌드가 실패합니다
(이것이 의도된 동작입니다 — "언어 누락"이나 "출처 없는 사실"을 빌드 시점에 잡아냅니다).

## 표준 명령 4개 (운영자가 Claude에게 그대로 쓰는 문장)

**추가**
> "오늘 자료 중 THPHARM과 관련성 높은 논문/뉴스 1건을 찾아 WEB-501(또는 WEB-600) 후보로 만들어줘.
> 원출처·발표일·DOI·KR/EN/简/JP 요약·태그까지 채우고, status는 company_confirm으로 두고
> 아직 published로 바꾸지 마."

**수정**
> "WEB-302(THP-001)의 개발단계를 첨부 자료 기준으로 업데이트해줘. 기존 값과 충돌하면
> 임의로 덮어쓰지 말고 어떤 값이 왜 다른지 먼저 보고해줘."

**검증**
> "src/content 전체를 훑어서 4개 언어 필드 중 비어 있거나 [TODO_TRANSLATION]으로 남은 것,
> sourceMeta.last_verified가 3개월 넘은 것, status가 company_confirm인 채로 남아있는 것을
> 표로 정리해줘."

**복구**
> "직전 정상 커밋과 지금 상태의 diff를 보여주고, 문제가 된 파일만 되돌려줘."

## 게시 전 검수 게이트 (기획안 §5.2)

COMPANY / PIPELINE / CLINICAL / IR 같은 "중요 고정 페이지"는 `status: "published"`로 바꾸기 전에
반드시 사람이 다음을 확인합니다:

1. 전문용어·수치·법적 표현이 정확한가 (특히 EN/简/JP 번역)
2. sourceMeta가 채워져 있고 링크가 살아있는가
3. `[COMPANY DATA NEEDED]` / `[TODO_SOURCE]`가 실제 값으로 교체됐는가

NEWSROOM/Research Radar처럼 반복 발행되는 콘텐츠는 KR 원문만 사람이 보고, EN/简/JP는
표본 QA(월 1회)로 운영해 검수 비용을 낮춥니다 (기획안 §5.2).

## 큐레이션 워크플로 (v2.1 변경 3 — 자동 배치 아님)

주 3편(Research Radar 1 + THPHARM View 1 + SCOPE Spotlight 1)은 스케줄러가 아니라
**대표가 매주 직접 Claude에게 명령해서** 트리거합니다. 방문자 runtime에서 LLM을 호출하지
않는다는 기술 원칙(CLAUDE.md)과 일치시키기 위함입니다.

## sourceMeta 필요 여부

- Research Radar / THPHARM View / SCOPE Spotlight / NEWSROOM / PIPELINE 상태값: **사실상 필수**
- Bio-AI Atlas 카드처럼 여러 공개 모델을 개괄 소개하는 콘텐츠: 선택 (schema상 optional)
- COMPANY/SCIENCE의 서술형 카피(비전, 스토리): sourceMeta 대신 `status`로 검증 상태 표시
