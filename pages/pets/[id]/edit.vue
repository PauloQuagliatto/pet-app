<script setup lang="ts">
definePageMeta({ middleware: "auth" })
const route = useRoute(); const router = useRouter(); const { pets, update } = usePetStore(); const pet = computed(() => pets.value.find(item => item.id === route.params.id)); const form = reactive({ name: pet.value?.name ?? "", birthDate: pet.value?.birthDate ?? "", image: pet.value?.image ?? "", colors: pet.value?.colors ?? [""] })
function submit() { if (pet.value) update({ ...pet.value, ...form }); router.push("/pets") }
</script>
<template><section v-if="pet" class="card"><h1 class="page-title">Editar {{ pet.name }}</h1><form class="stack" @submit.prevent="submit"><div class="field"><label>Nome</label><input v-model="form.name" required></div><div class="field"><label>Data de nascimento</label><input v-model="form.birthDate" type="date" required></div><div class="field"><label>Cores</label><input v-for="(_, index) in form.colors" :key="index" v-model="form.colors[index]"></div><button class="button full">Salvar alterações</button></form></section><p v-else class="notice">Pet não encontrado.</p></template>
