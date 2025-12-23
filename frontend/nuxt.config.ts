import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/seo', '@nuxt/content', '@nuxt/image', '@nuxt/icon', '@nuxt/fonts'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  content: {
    renderer: {
      anchorLinks: false
    }
  },
  site: {
    url: 'https://popsup.andywillekens.nl',
    name: 'PopsUp',
    description:
      'Professionele pop-up formulieren bouwen en integreren in je website, webshop of webapplicatie.',
    indexable: true,
    trailingSlash: false
  },
  app: {
    head: {
      templateParams: {
        separator: '-'
      },
      charset: 'utf-8',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
      ]
    }
  }
})
