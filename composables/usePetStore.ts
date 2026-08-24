export type Pet = { id: string; name: string; birthDate: string; image: string; colors: string[]; health: "excellent" | "average" | "bad" }

const seed: Pet[] = []

export function usePetStore() {
  const pets = useState<Pet[]>("pets", () => seed)
  const loaded = useState("pets-loaded", () => false)
  if (import.meta.client && !loaded.value) {
    const saved = localStorage.getItem("mypet-pets")
    if (saved) pets.value = JSON.parse(saved)
    loaded.value = true
  }
  function persist() { if (import.meta.client) localStorage.setItem("mypet-pets", JSON.stringify(pets.value)) }
  function add(pet: Omit<Pet, "id" | "health">) { pets.value.push({ ...pet, id: crypto.randomUUID(), health: "excellent" }); persist() }
  function remove(id: string) { pets.value = pets.value.filter(pet => pet.id !== id); persist() }
  function update(pet: Pet) { const index = pets.value.findIndex(item => item.id === pet.id); if (index >= 0) pets.value[index] = pet; persist() }
  return { pets, add, remove, update }
}
