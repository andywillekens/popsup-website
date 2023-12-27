<template>
  <div class="flex items-center justify-center mt-8 sm:mt-16 lg:mt-32">
    <h2
      class="drop-shadow-lg text-center bg-gradient-to-tr from-purple-300 to-purple-700 bg-clip-text text-transparent">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h2>
  </div>
</template>
