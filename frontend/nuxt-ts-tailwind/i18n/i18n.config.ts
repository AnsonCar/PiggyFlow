import { basis as zh } from './zh_tw/index'
import { basis as en } from './en/index'
import { basis as zh_cn } from './zh_cn/index'

export default defineI18nConfig(() => ({
    legacy: false,
    defaultLocale: 'zh',
    fallbackLocale: 'zh',
    locales: [
        { code: 'en', iso: 'en-US' },
        { code: 'zh', iso: 'zh-TW' },
        { code: 'zh-CN', iso: 'zh-CN' }
    ],
    messages: {
        en: en,
        zh: zh,
        'zh-CN': zh_cn
    }
}))