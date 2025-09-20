<template>
  <div>
    <button v-for="locale in locales" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <NuxtLink :to="$localePath('index')">{{ $t('home') }}</NuxtLink>
    <NuxtLink :to="$localePath('index', 'en')">Homepage in English</NuxtLink>
    <NuxtLink :to="$localePath('user-profile')">Route to {{ $t('profile') }}</NuxtLink>

    <h1>{{ $t('welcome') }}</h1>
  </div>
</template>

<script setup>
  const { locales, setLocale } = useI18n()
</script>
