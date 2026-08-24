<script setup lang="ts">
definePageMeta({ middleware: "auth" })
const { pets, remove } = usePetStore()
function date(value: string) { return new Date(value).toLocaleDateString("pt-BR") }
</script>
<template><section class="stack"><div class="row"><h1 class="page-title">Meus Pets</h1><NuxtLink class="button" to="/pets/new">＋ Adicionar Pet</NuxtLink></div><p v-if="!pets.length" class="notice">Não há pets cadastrados.</p><article v-for="pet in pets" :key="pet.id" class="pet-row"><div class="pet-meta"><img v-if="pet.image" class="avatar" :src="pet.image" alt="Foto do pet"><div v-else class="avatar">🐾</div><div><strong>{{ pet.name }}</strong><div class="muted">{{ date(pet.birthDate) }}</div></div><span class="health" :class="pet.health" /></div><div class="actions"><NuxtLink class="button" :to="`/pets/${pet.id}/edit`">Editar</NuxtLink><button class="button danger" @click="remove(pet.id)">Excluir</button></div></article></section></template>
