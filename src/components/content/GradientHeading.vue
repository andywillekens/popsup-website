<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      required: true,
      default: ''
    }
  })
</script>
<template>
  <div class="flex items-center justify-center mt-8 sm:mt-16 lg:mt-32">
    <h2
      class="text-4xl text-center bg-gradient-to-tr from-purple-300 to-purple-700 bg-clip-text text-transparent">
      {{ text }}
    </h2>
  </div>
</template>
