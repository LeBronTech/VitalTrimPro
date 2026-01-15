export type Language = 'en' | 'pt';

export interface TranslationContent {
  header: {
    logoText: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    cta: string;
    videoOverlay: string;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  trust: {
    title: string;
    description: string;
    guaranteeTitle: string;
    guaranteeText: string;
  };
  footer: {
    disclaimer: string;
    copyright: string;
  };
}

export interface Translations {
  en: TranslationContent;
  pt: TranslationContent;
}