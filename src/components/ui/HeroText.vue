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
  <section class="flex breakout justify-around items-center gap-10 my-32">
    <section class="w-full max-w-2xl flex flex-col gap-8 items-start">
      <!-- Payoff -->
      <p class="text-7xl font-bold leading-[5rem]">
        {{ splitPayoff[0] }}
        <!-- Wordflipper -->
        <span
          class="inline-flex flex-col w-auto h-[5rem] bg-gradient-to-tr from-purple-200 to-purple-600 text-transparent bg-clip-text">
          <template v-for="word in wordArray">
            <span
              class="inline flex-grow-0 justify-start animate-word-slider text-left w-full h-[5rem]"
              >{{ word }}</span
            >
          </template> </span
        ><br />
        {{ splitPayoff[1] }}
      </p>
      <!-- H1 -->
      <h1 class="text-md font-normal text-gray-500">{{ title }}</h1>
      <!-- CTA -->
      <UiCoreButton
        to="https://app.popsup.nl/create-account"
        label="Start gratis proefperiode"
        tag="nuxt-link"
        theme="cta-xl" />
    </section>
    <section class="w-full max-w-2xl">
      <div
        class="flex px-2 gap-2 items-center border bg-white/5 border-white/10 w-full h-8 rounded-lg rounded-b-none">
        <div class="flex gap-1">
          <Icon name="ph:arrow-circle-left-duotone" class="text-gray-800" size="20" />
          <Icon name="ph:arrow-circle-right-duotone" class="text-gray-800" size="20" />
        </div>
        <div
          class="w-full h-4 pointer-events-none border border-gray-800 bg-gray-800/25 rounded text-[.6rem] leading-[0] flex items-center px-1 text-gray-400">
          https://app.popsup.nl/
        </div>
      </div>
      <NuxtImg
        class="shadow-lg border border-t-0 border-white/10 rounded-2xl rounded-t-none"
        src="/assets/images/popsup_dashboard_1.jpg" />
    </section>
  </section>
</template>
