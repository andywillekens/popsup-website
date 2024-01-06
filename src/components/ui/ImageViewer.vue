<script setup lang="ts">
  type Image = {
    url: string
    title: string
  }

  const props = defineProps({
    images: Array as () => Image[],
    url: {
      type: String,
      default: 'https://app.popsup.nl/'
    }
  })

  const currentImage = ref(0)
  const maxImages = props.images?.length || 0

  const cycleImages = (operation: string) => {
    const increment = operation === '+' ? 1 : -1
    currentImage.value = (currentImage.value + increment + maxImages) % maxImages
  }

  // TODO: Add fallback image
</script>
<template>
  <div
    class="flex pl-2 pr-3 gap-2 items-center border-2 border-b-0 bg-gray-100 border-gray-400 w-full h-12 rounded-lg rounded-b-none">
    <div class="flex gap-1">
      <Icon
        @click="cycleImages('-')"
        name="ph:arrow-circle-left-duotone"
        class="duration-150 transition-all text-gray-400 hover:text-purple-500 hover:scale-105 cursor-pointer"
        size="30" />
      <Icon
        @click="cycleImages('+')"
        name="ph:arrow-circle-right-duotone"
        class="duration-150 transition-all text-gray-400 hover:text-purple-500 hover:scale-105 cursor-pointer"
        size="30" />
    </div>
    <div
      class="w-full h-6 pointer-events-none border-2 border-gray-400 bg-gray-800/5 rounded text-xs leading-[0] flex items-center px-2 text-gray-800">
      {{ url }}
    </div>
  </div>
  <div
    class="shadow-lg bg-gray-100 border-2 border-t-0 border-gray-400 rounded-xl rounded-t-none overflow-hidden grid relative">
    <template v-for="(image, imageIdx) in images">
      <NuxtImg
        :class="
          imageIdx === currentImage
            ? 'opacity-100 translate-x-0 z-20'
            : 'opacity-0 translate-x-[100%] z-10'
        "
        :src="image.url"
        :title="image.title"
        class="row-[1] col-[1] relative transition-all duration-500"
        sizes="610px sm:735px md:680px" />
      <div
        :class="imageIdx === currentImage ? 'translate-y-0 z-20' : 'translate-y-[100px] z-10'"
        class="absolute bottom-4 right-4 bg-white/95 tracking-normal shadow-sm shadow-black/10 text-mirage-900 font-head font-medium z-30 text-xs py-0 px-2 rounded-md transition-all duration-500">
        {{ image.title }}
      </div>
    </template>
  </div>
</template>
