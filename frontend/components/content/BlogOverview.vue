<script setup lang="ts">
  const { data: list } = await useAsyncData('blog-list', async () => {
    const allItems = await queryCollection('content').all()

    const blogPosts = (allItems || [])
      .filter((item: any) => {
        const path = item.path || ''
        return path.startsWith('/blog/') && path !== '/blog' && path !== '/blog.md'
      })
      .sort((a: any, b: any) => {
        const dateA = a.meta?.date || ''
        const dateB = b.meta?.date || ''
        return dateB.localeCompare(dateA)
      })
    return blogPosts
  })
</script>
<template>
  <section class="border-t border-white/10 mt-4 mb-32 py-4 flex flex-col gap-4">
    <template v-if="!list || !list.length">Geen blog berichten gevonden..</template>
    <template v-for="article in list" :key="article.path">
      <section v-if="article.path !== '/blog'" class="border-b pb-4 border-black/10">
        <span class="text-base text-gray-800">{{
          new Date(article?.meta?.date as string).toLocaleDateString('nl-NL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })
        }}</span>
        <NuxtLink :to="article.path" class="no-underline text-current">
          <h2 class="text-lg mb-2">{{ article.title }}</h2>
          <p class="text-mirage-700">{{ article.description }}</p>
        </NuxtLink>
        <NuxtLink :to="article.path">Lees verder</NuxtLink>
      </section>
    </template>
  </section>
</template>
