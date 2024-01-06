<script setup type="ts">
  useHead({
    titleTemplate: '%s %separator %siteName',
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
      }
    ]
  })
  useSeoMeta({
    ogImage: '[og:image]',
    twitterTitle: 'De pop-up tool uit Nederland',
    twitterDescription: 'Professionele pop-up formulieren bouwen en integreren in je website of webshop.',
    twitterImage: '[twitter:image]',
    twitterCard: 'summary'
  })
  defineOgImageComponent('Default', {
    headline: '%siteName',
    title: 'De pop-up tool uit Nederland',
    description: 'Professionele pop-up formulieren bouwen en integreren in je website of webshop.'
  })
</script>
<template>
  <!-- Header -->
  <Header />
  <!-- Content -->
  <ContentDoc :path="$route.path">
    <template v-slot="{ doc }">
      <NuxtLayout :name="doc.layout">
        <ContentRenderer :value="doc" />
      </NuxtLayout>
    </template>
    <!-- 404 -->
    <template #not-found>
      <div>
        <div class="grid content-large items-start">
          <section class="flex flex-col">
            <h1 class="text-7xl text-purple-500">404</h1>
            <h3 class="mb-2">Pagina niet gevonden!</h3>
            <p>Er is iets misgegaan bij het laden van de pagina of de pagina is verplaatst.</p>
            <a href="/"
              ><Icon name="ph:arrow-left-duotone" class="text-purple-500" size="18" /> Terug naar de
              homepage</a
            >
          </section>
        </div>
      </div>
    </template>
  </ContentDoc>
  <!-- Footer -->
  <Footer :path="$route.path" />
</template>
