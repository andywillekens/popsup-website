<script setup lang="ts">
  export interface Props {
    path: string
  }

  const props = defineProps<Props>()

  const isHome = ref(props.path === '/')
</script>
<template>
  <footer class="full-width grid-cols-content content-end">
    <CallToAction
      :type="isHome ? 'large' : 'base'"
      :title="
        isHome ? 'Klaar om je campagne een upgrade te geven?' : 'Geef je campagne een upgrade.'
      "
      small="Geen betaalmethode nodig" />
    <section class="full-width grid-cols-content bg-mirage-950 self-end pt-16 pb-8">
      <section class="content-large grid border-b border-solid pb-8 border-white/10">
        <CoreNavigation type="footer" />
      </section>
      <section
        class="content-large flex flex-col-reverse lg:flex-row items-center gap-2 justify-between pt-8">
        <p class="text-base text-gray-600">&copy; {{ new Date().getFullYear() }} - PopsUp</p>
        <p class="text-base text-gray-600">
          PopsUp is met
          <Icon name="ph:heart-duotone" class="text-purple-500 animate-heart-beat" size="24" />
          ontwikkeld in Nederland.
        </p>
      </section>
    </section>
  </footer>
</template>
