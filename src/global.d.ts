export {};

declare global {
  interface Window {
    initialI18nStore?: string;
    initialLanguage?: string;
  }
}
