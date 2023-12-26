<template>
  <section
    class="fader flex flex-col full-width gap-10 md:gap-12 items-center justify-center mt-8 sm:mt-18 lg:mt-10 mb-4 pt-20 pb-16 px-2 bg-gradient-to-r from-transparent via-green-400/10 to-transparent">
    <p
      class="max-w-4xl text-center text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-head font-black leading-tight bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </p>
    <div class="flex flex-col items-center gap-1">
      <UiCoreButton
        to="https://app.popsup.nl/create-account"
        label="Start gratis proefperiode"
        tag="nuxt-link"
        theme="cta-xl" />
      <p class="text-sm text-gray-600">
        <ContentSlot :use="$slots.small" unwrap="p" />
      </p>
    </div>
  </section>
</template>
