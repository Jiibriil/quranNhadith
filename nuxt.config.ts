// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-api-party",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxtjs/kinde"
  ]
})
