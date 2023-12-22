<script setup lang="ts">
  const props = defineProps({
    tag: {
      type: String,
      default: 'nuxt-link'
    },
    to: {
      type: [String, Object]
    },
    active: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'default'
    },
    label: String,
    iconPrefix: String,
    iconSuffix: String,
    iconColor: {
      type: String,
      default: 'inherit'
    },
    iconSize: {
      type: String,
      default: '18'
    }
  })

  const themeClasses = computed(() => {
    if (props.theme === 'default') {
      return 'px-4 py-2 !text-white bg-purple-500 hover:bg-purple-600 !border-0'
    } else if (props.theme === 'cta-xl') {
      return 'px-6 py-4 text-lg !font-bold !text-black/90 bg-green-500 hover:bg-green-500/90 '
    } else if (props.theme === 'danger') {
      return 'px-4 py-2 text-white bg-red-500 hover:bg-red-600'
    } else if (props.theme === 'ghost') {
      return 'px-2 py-1 text-gray hover:text-white bg-transparent hover:bg-mirage-900'
    } else if (props.theme === 'alt') {
      return 'px-4 py-2 text-black bg-white hover:bg-gray-50 hover:text-black focus:z-10'
    } else if (props.theme === 'alt-border') {
      return 'px-4 py-2 border-2 border-purple-500 border-gray-200 text-gray-400 bg-purple-500/20 hover:bg-purple-500 hover:text-white focus:z-10'
    }
  })

  const loadingClasses = computed(() => {
    if (props.loading) {
      return 'opacity-40 pointer-events-none cursor-wait'
    }
  })

  const buttonProps = computed(() => {
    if (props.tag === 'nuxt-link') {
      return {
        to: props.to
      }
    } else if (props.tag === 'button') {
      return {
        type: 'button'
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
      `group text-md no-underline text-center inline-flex tracking-tight items-center font-medium rounded-lg transition-all duration-150 outline-0 outline-none cursor-pointer gap-2`,
      themeClasses,
      loadingClasses
    ]">
    <slot>
      <Icon
        v-if="loading"
        :size="iconSize"
        name="svg-spinners:ring-resize"
        class="transition-all"
        :class="iconColor && 'text-' + iconColor" />
      <Icon
        v-if="iconPrefix && !loading"
        :size="iconSize"
        :name="iconPrefix"
        class="transition-all"
        :class="iconColor && 'text-' + iconColor" />
      <span v-if="label">{{ label }}</span>
      <Icon
        v-if="iconSuffix && !loading"
        :size="iconSize"
        :name="iconSuffix"
        class="transition-all"
        :class="iconColor && 'text-' + iconColor" />
    </slot>
  </component>
</template>