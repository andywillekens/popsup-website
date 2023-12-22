<script setup lang="ts">
  defineProps({
    items: {
      type: Array
    }
  })

  const emit = defineEmits(['closeMenu'])

  const closeMenu = (event: any) => {
    emit('closeMenu', event)
  }
</script>
<template>
  <section
    class="absolute z-50 top-0 left-0 w-full flex gap-12 flex-col border-b border-gray-900 md:hidden bg-mirage-960 pt-5 pb-8 px-8">
    <div class="flex justify-between">
      <!-- Logo -->
      <NuxtLink class="logo" to="/"><UiLogo /></NuxtLink>
      <!-- Close button -->
      <UiCoreButton
        @click="closeMenu"
        class="md:hidden"
        icon-prefix="ph:x"
        icon-color="white"
        icon-size="32"
        tag="button"
        theme="ghost" />
    </div>
    <!-- Menu -->
    <div class="flex flex-col gap-6">
      <template v-for="(item, itemIndex) in items">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </template>
      <UiNavigationApplication />
    </div>
  </section>
</template>
