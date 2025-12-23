<script setup lang="ts">
  export interface Props {
    items: any
    show: boolean
  }

  defineProps<Props>()

  const emit = defineEmits(['closeMenu'])

  const closeMenu = (event: any) => {
    emit('closeMenu', event)
  }
</script>
<template>
  <section
    :class="
      show
        ? 'translate-y-0 opacity-100 pointer-events-auto'
        : '-translate-y-16 opacity-0 pointer-events-none'
    "
    class="absolute z-50 top-0 right-0 w-full sm:w-[350px] flex gap-12 flex-col md:hidden bg-white pt-5 pb-8 px-8 transition-all duration-300 rounded-b-lg shadow-md shadow-gray-700/5">
    <div class="flex justify-between">
      <!-- Logo -->
      <NuxtLink class="logo" to="/"><Logo type="dark" /></NuxtLink>
      <!-- Close button -->
      <CoreButton
        @click="closeMenu"
        class="md:hidden"
        icon-prefix="ph:x"
        icon-color="purple-600"
        icon-size="32"
        tag="button"
        theme="ghost"
        title="Verberg menu" />
    </div>
    <!-- Menu -->
    <div class="mobileNav flex flex-col gap-8">
      <template v-for="(item, itemIndex) in items">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </template>
      <AppNavigation />
    </div>
  </section>
  <!-- Overlay -->
  <div
    @click="closeMenu"
    :class="
      show
        ? 'opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none'
        : 'opacity-0 pointer-events-none'
    "
    class="fixed z-40 top-0 right-0 bottom-0 left-0 bg-black/75 transition-all duration-150"></div>
</template>
