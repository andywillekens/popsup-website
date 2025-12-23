<script setup lang="ts">
  export interface Props {
    id: string
  }

  defineProps<Props>()
</script>
<template>
  <iframe
    class="w-full h-auto aspect-video mb-8"
    width="580"
    height="363"
    :src="`https://www.youtube.com/embed/${id}?si=IPvzP_M9emgxqZ_A`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
</template>
