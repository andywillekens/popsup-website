<script setup lang="ts">
  export interface Props {
    id?: string
    state1?: string
    state2?: string
    modelValue?: boolean
  }

  defineProps<Props>()

  const emit = defineEmits(['update:modelValue'])

  const updateInput = (event: any) => {
    emit('update:modelValue', event.target.checked)
  }
</script>

<template>
  <section class="flex justify-center">
    <!-- Actual input -->
    <input @input="updateInput" type="checkbox" :checked="modelValue" :id="id" class="hidden" />
    <!-- Visual input -->
    <div class="flex bg-white p-2 rounded-lg shadow-lg border shadow-gray-700/10 border-gray-100">
      <label
        :for="id"
        :class="modelValue ? 'text-gray-400' : 'bg-[100%_100%] text-purple-700'"
        class="cursor-pointer select-none text-base tracking-normal font-head font-medium px-4 py-1 rounded-l-[5px] bg-no-repeat bg-[length:200%_100%] bg-gradient-to-l from-purple-50 from-50% to-transparent to-50% transition-all duration-500"
        >{{ state1 }}</label
      >
      <label
        :for="id"
        :class="modelValue ? 'bg-[100%_100%] text-purple-700' : 'bg-[200%_100%] text-gray-400'"
        class="cursor-pointer select-none text-base tracking-normal font-head font-medium px-4 py-1 rounded-r-[5px] bg-no-repeat bg-[length:200%_100%] bg-gradient-to-l from-purple-50 from-50% to-transparent to-50% transition-all duration-500"
        >{{ state2 }}</label
      >
    </div>
  </section>
</template>
