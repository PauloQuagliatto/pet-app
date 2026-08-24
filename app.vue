<script setup lang="ts">
const route = useRoute()
const isPublic = computed(() => route.path === "/" || route.path === "/sign-up")
</script>

<template>
  <div :class="{ 'public-shell': isPublic, 'app-shell': !isPublic }">
    <AppHeader v-if="!isPublic" />
    <main :class="{ 'page-content': !isPublic }"><NuxtPage /></main>
    <AppFooter v-if="!isPublic" />
  </div>
</template>
