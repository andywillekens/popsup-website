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
    }
  })

  const splitPayoff = props.payoff.split('X')
  const wordArray = props.words.split(',')

  const imageArr = [
    { url: '/assets/images/popsup_dashboard_1.jpg', title: 'Alle statistieken op een plek' },
    { url: '/assets/images/popsup_dashboard_2.jpg', title: 'Jouw campagnes in een overzicht' },
    { url: '/assets/images/popsup_dashboard_3.jpg', title: 'Geïntegreerde code-editor' },
    {
      url: '/assets/images/popsup_dashboard_4.jpg',
      title: 'Uitgebreide instellingen'
    }
  ]
</script>
<template>
  <section
    class="flex flex-col md:flex-row breakout xl:content-large justify-start 2xl:justify-around items-center gap-10 mt-8 sm:mt-16 lg:mt-32">
    <section class="w-full md:max-w-lg lg:max-w-2xl flex flex-col gap-8 items-start flex-shrink-0">
      <!-- Payoff -->
      <p
        class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[2.5rem] sm:leading-[3.7rem] md:leading-[4.3rem] lg:leading-[4.5rem] text-mirage-900 font-head">
        {{ splitPayoff[0] }}
        <!-- Wordflipper -->
        <span
          class="inline-flex flex-col w-auto h-[2.5rem] sm:h-[3.7rem] md:h-[4.3rem] lg:h-[4.5rem] overflow-hidden">
          <template v-for="word in wordArray">
            <span
              class="text-purple-500 inline flex-grow-0 justify-start animate-word-slider text-left w-full h-[2.5rem] sm:h-[3.7rem] md:h-[4.3rem] lg:h-[4.5rem]"
              >{{ word }}</span
            >
          </template> </span
        ><br />
        {{ splitPayoff[1] }}
      </p>
      <!-- H1 -->
      <h1 class="text-base leading-relaxed sm:leading-normal sm:text-md font-normal text-gray-900">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </h1>
      <!-- CTA -->
      <!-- <CoreButton
        to="https://app.popsup.nl/create-account"
        label="Start jouw gratis proefperiode"
        tag="nuxt-link"
        theme="cta" /> -->
    </section>
    <section
      class="w-full md:w-[680px] flex-shrink-0 md:-translate-x-5 lg:translate-x-0 [mask-image:none] xl:[mask-image:_linear-gradient(to_right,_black_calc(100%-200px),transparent_100%)] 2xl:[mask-image:none]">
      <ImageViewer :images="imageArr" />
    </section>
  </section>
</template>
