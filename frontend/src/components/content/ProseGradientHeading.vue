<template>
  <div class="flex items-center justify-center mt-8 sm:mt-16 lg:mt-32">
    <h2 class="gradientHeading text-center text-mirage-900">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h2>
  </div>
</template>
