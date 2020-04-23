import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import ru from './locales/ru.json'
import en from './locales/en.json'
import he from './locales/he.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: en
      },
      ru: {
        translations: ru
      },
      he: {
        translations: he
      }
    },
    fallbackLng: 'en',
    lng: localStorage.getItem('i18nextLng') || 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
