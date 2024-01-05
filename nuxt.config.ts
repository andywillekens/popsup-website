import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxthq/studio', '@nuxt/image', 'nuxt-icon'],
  alias: {
    '@': resolve(__dirname, './src')
  },
  app: {
    head: {
      charset: 'utf-8',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  srcDir: 'src',
  tailwindcss: {
    cssPath: '~/styles/tailwind.scss'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  content: {
    markdown: {
      anchorLinks: false
    },
    navigation: {
      fields: ['navigation']
    }
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  }
})
