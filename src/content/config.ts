import { defineCollection, z } from 'astro:content';

/**
 * THPHARM 콘텐츠 스키마 — SOURCE-FIRST 원칙 (기획안 §00.1) 구현
 *
 * 설계 원칙:
 * 1) 페이지를 4벌 복제하지 않는다 — 모든 텍스트는 하나의 엔트리 안에 kr/en/zh_cn/jp 4개 필드로 존재한다.
 * 2) 4개 필드는 항상 전부 채운다(빈 문자열 금지). 아직 번역이 없으면 "[TODO_TRANSLATION]" 같은
 *    명시적 placeholder 문자열을 넣어 빌드 시점에 "언어 누락"을 눈으로 바로 알 수 있게 한다.
 * 3) 사실성 콘텐츠(파이프라인 상태, 뉴스, 논문 해설, IR 수치 등)는 sourceMeta 필수.
 *    회사 정체성/비전 같은 서술형 콘텐츠는 sourceMeta 없이도 허용하되 status로 검증 상태를 표시한다.
 * 4) status: draft(작성중) / company_confirm(회사 사실확인 대기) / todo_source(출처 보강 필요) / published(게시 가능)
 *    published 이외 상태는 사이트에 노출하지 않는다 (컴포넌트단에서 필터링).
 */

// 4개 언어 동등 관리 (기획안 §05). URL 세그먼트는 /kr /en /zh-cn /jp.
const localized = z.object({
  kr: z.string().min(1),
  en: z.string().min(1),
  zh_cn: z.string().min(1),
  jp: z.string().min(1),
});

// 필드 자체가 없어도 되는 경우 사용 (예: 아직 없는 보조 카피, Atlas 카드의 thpharmView).
// 객체 내부 4개 언어도 optional이지만, .optional()을 바깥에도 걸어야 필드 자체 생략이 허용된다 —
// 이걸 빠뜨려서 실제 빌드 에러가 난 적이 있으니 (2026-08-12) 항상 이 상수를 통해서만 사용할 것.
const localizedOptional = z
  .object({
    kr: z.string().optional(),
    en: z.string().optional(),
    zh_cn: z.string().optional(),
    jp: z.string().optional(),
  })
  .optional();

// SOURCE-FIRST 필드 세트 (기획안 §00.1 표 그대로)
const sourceMeta = z.object({
  source_type: z.enum([
    'Official',
    'Journal',
    'Preprint',
    'Clinical Registry',
    'Patent',
    'Government Data',
    'Media',
    'THPHARM Official',
  ]),
  source_title: z.string(),
  publisher: z.string().optional(),
  published_at: z.string().optional(), // ISO date, 원문 발표일
  source_url: z.string().url().optional(),
  doi: z.string().optional(),
  accessed_at: z.string().optional(), // THPHARM이 확인한 날짜
  last_verified: z.string(), // 마지막 재검증 날짜 — 필수
  visual_source: z.string().optional(), // 그래프/Figure 출처+라이선스
  reviewed_by: z.string().optional(),
  peer_review_status: z.enum(['peer-reviewed', 'preprint', 'not-applicable']).optional(),
});

const contentStatus = z.enum(['draft', 'company_confirm', 'todo_source', 'published']);

// 해시태그 — label만 있으면 내부 필터로만 동작하고, url이 있으면 외부(또는 내부 다른 페이지)로
// 바로 연결되는 링크형 태그가 된다. url은 실제로 확인된 것만 채운다 (2026-08-13, INTELLIGENCE/NEWSROOM 통합).
const linkedTag = z.object({
  label: z.string(),
  url: z.string().url().optional(),
});

// ---- WEB-100 COMPANY ------------------------------------------------------

const companyLanding = defineCollection({
  type: 'data',
  schema: z.object({
    code: z.literal('WEB-100'),
    status: contentStatus,
    heroEyebrow: localizedOptional, // 보조 영문 태그 (예: RE-ENGINEERING METABOLIC MEDICINES)
    heroTitle: localized,
    heroSubtitle: localizedOptional, // 기획안에 두 개의 메인카피 후보가 있어 보조 카피로 수용
    heroBody: localized,
    // keywordStrip(흐린 태그 나열)과 정적 proofPoints는 2026-08-13 사용자 피드백으로 제거.
    // "증거"는 이제 히어로 아래 INTELLIGENCE 최신 항목을 실시간으로 보여주는 방식으로 대체한다
    // (index.astro에서 getCollection('intelligence')로 직접 조회, 별도 필드 불필요).
    ctaPrimary: localized,
    ctaSecondary: localized,
    lastUpdated: z.string(),
  }),
});

const companyAbout = defineCollection({
  type: 'data',
  schema: z.object({
    code: z.literal('WEB-101'),
    status: contentStatus,
    sectionTitle: localized,
    lead: localized,
    storySteps: z
      .array(
        z.object({
          label: localized, // RE-ENGINEER / DISCOVER WITH DATA / EXPAND
          body: localized,
        })
      )
      .default([]),
    developmentEngine: z.array(localized).default([]), // Drug Re-engineering → Bio-AI & Data → ...
    lastUpdated: z.string(),
  }),
});

// ---- WEB-200 SCIENCE (스키마만 우선 정의, 콘텐츠는 후속 작업) --------------

