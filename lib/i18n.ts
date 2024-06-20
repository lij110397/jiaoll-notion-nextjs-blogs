// create a il8n instance
import dotenv from 'dotenv'
dotenv.config()
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector';
// console.log('LANGUAGE_LOAD_PATH:', process.env.NEXT_PUBLIC_LANGUAGE_LOAD_PATH)
const languageLoadPath =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_LANGUAGE_LOAD_PATH
    : 'http://localhost:3000/locales/{{lng}}/{{ns}}.json'
// console.log('languageLoadPath:', languageLoadPath)
i18n
  .use(HttpApi) // 加载翻译文件
  // .use(LanguageDetector) // 自动检测语言
  .use(initReactI18next) // 初始化 react-i18next
  .init({
    fallbackLng: ['en', 'zh'],
    supportedLngs: ['en', 'zh'],
    debug: true,
    // detection: {
    //   order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    //   caches: ['localStorage', 'cookie'],
    // },
    backend: {
      // loadPath: '/locales/{{lng}}/{{ns}}.json', // 语言文件路径
      loadPath: languageLoadPath
    }
  })

export default i18n
