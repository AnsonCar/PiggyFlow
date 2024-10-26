<template>
    <div class="dropdown dropdown-hover">
        <TPButton tabindex="0" size="sm" role="button" icon="language" class="btn-circle btn-ghost" />
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li @click="setLocale('en')"><a>English</a></li>
            <li @click="setLocale('zh')"><a>繁體中文</a></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>
