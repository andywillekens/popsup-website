<script setup lang="ts"></script>
<template>
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
</template>
