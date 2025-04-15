import { createI18n } from 'vue-i18n';
import { basis as en } from './en/index';
import { basis as zh_cn } from './zh-CN/index';
import { basis as zh_tw } from './zh-TW/index';

const defineI18nConfig = {
  legacy: false,
  defaultLocale: 'zh-tw',
  fallbackLocale: 'zh-tw',
  locales: [
    { code: 'en', iso: 'en-us' },
    { code: 'zh-tw', iso: 'zh-tw' },
    { code: 'zh-cn', iso: 'zh-cn' },
  ],
  messages: {
    en: en,
    'zh-tw': zh_tw,
    'zh-cn': zh_cn,
  },
};

export const i18n = createI18n(defineI18nConfig);