const scienceLanding = defineCollection({
  type: 'data',
  schema: z.object({
    code: z.literal('WEB-200'),
    status: contentStatus,
    heroTitle: localized,
    heroBody: localized,
    driveStages: z
      .array(
        z.object({
          letter: z.enum(['D', 'R', 'I', 'V', 'E']),
          stage: z.enum(['DESIGN', 'REVEAL', 'INTERPRET', 'VALIDATE', 'EXECUTE']),
          meaning: localized,
          linkedPage: z.string(), // 예: WEB-201
        })
      )
      .default([]),
    lastUpdated: z.string(),
  }),
});

// ---- WEB-300 PIPELINE -----------------------------------------------------

const pipeline = defineCollection({
  type: 'data',
  schema: z.object({
    code: z.string(), // WEB-302 등
    assetId: z.string(), // THP-001
    status: contentStatus,
    indication: localized,
    stage: z.enum([
      'Discovery',
      'Preclinical',
      'Phase 1',
      'Phase 2',
      'Phase 3',
      'Regulatory',
    ]),
    heroTagline: localized,
    unmetNeed: localized,
    approach: localized,
    differentiation: localized,
    nextMilestone: localized,
    driveStagesApplied: z.array(z.enum(['DESIGN', 'REVEAL', 'INTERPRET', 'VALIDATE', 'EXECUTE'])).default([]),
    sourceMeta,
    lastUpdated: z.string(),
  }),
});

// ---- WEB-400 HEALTH --------------------------------------------------------

const health = defineCollection({
  type: 'data',
  schema: z.object({
    code: z.string(), // WEB-401 등
    slug: z.string(), // obesity
    status: contentStatus,
    title: localized,
    oneMinuteSummary: localized,
    whatHappensInBody: localized,
    riskAndScreening: localized,
    currentTreatment: localized,
    treatmentChanges: localized,
    doctorsNote: z
      .object({
        question: localized,
        answer: localized,
        reviewer: z.string().optional(),
        lastReviewed: z.string().optional(),
      })
      .optional(),
    mythVsFact: z
      .array(
        z.object({
          myth: localized,
          fact: localized,
        })
      )
      .default([]),
    medicalReviewer: z.string().optional(),
    lastVerified: z.string(),
  }),
});

// ---- WEB-500 INTELLIGENCE (2026-08-13부터 구 WEB-600 NEWSROOM 흡수) ----------
//
// NEWSROOM은 INTELLIGENCE로 통합됐다 — 뉴스/연구신호/THPHARM 관점/Bio-AI 기술 카드가
// 화면상 거의 동일한 모양이라 메뉴를 나눠둘 이유가 없다는 판단 (2026-08-13 결정, DECISIONS.md).
// kind: 'news'는 구 news 컬렉션의 필드(keyPoints/relatedLinks/newsType/region/year)를 그대로 흡수.

const relatedLink = z.object({
  label: z.string(), // 예: "SCIENCE — VALIDATE"
  href: z.string(), // 예: "/science/validate" (locale 접두사 없이, 페이지에서 조합)
});

const intelligence = defineCollection({
  type: 'data',
  schema: z.object({
    code: z.string(),
    // 2026-08-13: 'paper' 추가 — 저널/프리프린트 원문을 직접 요약하는 항목 전용 (research_radar와 구분).
    kind: z.enum(['research_radar', 'thpharm_view', 'scope_spotlight', 'bio_ai_atlas_card', 'news', 'paper']),
    status: contentStatus,
    title: localized,
    dek: localized, // 부제 — news 항목은 한 줄 요약으로 사용
    relevance: z.enum(['Direct', 'Related', 'Watch']).optional(),
    body: localized,
    thpharmView: localizedOptional,
    whatToWatch: localizedOptional,
    // 뉴스 상세 템플릿에서 쓰던 필드 — 다른 kind에도 선택적으로 허용
    keyPoints: z.array(localized).default([]),
    relatedLinks: z.array(relatedLink).default([]),
    // kind: 'news' 전용 분류 필드 (구 news.type/region/year)
    newsType: z.enum(['Company', 'Industry', 'Regulatory', 'Clinical', 'Publication']).optional(),
    region: z.string().optional(),
    year: z.number().optional(),
    // 해시태그 — label만 있으면 내부 필터, url이 있으면 외부(기사 원문/공식 사이트/유튜브/블로그 등)로 직접 연결
    tags: z.array(linkedTag).default([]),
    // research_radar/thpharm_view/scope_spotlight/news는 실제 논문·뉴스이므로 sourceMeta 필수급으로 채운다.
    // bio_ai_atlas_card처럼 여러 공개 모델을 개괄 소개하는 콘텐츠는 optional 허용 (CONTENT_OPERATIONS.md 참고).
    sourceMeta: sourceMeta.optional(),
    publishedAt: z.string(),
  }),
});

// ---- WEB-700 IR & PARTNERING --------------------------------------------------

const ir = defineCollection({
  type: 'data',
  schema: z.object({
    code: z.string(),
    status: contentStatus,
    title: localized,
    docType: z.enum(['Earnings', 'Audit', 'IR Deck', 'Fact Sheet', 'Clinical Update', 'Governance']),
    fiscalYear: z.string().optional(),
    fileUrl: z.string().optional(), // [COMPANY DATA NEEDED] 실제 PDF 업로드 전까지 비움
    sourceMeta: sourceMeta.optional(),
    publishedAt: z.string(),
  }),
});

export const collections = {
  'company-landing': companyLanding,
  'company-about': companyAbout,
  'science-landing': scienceLanding,
  pipeline,
  health,
  intelligence,
  ir,
};
