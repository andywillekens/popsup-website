<script setup lang="ts">
  export interface Props {
    questionGroup: [
      {
        title: string
        questions: [
          {
            q: string
            a: string
          }
        ]
      }
    ]
  }
  const props = defineProps<Props>()
</script>
<template>
  <div class="mb-16">
    <template v-for="group in questionGroup">
      <h2 class="mt-8">{{ group.title }}</h2>
      <template v-for="question in group.questions">
        <ProseFaqItem>
          <template #q> {{ question.q }} </template>
          <template #a> {{ question.a }} </template>
        </ProseFaqItem>
      </template>
    </template>
  </div>
</template>
