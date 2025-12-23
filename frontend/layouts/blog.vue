<script setup lang="ts">
  useHead({
    templateParams: {
      blogCategory: 'Blog'
    },
    titleTemplate: '%blogCategory %separator %s %separator %siteName'
  })

  const route = useRoute()
  const { data } = await useAsyncData('blog', () =>
    queryCollection('content').path(route.path).first()
  )

  // Type assertion for custom frontmatter fields
  const blogPost = data.value as typeof data.value & { author?: string; date?: string }
</script>
<template>
  <main id="blogPage" class="content mt-16 flex flex-col gap-2">
    <!-- Title -->
    <h1>{{ blogPost?.title }}</h1>
    <section class="flex flex-col mb-4">
      <!-- Author -->
      <span class="text-base text-gray-800">Auteur: {{ blogPost?.meta?.author }}</span>
      <!-- Date -->
      <span class="text-base text-gray-800"
        >Datum:
        {{
          new Date(blogPost?.meta?.date as string).toLocaleDateString('nl-NL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })
        }}</span
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
