<script setup lang="ts">
  export interface Props {
    image: string
    imageTitle: string
    pull: boolean
    push: boolean
  }
  defineProps<Props>()
</script>
<template>
  <section
    :class="
      pull
        ? 'translate-x-0 lg:-translate-x-5 xl:-translate-x-20'
        : push
        ? 'translate-x-0 lg:translate-x-5 xl:translate-x-10'
        : 'translate-x-0'
    "
    class="flex content-large justify-center 2xl:justify-around items-center sm:gap-10 mt-8 sm:mt-16 lg:mt-32">
    <section
      :class="
        pull
          ? 'before:bg-gradient-to-l sm:before:bg-gradient-to-r before:-translate-x-10'
          : 'before:bg-gradient-to-r before:translate-x-4 sm:before:translate-x-10'
      "
      class="flex flex-col max-w-4xl gap-6 py-6 sm:p-6 relative before:w-full sm:before:w-11/12 before:h-full before:absolute before:top-0 before:left-0 sm:before:translate-x-0 before:z-[-1] before:from-transparent before:to-mirage-300/40 sm:before:rounded-2xl">
      <h3 class="text-mirage-900 text-xl sm:text-2xl pr-0 sm:pr-20">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h3>
      <div class="flex flex-col md:flex-row gap-6">
        <div
          class="visualText flex flex-col justify-center shrink-0 w-full md:w-1/2 pr-0 sm:pr-20 md:pr-0">
          <ContentSlot :use="$slots.text" />
        </div>
        <NuxtImg
          :title="imageTitle"
          class="shrink-0 w-full md:w-1/2 h-full rounded-lg shadow-lg"
          :src="`/assets/images/${image}`"
          sizes="690px md:424px"
          loading="lazy" />
      </div>
    </section>
  </section>
</template>
