<script setup lang="ts">
const open = ref(false)
const links = [["Inicio", "/dashboard"], ["Diario", "/diary"], ["Meus Pets", "/pets"], ["Vacinas", "/vaccination"]]
function logout() { localStorage.removeItem("mypet-user"); navigateTo("/") }
</script>
<template>
  <header class="topbar"><div class="topbar-inner"><button class="button" @click="open = !open">{{ open ? 'Fechar' : 'Menu' }}</button><nav v-if="open" class="menu"><NuxtLink v-for="link in links" :key="link[1]" :to="link[1]">{{ link[0] }}</NuxtLink></nav><span aria-label="MyPet">MyPet</span><button class="button secondary" @click="logout">Sair</button></div></header>
</template>
