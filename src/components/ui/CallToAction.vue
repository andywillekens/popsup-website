<script setup lang="ts">
  export interface Props {
    title: string
    small: string
    type: string
  }
  defineProps<Props>()
</script>
<template>
  <section
    v-if="type === 'large'"
    class="fader flex flex-col full-width gap-10 md:gap-12 items-center justify-center lg:mt-10 mb-4 pt-16 md:pt-40 pb-16 md:pb-28 px-2 bg-purple-400/20 to-transparent">
    <p
      class="gradientHeading max-w-4xl text-center text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-head font-black leading-tight bg-gradient-to-br text-mirage-900">
      {{ title }}
    </p>
    <div class="flex flex-col items-center gap-1">
      <CoreButton to="/blog/grote-update" label="Meer informatie" tag="nuxt-link" theme="cta" />
      <!-- <CoreButton
        to="https://app.popsup.nl/create-account"
        label="Start gratis proefperiode"
        tag="nuxt-link"
        theme="cta" /> -->
      <!-- <p class="text-sm text-gray-500">
        {{ small }}
      </p> -->
    </div>
  </section>
  <div v-else class="grid-cols-content content-large bg-purple-600/5">
    <section
      class="flex flex-col md:flex-row content-large gap-6 md:gap-12 items-center justify-between py-8 md:py-10 px-2">
      <p
        class="max-w-4xl text-xl sm:text-2xl lg:text-3xl text-center md:text-left font-head font-black leading-tight text-mirage-900">
        {{ title }}
      </p>
      <div class="flex flex-col items-center gap-1 flex-shrink-0">
        <CoreButton to="/blog/grote-update" label="Meer informatie" tag="nuxt-link" theme="cta" />
        <!-- <CoreButton
          to="https://app.popsup.nl/create-account"
          label="Start gratis proefperiode"
          tag="nuxt-link"
          theme="cta" /> -->
        <!-- <p class="text-sm text-gray-600">
          {{ small }}
        </p> -->
      </div>
    </section>
  </div>
</template>
