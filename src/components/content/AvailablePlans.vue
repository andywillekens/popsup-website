<script setup lang="ts">
  export interface Plans {
    plans: [
      {
        name: string
        price: number
        features: string[]
      }
    ]
  }

  defineProps<Plans>()
</script>
<template>
  <section>
    <h1>Test</h1>
    <div v-for="plan in plans">
      {{ plan.name }}
      {{ plan.price }}
    </div>
  </section>
</template>
