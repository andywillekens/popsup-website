<script setup lang="ts">
  defineProps({
    triggers: {
      type: Array,
      required: true,
      default: ''
    }
  })
</script>
<template>
  <section
    class="flex flex-col lg:flex-row full-width justify-center items-center gap-10 xl:gap-20 mt-8 sm:mt-16 lg:mt-32 px-4 py-16 [mask-image:_linear-gradient(to_right,transparent_0,_purple_128px,_black_calc(100%-200px),transparent_100%)]">
    <div class="w-full inline-flex flex-nowrap">
      <ul
        class="flex items-center justify-center md:justify-start animate-infinite-scrolling-bar p-0 m-0">
        <li
          v-for="trigger in triggers"
          class="flex items-center justify-between gap-3 text-white whitespace-nowrap bg-gradient-to-br from-white/5 to-purple-600/40 pl-4 pr-6 py-3 xl:pl-8 xl:pr-12 xl:py-6 rounded-xl font-head text-md xl:text-xl font-bold mx-4 xl:mx-8 relative overflow-hidden">
          <Icon :name="trigger.icon" class="text-purple-400/60" size="48" />
          {{ trigger.name }}
          <Icon
            :name="trigger.icon"
            class="text-white absolute -right-5 -bottom-20 opacity-[.025]"
            size="175" />
        </li>
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start animate-infinite-scrolling-bar p-0 m-0">
        <li
          v-for="trigger in triggers"
          class="flex items-center justify-between gap-3 text-white whitespace-nowrap bg-gradient-to-br from-white/5 to-purple-600/40 pl-4 pr-6 py-3 xl:pl-8 xl:pr-12 xl:py-6 rounded-xl font-head text-md xl:text-xl font-bold mx-4 xl:mx-8 relative overflow-hidden">
          <Icon :name="trigger.icon" class="text-purple-400/60" size="48" />
          {{ trigger.name }}
          <Icon
            :name="trigger.icon"
            class="text-white absolute -right-5 -bottom-20 opacity-[.025]"
            size="175" />
        </li>
      </ul>
    </div>
  </section>
</template>
