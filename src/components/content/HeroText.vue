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

  const imageArr = [
    { url: '/assets/images/popsup_dashboard_1.jpg', title: 'Je statistieken op een plek' },
    { url: '/assets/images/popsup_dashboard_2.jpg', title: 'Alle campagnes in een overzicht' },
    { url: '/assets/images/popsup_dashboard_3.jpg', title: 'Met geïntegreerde code-editor' },
    {
      url: '/assets/images/popsup_dashboard_4.jpg',
      title: 'Heel veel handige instellingen'
    }
  ]
</script>
<template>
  <section
    class="flex flex-col md:flex-row breakout justify-start 2xl:justify-around items-center gap-10 mt-8 sm:mt-16 lg:mt-32">
    <section class="w-full md:max-w-lg lg:max-w-2xl flex flex-col gap-8 items-start flex-shrink-0">
      <!-- Payoff -->
      <p
        class="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[2.5rem] sm:leading-[4rem] md:leading-[4.5rem] lg:leading-[5rem]">
        {{ splitPayoff[0] }}
        <!-- Wordflipper -->
        <span
          class="inline-flex flex-col w-auto h-[2.5rem] sm:h-[4rem] md:h-[4.5rem] lg:h-[5rem] overflow-hidden">
          <template v-for="word in wordArray">
            <span
              class="text-purple-400 drop-shadow-md inline flex-grow-0 justify-start animate-word-slider text-left w-full h-[2.5rem] sm:h-[4rem] md:h-[4.5rem] lg:h-[5rem]"
              >{{ word }}</span
            >
          </template> </span
        ><br />
        {{ splitPayoff[1] }}
      </p>
      <!-- H1 -->
      <h1 class="text-base leading-relaxed sm:leading-normal sm:text-md font-normal text-gray-400">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </h1>
      <!-- CTA -->
      <UiCoreButton
        to="https://app.popsup.nl/create-account"
        label="Start gratis proefperiode"
        tag="nuxt-link"
        theme="cta-xl" />
    </section>
    <section class="w-full md:w-[680px] flex-shrink-0 md:-translate-x-5 lg:translate-x-0">
      <UiImageViewer :images="imageArr" />
    </section>
  </section>
</template>
