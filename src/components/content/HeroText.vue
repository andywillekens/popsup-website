<script setup lang="ts">
  const props = defineProps({
    payoff: {
      type: String,
      required: true,
      default: ''
    },
    words: {
      type: String,
      default: 'sales'
    },
    title: {
      type: String,
      required: true,
      default: ''
    }
  })

  const splitPayoff = props.payoff.split('X')
  const wordArray = props.words.split(',')
</script>
<template>
  <section
    class="flex breakout justify-start 2xl:justify-around items-center sm:gap-10 mt-8 sm:mt-16 lg:mt-32">
    <section class="w-full max-w-2xl flex flex-col gap-8 items-start flex-shrink-0">
      <!-- Payoff -->
      <p
        class="text-2xl sm:text-4xl md:text-7xl font-bold leading-[2.5rem] sm:leading-[4rem] md:leading-[5rem]">
        {{ splitPayoff[0] }}
        <!-- Wordflipper -->
        <span
          class="inline-flex flex-col w-auto h-[2.5rem] sm:h-[4rem] md:h-[5rem] overflow-hidden">
          <template v-for="word in wordArray">
            <span
              class="text-purple-400 drop-shadow-md inline flex-grow-0 justify-start animate-word-slider text-left w-full h-[2.5rem] sm:h-[4rem] md:h-[5rem]"
              >{{ word }}</span
            >
          </template> </span
        ><br />
        {{ splitPayoff[1] }}
      </p>
      <!-- H1 -->
      <h1 class="text-base leading-relaxed sm:leading-normal sm:text-md font-normal text-gray-500">
        {{ title }}
      </h1>
      <!-- CTA -->
      <UiCoreButton
        to="https://app.popsup.nl/create-account"
        label="Start gratis proefperiode"
        tag="nuxt-link"
        theme="cta-xl" />
    </section>
    <section class="w-[680px] flex-shrink-0 translate-x-10 hidden md:block 2xl:translate-x-0">
      <UiImageViewer />
    </section>
  </section>
</template>
