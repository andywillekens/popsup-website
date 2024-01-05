<script setup lang="ts">
  export interface Integrations {
    title: string
    integrations: [
      {
        title: string
        url: string
        image: string
      }
    ]
  }
  defineProps<Integrations>()
</script>
<template>
  <section
    class="flex flex-col lg:flex-row full-width justify-center items-center gap-10 xl:gap-20 mt-8 sm:mt-16 lg:mt-32 px-4 py-16 bg-white">
    <p class="text-mirage-950 text-md font-head font-medium">
      {{ title }}
    </p>
    <div class="grid grid-cols-2 sm:flex sm:flex-row gap-14 xl:gap-20">
      <template v-for="integration in integrations">
        <NuxtLink
          class="hover:scale-110 hover:-rotate-2 duration-300 flex justify-center"
          :to="integration.url"
          :title="integration.title">
          <NuxtImg class="shrink-0 h-12" :src="`/assets/images/${integration.image}`" />
        </NuxtLink>
      </template>
    </div>
  </section>
</template>
