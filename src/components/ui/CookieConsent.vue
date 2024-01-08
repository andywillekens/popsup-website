<script setup lang="ts">
  export interface Props {
    title: string
    text: string
  }
  defineProps<Props>()
  const { gtag, grantConsent, revokeConsent } = useGtag()
  const isTracking = ref(false)
  const animationPlayed = useCookie('anim')
  const consentState = useCookie<boolean>('concent-state')

  const updateConsentState = () => {
    if (consentState.value) {
      consentState.value = false
    } else {
      consentState.value = true
    }
  }

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
    :class="[
      !!animationPlayed ? '' : '-translate-x-[calc(100%_+_4rem)] animate-slide-in-from-left',
      consentState ? 'max-w-16 max-h-16' : 'max-w-80'
    ]"
    id="cookieConsent"
    class="flex flex-col fixed left-4 sm:left-8 bottom-4 sm:bottom-8 right-4 z-50 bg-white self-start rounded-2xl shadow-xl shadow-mirage-900/20 border border-mirage-900/10 gap-4">
    <div v-if="consentState" class="flex flex-col p-2 gap-4">
      <CoreButton
        @click="updateConsentState()"
        icon-prefix="ph:cookie-duotone"
        icon-color="purple-600"
        tag="button"
        icon-size="32"
        theme="ghost"
        title="Toon cookiemelding" />
    </div>
    <template v-else>
      <section class="flex flex-col p-6 pb-0 gap-4">
        <div class="flex justify-between items-center">
          <span class="flex gap-2 font-head tracking-tight font-bold text-2xl text-mirage-900">
            {{ title }}<Icon name="ph:cookie-duotone" class="text-purple-600" size="28" />
          </span>
          <CoreButton
            @click="updateConsentState()"
            icon-prefix="ph:x"
            icon-color="purple-600"
            tag="button"
            icon-size="24"
            theme="ghost"
            title="Verberg cookiemelding" />
        </div>
        <span class="text-gray-900 leading-relaxed sm:leading-normal">{{ text }}</span>
      </section>
      <section class="flex flex-row justify-between p-6 pt-0 gap-4">
        <CoreButton
          title="Lees onze privacy statement"
          class="w-full"
          to="/privacy"
          label="Privacy"
          tag="nuxt-link"
          theme="alt-grey" />
        <CoreButton
          title="Ja, ik ga akkoord met de privacy statement"
          class="w-full"
          @click="grand()"
          tag="button"
          label="Ja, lekker!"
          theme="cta-alt" />
      </section>
    </template>
  </div>
</template>
