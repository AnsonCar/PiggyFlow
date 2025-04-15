<template>
  <div class="dropdown dropdown-end">
    <TPButton tabindex="0" size="sm" role="button" icon="language" class="btn-circle btn-ghost" title="Change Langage Icon" name="Change Langage Icon" />
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 border-2 border-[#25499A] p-2 shadow">
      <li @click="changeLocale('en')"><a href="#en">English</a></li>
      <li @click="changeLocale('zh-tw')"><a href="#zh_tw">繁體中文</a></li>
      <li @click="changeLocale('zh-cn')"><a href="#zh_cn">简体中文</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/languageStore';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import TPButton from './TPButton.vue';

const { locale } = useI18n();
const language = useLanguageStore();

const changeLocale = (lang: string) => {
  locale.value = lang;
  language.lang = lang;
  language.user = true;

  document.documentElement.lang = language.lang.toLowerCase();
};

onMounted(() => {
  const browserLang = navigator.language.toLowerCase();
  if (language.user) {
    locale.value = language.lang;
    document.documentElement.lang = language.lang.toLowerCase();
  } else {
    const langMap: { [key: string]: string } = {
      'zh-cn': 'zh-CN',
      'zh-tw': 'zh-tw',
      en: 'en',
    };
    const defaultLang = 'zh-tw';
    const matchedLang = Object.keys(langMap).find((key) => browserLang.startsWith(key)) || defaultLang;
    changeLocale(langMap[matchedLang]);
  }
});
</script>
