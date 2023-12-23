<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: true,
      default: ''
    },
    text: {
      type: Array,
      required: false,
      default: ''
    },
    image: {
      type: String,
      requied: true,
      default: ''
    },
    pull: {
      type: Boolean,
      default: false
    },
    push: {
      type: Boolean,
      default: false
    }
  })
</script>
<template>
  <section
    :class="pull ? '-translate-x-48' : push ? 'translate-x-48' : 'translate-x-0'"
    class="inline-flex content justify-start 2xl:justify-around items-center sm:gap-10 mt-8 sm:mt-16 lg:mt-32">
    <section class="flex flex-col gap-6 bg-mirage-960/95 rounded-2xl p-6">
      <h4 class="">{{ title }}</h4>
      <div class="flex flex-row gap-6">
        <div class="shrink-0 w-1/2">
          <template v-for="paragraph in text">
            <p class="text-lg text-gray-400 mb-4">{{ paragraph }}</p>
          </template>
        </div>
        <NuxtImg
          class="w-auto h-72 aspect-video rounded-lg shadow-lg"
          :src="`/assets/images/${image}`" />
      </div>
    </section>
  </section>
</template>
