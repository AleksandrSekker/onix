import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import english from './en/translation';
import russian from './ru/translation';
import ukranian from './ua/translation';

const data = {
  en: {
    translation: english
  },
  ru: {
    translation: russian
  },
  uk: {
    translation: ukranian
  }
};
const fallbackLng: string = 'en';
const availableLanguages: string[] = ['en', 'ru', 'uk'];

const options: {
  order: string[];
  lookupLocalStorage: string;
  caches: string[];
  checkWhitelist: boolean;
} = {
  order: ['localStorage', 'navigator'],
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage'],
  checkWhitelist: true
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    whitelist: availableLanguages,
    detection: options,
    resources: data,
    interpolation: { escapeValue: false },
  });
export default i18n;
