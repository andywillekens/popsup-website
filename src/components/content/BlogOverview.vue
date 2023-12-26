<template>
  <section class="border-t border-white/10 mt-4 mb-32 py-4 flex flex-col gap-4">
    <ContentList path="/blog">
      <template #default="{ list }">
        <template v-for="article in list" :key="article._path">
          <section v-if="article._path !== '/blog'" class="border-b pb-4 border-white/10">
            <span class="text-base text-white/40">{{ article.date }}</span>
            <NuxtLink :to="article._path" class="no-underline text-current">
              <h2 class="text-lg mb-2">{{ article.title }}</h2>
              <p class="text-gray-400">{{ article.description }}</p>
            </NuxtLink>
            <NuxtLink :to="article._path">Lees verder</NuxtLink>
          </section>
        </template>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </section>
</template>
