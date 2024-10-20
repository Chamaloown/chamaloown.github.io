import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@primevue/nuxt-module",
    "@nuxt/icon",
    '@nuxtjs/color-mode',
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n"
  ],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, "./presets/aura/") }, //import and apply preset
  },
  image: {
    // Options
  }
});