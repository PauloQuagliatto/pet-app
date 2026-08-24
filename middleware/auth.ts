export default defineNuxtRouteMiddleware(() => {
  if (import.meta.client && !localStorage.getItem("mypet-user")) return navigateTo("/")
})
