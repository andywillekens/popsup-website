<template>
  <footer class="full-width grid-cols-content bg-black/60 self-end py-16">
    <section class="content-large grid border-b border-solid pb-8 border-gray-950">
      <UiNavigation type="footer" />
    </section>
    <section
      class="content-large flex flex-col-reverse lg:flex-row items-center gap-2 justify-between pt-8">
      <p class="text-base text-gray-800">&copy; {{ new Date().getFullYear() }} Webtactic.</p>
      <p class="text-base text-gray-800">
        PopsUp is met
        <Icon name="ph:heart-duotone" class="text-purple-500 animate-heart-beat" size="24" />
        ontwikkeld in Nederland.
      </p>
    </section>
  </footer>
</template>
