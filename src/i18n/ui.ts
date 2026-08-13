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
