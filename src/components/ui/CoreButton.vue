<script setup lang="ts">
  const props = defineProps({
    tag: String,
    to: {
      type: [String, Object]
    },
    loading: Boolean,
    theme: String,
    label: String,
    iconPrefix: String,
    iconSuffix: String,
    iconColor: String,
    iconSize: String
  })

  const themeClasses = computed(() => {
    if (props.theme === 'cta') {
      return 'px-6 py-3 text-lg bg-purple-500 text-white hover:bg-purple-600 hover:text-white shadow-lg shadow-purple-600/40'
    } else if (props.theme === 'cta-alt') {
      return 'px-4 py-2 text-lg bg-purple-400/20 text-purple-600 hover:bg-purple-600 hover:text-white'
    } else if (props.theme === 'danger') {
      return 'px-4 py-2 text-white bg-red-500 hover:bg-red-600'
    } else if (props.theme === 'ghost') {
      return 'px-2 py-1 text-purple-500 bg-transparent hover:bg-purple-400/10'
    } else if (props.theme === 'alt') {
      return 'px-4 py-2 bg-purple-500/30 text-purple-300 hover:bg-purple-500 hover:text-white focus:z-10'
    } else if (props.theme === 'alt-grey') {
      return 'px-4 py-2 bg-gray-600/10 text-mirage-900 bg-grey-500/20 hover:hover:bg-mirage-900 hover:text-white focus:z-10'
    } else {
      return 'px-4 py-2 !text-white bg-purple-500 hover:bg-purple-600 !border-0'
    }
  })

  const loadingClasses = computed(() => {
    if (props.loading) {
      return 'opacity-40 pointer-events-none cursor-wait'
    }
  })

  const buttonProps = computed(() => {
    if (props.tag === 'button') {
      return {
        type: 'button'
      }
    } else {
      return {
        to: props.to
      }
    }
  })

  const component = computed(() => {
    if (props.tag === 'button') return 'button'
    else return resolveComponent('NuxtLink')
  })
</script>
<template>
  <component
    type="button"
    :is="component"
    v-bind="buttonProps"
    :class="[
      `button group text-md no-underline text-center flex tracking-tight items-center justify-center font-head font-medium rounded-lg transition-all duration-150 outline-0 outline-none cursor-pointer gap-2`,
      themeClasses,
      loadingClasses
    ]">
    <slot>
      <Icon
        v-if="loading"
        :size="iconSize ? iconSize : '18'"
        name="svg-spinners:ring-resize"
        class="transition-all"
        :class="iconColor ? 'text-' + iconColor : 'text-inherit'" />
      <Icon
        v-if="iconPrefix && !loading"
        :size="iconSize ? iconSize : '18'"
        :name="iconPrefix"
        class="transition-all"
        :class="iconColor ? 'text-' + iconColor : 'text-inherit'" />
      <span v-if="label">{{ label }}</span>
      <Icon
        v-if="iconSuffix && !loading"
        :size="iconSize ? iconSize : '18'"
        :name="iconSuffix"
        class="transition-all"
        :class="iconColor ? 'text-' + iconColor : 'text-inherit'" />
    </slot>
  </component>
</template>
