<script setup lang="ts">
  // Sort by title ascending
  const list = await queryContent('blog').sort({ date: -1 }).find()
</script>
<template>
  <section class="border-t border-white/10 mt-4 mb-32 py-4 flex flex-col gap-4">
    <template v-if="!list.length">Geen blog berichten gevonden..</template>
    <template v-for="article in list" :key="article._path">
      <section v-if="article._path !== '/blog'" class="border-b pb-4 border-black/10">
        <span class="text-base text-white/40">{{
          article.date.split('-').reverse().join('-')
        }}</span>
        <NuxtLink :to="article._path" class="no-underline text-current">
          <h2 class="text-lg mb-2">{{ article.title }}</h2>
          <p class="text-mirage-700">{{ article.description }}</p>
        </NuxtLink>
        <NuxtLink :to="article._path">Lees verder</NuxtLink>
      </section>
    </template>
  </section>
</template>
