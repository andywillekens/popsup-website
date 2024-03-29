import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxthq/studio',
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-gtag'
  ],
  routeRules: {
    '/blog/eindelijk-mijn-tool-heeft-een-naam': {
      redirect: { to: '/blog/een-idee-is-geboren', statusCode: 308 }
    },
    '/pre-sale': {
      redirect: { to: '/prijzen', statusCode: 308 }
    },
    '/roadmap': {
      redirect: { to: '/over-ons', statusCode: 308 }
    },
    '/over': {
      redirect: { to: '/over-ons', statusCode: 308 }
    }
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'PopsUp',
      url: 'https://popsup.nl',
      logo: {
        contentUrl: 'https://popsup.nl/assets/images/logo.svg',
        inLanguage: 'nl-NL'
      },
      inLanguage: 'nl-NL'
    }
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  gtag: {
    id: 'G-0GQLHD0016',
    initialConsent: false
  },
  sitemap: {
    strictNuxtContentPaths: true
  },
  site: {
    url: 'https://popsup.nl',
    name: 'PopsUp',
    description:
      'Professionele pop-up formulieren bouwen en integreren in je website, webshop of webapplicatie.',
    indexable: true,
    trailingSlash: false
  },
  ogImage: {
    enabled: true,
    fonts: ['Poppins:400', 'Poppins:500', 'Poppins:700']
  },
  alias: {
    '@': resolve(__dirname, './src')
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
