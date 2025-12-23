<script setup lang="ts">
  useHead({
    templateParams: {
      blogCategory: 'Blog'
    },
    titleTemplate: '%blogCategory %separator %s %separator %siteName'
  })

  const route = useRoute()
  const { data } = await useAsyncData('blog', () => queryContent(route.fullPath).findOne())
</script>
<template>
  <main id="blogPage" class="content mt-16 flex flex-col gap-2">
    <!-- Title -->
    <h1>{{ data?.title }}</h1>
    <section class="flex flex-col mb-4">
      <!-- Author -->
      <span class="text-base text-gray-800">Auteur: {{ data?.author }}</span>
      <!-- Date -->
      <span class="text-base text-gray-800"
        >Datum: {{ data?.date.split('-').reverse().join('-') }}</span
      >
    </section>
    <!-- Content -->
    <slot />
    <!-- Back to overview -->
    <section class="border-t border-white/10 mt-4 mb-16 py-4 flex flex-col gap-4">
      <NuxtLink to="/blog">Terug naar het overzicht</NuxtLink>
    </section>
  </main>
</template>
