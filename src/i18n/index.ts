import { en } from './en';
import { ar } from './ar';

export const langs = ['en', 'ar'] as const;
export type Lang = (typeof langs)[number];
/** A bilingual string used throughout src/data. */
export type L = { en: string; ar: string };

const dicts = { en, ar };

export const useT = (lang: Lang) => dicts[lang];
export const tr = (value: L, lang: Lang) => value[lang];
export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');
export const other = (lang: Lang): Lang => (lang === 'ar' ? 'en' : 'ar');

/** Build a localized href: href('ar', 'contact') -> '/ar/contact' */
export const href = (lang: Lang, path = '') => `/${lang}/${path.replace(/^\/+/, '')}`.replace(/\/+$/, '') || '/';

/** getStaticPaths helper for [lang] pages. */
export const langPaths = () => langs.map((lang) => ({ params: { lang } }));

/** Swap the language prefix of the current path. */
export const switchPath = (pathname: string, to: Lang) =>
  pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${to}`) || `/${to}`;
