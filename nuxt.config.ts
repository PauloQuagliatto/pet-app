export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "pt-BR" },
      title: "MyPet",
      meta: [{ name: "description", content: "App para cuidar dos seus pets" }],
      link: [{ rel: "manifest", href: "/manifest.json" }]
    }
  },
  typescript: { strict: true, typeCheck: false }
})
