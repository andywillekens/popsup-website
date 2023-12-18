import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  alias: {
    '@': resolve(__dirname, './src')
  },
  srcDir: 'src',
  tailwindcss: {
    cssPath: '~/styles/tailwind.scss'
  }
})
