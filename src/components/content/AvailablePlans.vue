<script setup lang="ts">
  export interface Plans {
    title?: string
    plans: [
      {
        name: string
        price: number
        tag: string
        popups: number
        views: number
        support: string
        featured: boolean
        features: string[]
      }
    ]
  }

  defineProps<Plans>()

  const yearlyBilling = ref(true)
</script>
<template>
  <section class="text-center flex flex-col gap-10">
    <h1>{{ title }}</h1>

    <InputToggle
      class="sticky md:relative top-24 md:top-[unset] z-40"
      id="planSwitch"
      state1="Maandelijks"
      state2="Jaarlijks"
      v-model="yearlyBilling" />

    <section
      class="w-full flex flex-row items-stretch justify-center gap-2 flex-wrap lg:gap-5 xl:gap-10 text-left">
      <div
        v-for="plan in plans"
        :class="
          plan.featured
            ? 'shadow-purple-600/40 border-purple-200 z-20'
            : 'shadow-gray-700/10 border-gray-100 z-10'
        "
        class="flex flex-col gap-4 max-w-96 border bg-white rounded-xl p-4 shadow-2xl relative flex-shrink-0 flex-grow sm:flex-grow-0">
        <!-- Head -->
        <div class="flex justify-between">
          <h2 class="!m-0 text-xl">{{ plan.name }}</h2>
          <span
            v-if="plan.tag"
            class="bg-purple-500/20 text-purple-800 text-sm font-head tracking-normal font-medium py-0 px-3 rounded-full flex self-center"
            >{{ plan.tag }}</span
          >
        </div>
        <!-- Price -->
        <div class="flex flex-col text-mirage-900">
          <div>
            <span class="text-2xl font-head font-bold"
              >&euro;{{ yearlyBilling ? plan.price : Number(plan.price) + Number(10) }}</span
            >/maand
          </div>
          <span
            >&euro;{{
              yearlyBilling ? plan.price * 12 : (Number(plan.price) + Number(10)) * 12
            }}
            jaarlijks</span
          >
        </div>
        <!--CTA -->
        <div class="flex flex-col gap-1">
          <CoreButton
            to="https://app.popsup.nl/create-account"
            label="Start direct!"
            tag="nuxt-link"
            :theme="plan.featured ? 'default' : 'cta-alt'" />
          <span class="w-full text-center text-gray-500 text-base">Gratis 14 dagen op proef</span>
        </div>
        <div class="w-full h-[1px] bg-gray-100"></div>
        <!-- Content -->
        <section class="">
          <span class="text-mirage-900/80">Inbegrepen:</span>
          <ul class="clearList flex flex-col gap-1 pb-4 text-mirage-900">
            <li class="flex items-start">
              <Icon
                name="ph:circle-wavy-check-duotone"
                class="text-purple-400 mr-1 mt-1"
                size="18" />{{ plan.popups }} pop-up
              {{ plan.popups > 1 ? 'campagnes' : 'campagne' }}
            </li>
            <li class="flex items-start">
              <Icon
                name="ph:circle-wavy-check-duotone"
                class="text-purple-400 mr-1 mt-1"
                size="18" />Onbeperkt aantal weergaven
            </li>
            <li class="flex items-start">
              <Icon
                name="ph:circle-wavy-check-duotone"
                class="text-purple-400 mr-1 mt-1"
                size="18" />Simpele statistieken
            </li>
            <li
              v-if="plan.support === 'basic' || plan.support === 'extended'"
              class="flex items-start">
              <Icon
                name="ph:circle-wavy-check-duotone"
                class="text-purple-400 mr-1 mt-1"
                size="18" />Software support<span class="text-purple-500 ml-1">*</span>
            </li>
            <li v-if="plan.support === 'extended'" class="flex items-start">
              <Icon
                name="ph:circle-wavy-check-duotone"
                class="text-purple-400 mr-1 mt-1"
                size="18" />Support op campagnes<span class="text-purple-500 ml-1">*</span>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <span class="text-gray-800 text-base">* Support via: e-mail, telefoon & videocall</span>
    <p>
      Meer pop-up campagnes nodig of wil je weten wat er mogelijk is?<br />
      Stuur dan een mail naar <a href="mailto:info@popsup.nl">info@popsup.nl</a> of bel
      <a href="tel:0615652039">06-15652039</a>
    </p>
  </section>
</template>
