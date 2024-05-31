// create a il8n instance
import i18n from'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // 加载翻译文件
  // .use(LanguageDetector) // 自动检测语言
  .use(initReactI18next) // 初始化 react-i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    // detection: {
    //   order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    //   caches: ['localStorage', 'cookie'],
    // },
    backend: {
      // loadPath: '/locales/{{lng}}/{{ns}}.json', // 语言文件路径
      loadPath:'http://localhost:3000/locales/{{lng}}/{{ns}}.json' || process.env.LANGUAGE_LOAD_PATH,
    }
  });

export default i18n;