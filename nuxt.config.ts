// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/styles','@mdi/font/css/materialdesignicons.min.css',],
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {
      title: "nuxt3",
      meta: [
        { name: "description", content: "details" },
      ]
    }
  },
});
