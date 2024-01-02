<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
      default: ''
    },
    small: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: true
    }
  })
</script>
<template>
  <section
    v-if="type === 'large'"
    class="fader flex flex-col full-width gap-10 md:gap-12 items-center justify-center mt-8 sm:mt-18 lg:mt-10 mb-4 pt-40 pb-16 px-2 bg-gradient-to-r from-transparent via-green-400/10 to-transparent">
    <p
      class="max-w-4xl text-center text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-head font-black leading-tight bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
      {{ title }}
    </p>
    <div class="flex flex-col items-center gap-1">
      <CoreButton
        to="https://app.popsup.nl/create-account"
        label="Start gratis proefperiode"
        tag="nuxt-link"
        theme="cta-xl" />
      <p class="text-sm text-gray-500">
        {{ small }}
      </p>
    </div>
  </section>
  <div v-else class="grid-cols-content content-large bg-green-400/5">
    <section
      class="flex flex-col md:flex-row content-large gap-6 md:gap-12 items-center justify-between py-8 md:py-10 px-2">
      <p
        class="max-w-4xl text-xl sm:text-2xl lg:text-3xl text-center md:text-left font-head font-black leading-tight bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
        {{ title }}
      </p>
      <div class="flex flex-col items-center gap-1 flex-shrink-0">
        <CoreButton
          to="https://app.popsup.nl/create-account"
          label="Start gratis proefperiode"
          tag="nuxt-link"
          theme="cta-xl" />
        <p class="text-sm text-gray-600">
          {{ small }}
        </p>
      </div>
    </section>
  </div>
</template>
