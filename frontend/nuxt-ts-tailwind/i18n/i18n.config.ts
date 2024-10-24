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
        en: {
            welcome: 'Welcome'
        },
        zh: {
            welcome: '你好'
        },
        'zh-CN': {
            welcome: '你好'
        }
    }
}))