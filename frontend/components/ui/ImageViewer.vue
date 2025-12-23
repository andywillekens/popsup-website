<script setup lang="ts">
  export interface Props {
    images: {
      title: string
      url: string
    }[]

    url: string
  }

  const props = defineProps<Props>()

  const currentImage = ref(0)
  const maxImages = props.images?.length || 0

  const cycleImages = (operation: string) => {
    const increment = operation === '+' ? 1 : -1
    currentImage.value = (currentImage.value + increment + maxImages) % maxImages
  }
</script>
<template>
  <div
    class="shadow-2xl shadow-purple-600/30 rounded-b-xl rounded-t-lg overflow-hidden border border-gray-300">
    <div class="flex pl-2 pr-3 gap-2 items-center bg-gray-100 border-b border-gray-300 w-full h-12">
      <div class="flex gap-1">
        <Icon
          @click="cycleImages('-')"
          name="ph:arrow-circle-left-thin"
          class="duration-150 transition-all text-gray-400 hover:text-purple-500 hover:scale-105 cursor-pointer"
          size="30" />
        <Icon
          @click="cycleImages('+')"
          name="ph:arrow-circle-right-thin"
          class="duration-150 transition-all text-gray-400 hover:text-purple-500 hover:scale-105 cursor-pointer"
          size="30" />
      </div>
      <div
        class="w-full h-6 pointer-events-none border border-gray-300 rounded text-xs leading-[0] flex items-center px-2 text-black/30">
        {{ url }}
      </div>
    </div>
    <div class="bg-mirage-950 grid relative">
      <template v-for="(image, imageIdx) in images">
        <NuxtImg
          width="680"
          height="372"
          :class="
            imageIdx === currentImage
              ? 'opacity-100 translate-x-0 z-20'
              : 'opacity-0 translate-x-[100%] z-10'
          "
          :src="image.url"
          :title="image.title"
          class="w-full row-[1] col-[1] relative transition-all duration-500"
          sizes="604px sm:732px md:680px"
          :loading="imageIdx === currentImage ? undefined : 'lazy'" />
        <div
          :class="imageIdx === currentImage ? 'translate-y-0 z-20' : 'translate-y-[100px] z-10'"
          class="absolute bottom-4 right-4 bg-white/95 tracking-normal shadow-sm shadow-black/10 text-mirage-900 font-head font-medium z-30 text-xs p-2 rounded-md transition-all duration-500">
          {{ image.title }}
        </div>
      </template>
    </div>
  </div>
</template>
