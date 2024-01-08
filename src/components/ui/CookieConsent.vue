<script setup lang="ts">
  const { gtag, grantConsent, revokeConsent } = useGtag()
  const isTracking = ref(false)
  const animationPlayed = useCookie('anim')

  setTimeout(() => {
    animationPlayed.value = 'played'
  }, 1000)

  const grand = () => {
    grantConsent()
    isTracking.value = true
  }

  onMounted(() => {
    isTracking.value = !!document.cookie.match(/^(.*;)?\s*_ga_0GQLHD0016\s*=\s*[^;]+(.*)?$/)
  })
</script>
<template>
  <div
    v-if="!isTracking"
    :class="!!animationPlayed ? '' : '-translate-x-[calc(100%_+_4rem)] animate-slide-in-from-left'"
    id="cookieConsent"
    class="flex flex-col fixed left-4 sm:left-8 bottom-4 sm:bottom-8 right-4 z-50 bg-white self-start rounded-2xl shadow-xl shadow-mirage-900/20 border border-mirage-900/10 gap-4 max-w-80">
    <section class="flex flex-col p-6 pb-0 gap-4">
      <span class="flex gap-2 font-head tracking-tight font-bold text-2xl text-mirage-900">
        Koekje?<Icon name="ph:cookie-duotone" class="text-purple-600" size="28" />
      </span>
      <span class="text-gray-900 leading-relaxed sm:leading-normal"
        >Wij gebruiken cookies om jouw ervaring op deze website te verbeteren.</span
      >
    </section>
    <section class="flex flex-row justify-between p-6 pt-0 gap-4">
      <CoreButton class="w-full" to="/privacy" label="Privacy" tag="nuxt-link" theme="alt-grey" />
      <CoreButton class="w-full" @click="grand()" label="Ja, lekker!" theme="cta-alt" />
    </section>
  </div>
</template>
