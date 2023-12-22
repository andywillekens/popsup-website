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
    class="flex pl-2 pr-3 gap-2 items-center border bg-white/5 border-white/10 w-full h-12 rounded-lg rounded-b-none">
    <div class="flex gap-1">
      <Icon
        @click="cycleImages('-')"
        name="ph:arrow-circle-left-duotone"
        class="text-gray-800 hover:text-purple-500 cursor-pointer"
        size="30" />
      <Icon
        @click="cycleImages('+')"
        name="ph:arrow-circle-right-duotone"
        class="text-gray-800 hover:text-purple-500 cursor-pointer"
        size="30" />
    </div>
    <div
      class="w-full h-6 pointer-events-none border-2 border-gray-800 bg-gray-800/25 rounded text-xs leading-[0] flex items-center px-2 text-gray-400">
      {{ url }}
    </div>
  </div>
  <div
    class="shadow-lg border border-t-0 border-white/10 rounded-xl rounded-t-none overflow-hidden grid relative">
    <template v-for="(image, imageIdx) in images">
      <NuxtImg
        :class="
          imageIdx === currentImage
            ? 'opacity-100 translate-x-0 z-20'
            : 'opacity-0 translate-x-[100%] z-10'
        "
        :src="image.url"
        :title="image.title"
        class="row-[1] col-[1] relative transition-all duration-500" />
      <div
        :class="imageIdx === currentImage ? 'translate-y-0 z-20' : 'translate-y-[100px] z-10'"
        class="absolute bottom-4 right-4 bg-black/30 shadow-md shadow-purple-500/10 text-white z-30 text-sm py-0 px-2 rounded-sm transition-all duration-500">
        {{ image.title }}
      </div>
    </template>
  </div>
</template>
