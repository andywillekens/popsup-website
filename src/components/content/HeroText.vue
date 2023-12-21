<script setup lang="ts">
  const props = defineProps({
    payoff: {
      type: String,
      required: true,
      default: ''
    },
    words: {
      type: String,
      default: 'sales'
    },
    title: {
      type: String,
      required: true,
      default: ''
    }
  })

  const splitPayoff = props.payoff.split('X')
  const wordArray = props.words.split(',')
</script>
<template>
  <!-- Payoff -->
  <p class="text-7xl font-bold leading-none">
    {{ splitPayoff[0] }}
    <!-- Wordflipper -->
    <span>
      <template v-for="word in wordArray">
        <span>{{ word }}</span>
      </template>
    </span>
    {{ splitPayoff[1] }}
  </p>
  <!-- H1 -->
  <!-- <h1>{{ title }}</h1> -->
  <!-- CTA -->
  <CoreButton to="#" label="Meer informatie" tag="nuxt-link" theme="default" />
</template>
