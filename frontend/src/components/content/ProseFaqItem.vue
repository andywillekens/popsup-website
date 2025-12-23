<template>
  <details>
    <summary><ContentSlot :use="$slots.q" unwrap="p" /></summary>
    <ContentSlot :use="$slots.a" unwrap="p" />
  </details>
</template>
