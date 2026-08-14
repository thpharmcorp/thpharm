// THPHARM 4개 언어 UI 문자열 사전
// v2.1 원칙: 简/日도 UI 문자열까지 실제 번역한다 (placeholder 금지).
// 메뉴명(COMPANY/SCIENCE 등)은 기획안 §5.1 원칙에 따라 4개 언어 공통으로 영어를 유지한다.

export const locales = ['kr', 'en', 'zh-cn', 'jp'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'kr';

// content collection의 localized 필드 키(kr/en/zh_cn/jp)로 매핑
export const localeToFieldKey: Record<Locale, 'kr' | 'en' | 'zh_cn' | 'jp'> = {
  kr: 'kr',
  en: 'en',
  'zh-cn': 'zh_cn',
  jp: 'jp',
};

export const localeLabel: Record<Locale, string> = {
  kr: 'KR',
  en: 'EN',
  'zh-cn': '简',
  jp: 'JP',
};

// 대메뉴는 4개 언어 공통(영어 유지) — 기획안 §03, §5.1
export const nav = [
  { code: 'WEB-100', label: 'COMPANY', path: '' },
  { code: 'WEB-200', label: 'SCIENCE', path: 'science' },
  { code: 'WEB-300', label: 'PIPELINE', path: 'pipeline' },
  { code: 'WEB-400', label: 'HEALTH', path: 'health' },
  { code: 'WEB-500', label: 'INTELLIGENCE', path: 'intelligence' },
  { code: 'WEB-700', label: 'IR & PARTNERING', path: 'ir' },
] as const;

// DRIVE 프레임워크 단일 정의(2026-08-13) — 이전에는 두 세트의 이름이 따로 존재했다:
// SciSubnav의 "역량명"(DRUG RE-ENGINEERING/BIO-AI/METABOLIC SCIENCE/TRANSLATIONAL TECHNOLOGY/
// CLINICAL TRANSLATION)과 사이언스 랜딩·파이프라인 배지의 "단계 동사"(DESIGN/REVEAL/INTERPRET/
// VALIDATE/EXECUTE)가 같은 5개 페이지를 가리키면서도 서로 연결 없이 따로 노출되어 방문자가
// 둘을 같은 것으로 인식할 수 없었다. 이제 이 파일 하나에서 두 이름을 항상 짝지어 내보낸다 —
// science/index.astro, pipeline/[asset].astro 등 DRIVE를 표시하는 모든 곳은 여기서 가져다 쓸 것.
export const driveFramework = [
  {
    letter: 'D',
    stage: 'DESIGN',
    capability: 'DRUG RE-ENGINEERING',
    slug: 'design',
    meaning: {
      kr: '검증된 의약품을 새로운 조합·제형·용법으로 다시 설계합니다',
      en: 'Redesign proven medicines into new combinations, formulations, and dosing regimens',
      'zh-cn': '将成熟药物重新设计为新的复方、剂型与用法',
      jp: '実証済みの医薬品を新たな配合・剤形・用法へと再設計します',
    },
  },
  {
    letter: 'R',
    stage: 'REVEAL',
    capability: 'BIO-AI',
    slug: 'reveal',
    meaning: {
      kr: '구조예측·결합친화도 예측 등 Bio-AI 도구로 약물-질환 관계의 새 가능성을 찾습니다',
      en: 'Use Bio-AI tools — structure prediction, binding-affinity prediction — to reveal new drug-disease relationships',
      'zh-cn': '运用结构预测、结合亲和力预测等Bio-AI工具,发现药物与疾病关系中的新可能性',
      jp: '構造予測・結合親和性予測などのBio-AIツールで、薬物と疾患の関係における新たな可能性を見出します',
    },
  },
  {
    letter: 'I',
    stage: 'INTERPRET',
    capability: 'METABOLIC SCIENCE',
    slug: 'interpret',
    meaning: {
      kr: 'GLP-1·비만·당뇨·MASH 등 대사질환의 생물학적 기전을 이해합니다',
      en: 'Interpret the biological mechanisms of metabolic disease — GLP-1, obesity, diabetes, MASH',
      'zh-cn': '理解GLP-1、肥胖症、糖尿病、MASH等代谢性疾病的生物学机制',
      jp: 'GLP-1・肥満・糖尿病・MASHなど代謝性疾患の生物学的機序を理解します',
    },
  },
  {
    letter: 'V',
    stage: 'VALIDATE',
    capability: 'TRANSLATIONAL TECHNOLOGY',
    slug: 'validate',
    meaning: {
      kr: '바이오프린팅 기반 조직모델 등 사람에 더 가까운 모델로 검증합니다',
      en: 'Validate with models closer to human biology, including bioprinting-based tissue models',
      'zh-cn': '通过生物打印组织模型等更贴近人体的模型进行验证',
      jp: 'バイオプリンティングによる組織モデルなど、より人体に近いモデルで検証します',
    },
  },
  {
    letter: 'E',
    stage: 'EXECUTE',
    capability: 'CLINICAL TRANSLATION',
    slug: 'execute',
    meaning: {
      kr: '제형·CMC·규제 대응을 거쳐 실제 임상 개발로 실행합니다',
      en: 'Execute through formulation, CMC, and regulatory work into real clinical development',
      'zh-cn': '通过剂型、CMC与法规应对,推进至真正的临床开发',
      jp: '剤形・CMC・規制対応を経て、実際の臨床開発へと実行します',
    },
  },
] as const;

type UiDict = {
  ptMode: string;
  login: string;
  loginComingSoon: string;
  skipToContent: string;
  footerAbout: string;
  footerContact: string;
  footerPrivacy: string;
  footerTerms: string;
  footerSources: string;
  footerCopyright: string;
  lastUpdated: string;
  source: string;
  readMore: string;
  companyDataNeeded: string;
};

export const ui: Record<Locale, UiDict> = {
  kr: {
    ptMode: 'PT MODE',
    login: 'LOGIN',
    loginComingSoon: '준비 중인 기능입니다',
    skipToContent: '본문으로 건너뛰기',
    footerAbout: '서비스 소개',
    footerContact: '문의',
    footerPrivacy: '개인정보처리방침',
    footerTerms: '이용약관',
    footerSources: '출처 안내',
    footerCopyright: '© THPHARM Corp. All rights reserved.',
    lastUpdated: '최종 업데이트',
    source: '출처',
    readMore: '자세히 보기',
    companyDataNeeded: '[회사 자료 확인 필요]',
  },
  en: {
    ptMode: 'PT MODE',
    login: 'LOGIN',
    loginComingSoon: 'Coming soon',
    skipToContent: 'Skip to content',
    footerAbout: 'About',
    footerContact: 'Contact',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Use',
    footerSources: 'Sources',
    footerCopyright: '© THPHARM Corp. All rights reserved.',
    lastUpdated: 'Last Updated',
    source: 'Source',
    readMore: 'Read more',
    companyDataNeeded: '[COMPANY DATA NEEDED]',
  },
  'zh-cn': {
    ptMode: 'PT MODE',
    login: '登录',
    loginComingSoon: '即将推出',
    skipToContent: '跳至内容',
    footerAbout: '关于我们',
    footerContact: '联系我们',
    footerPrivacy: '隐私政策',
    footerTerms: '使用条款',
    footerSources: '资料来源',
    footerCopyright: '© THPHARM Corp. All rights reserved.',
    lastUpdated: '最后更新',
    source: '来源',
    readMore: '查看详情',
    companyDataNeeded: '[待公司确认资料]',
  },
  jp: {
    ptMode: 'PT MODE',
    login: 'ログイン',
    loginComingSoon: '近日公開予定',
    skipToContent: '本文へスキップ',
    footerAbout: '会社情報',
    footerContact: 'お問い合わせ',
    footerPrivacy: 'プライバシーポリシー',
    footerTerms: '利用規約',
    footerSources: '出典について',
    footerCopyright: '© THPHARM Corp. All rights reserved.',
    lastUpdated: '最終更新',
    source: '出典',
    readMore: '詳しく見る',
    companyDataNeeded: '[会社資料確認待ち]',
  },
};

export function t(locale: Locale): UiDict {
  return ui[locale];
}

export function localePath(locale: Locale, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  return `/${locale}/${clean}`.replace(/\/+$/, '') || `/${locale}`;
}
