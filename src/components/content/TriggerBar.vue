<script setup lang="ts">
  export interface Triggers {
    triggers: [
      {
        name: string
        icon: string
      }
    ]
  }

  defineProps<Triggers>()
</script>
<template>
  <section
    class="flex flex-col lg:flex-row full-width justify-center items-center gap-10 xl:gap-20 mt-4 lg:mt-16 px-4 py-16 [mask-image:_linear-gradient(to_right,transparent_0,_purple_128px,_black_calc(100%-200px),transparent_100%)] overflow-hidden">
    <div class="w-full inline-flex flex-nowrap group">
      <ul
        class="flex items-center justify-center md:justify-start animate-infinite-scrolling-bar group-hover:pause p-0 m-0">
        <li
          v-for="trigger in triggers"
          class="flex items-center justify-between gap-3 text-mirage-900 whitespace-nowrap bg-mirage-300/20 pl-4 pr-6 py-3 xl:pl-8 xl:pr-12 xl:py-6 rounded-xl font-head text-md xl:text-xl font-bold mx-4 xl:mx-8 relative overflow-hidden">
          <Icon :name="trigger.icon" class="text-purple-600" size="48" />
          {{ trigger.name }}
          <Icon
            :name="trigger.icon"
            class="text-mirage-900 absolute -right-5 -bottom-20 opacity-5"
            size="175" />
        </li>
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start animate-infinite-scrolling-bar group-hover:pause p-0 m-0">
        <li
          v-for="trigger in triggers"
          class="flex items-center justify-between gap-3 text-mirage-900 whitespace-nowrap bg-mirage-300/20 pl-4 pr-6 py-3 xl:pl-8 xl:pr-12 xl:py-6 rounded-xl font-head text-md xl:text-xl font-bold mx-4 xl:mx-8 relative overflow-hidden">
          <Icon :name="trigger.icon" class="text-purple-600" size="48" />
          {{ trigger.name }}
          <Icon
            :name="trigger.icon"
            class="text-mirage-900 absolute -right-5 -bottom-20 opacity-5"
            size="175" />
        </li>
      </ul>
    </div>
  </section>
</template>
