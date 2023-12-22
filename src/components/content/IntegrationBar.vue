<script setup lang="ts">
  type Integration = {
    title: string
    url: string
    image: string
    width: number
  }

  const props = defineProps({
    integrations: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: ''
    }
  })
</script>
<template>
  <section
    class="flex flex-row full-width justify-center items-center gap-20 mt-32 py-16 bg-mirage-900">
    <p>{{ title }}</p>

    <template v-for="integration in integrations">
      <NuxtLink
        class="hover:scale-110 hover:-rotate-2 duration-300"
        :to="integration.url"
        :title="integration.title">
        <NuxtImg class="shrink-0 h-12" :src="`/assets/images/${integration.image}`" />
      </NuxtLink>
    </template>
  </section>
</template>
