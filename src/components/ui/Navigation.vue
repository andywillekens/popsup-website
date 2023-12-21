<script setup lang="ts">
  interface MenuItem {
    title: string
    _path: string
    navigation?: {
      title: string
      location: string | string[]
      category?: string
      order?: number
    }
    location: string | string[]
    category?: string
    order?: number
    children?: MenuItem[]
  }

  const props = defineProps({
    type: {
      type: String,
      required: true,
      default: 'main'
    }
  })

  const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

  const mainMenuItems = navigation.value
    ?.filter((item) => item.location.includes('main'))
    .sort((a, b) => (a.order || 0) - (b.order || 0))

  const footerMenuItems: MenuItem[] = (navigation.value || [])?.filter((item) =>
    item.location.includes('footer')
  )

  const categories: Record<string, MenuItem[]> = {}

  footerMenuItems?.forEach((item) => {
    const category: any = item.category || 'uncategorized'
    if (!categories[category]) {
      categories[category] = []
    }
    categories[category].push(item)
  })
</script>
<template>
  <nav
    :class="type === 'main' ? 'items-center' : 'items-start'"
    class="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between">
    <div class="flex flex-col gap-4">
      <NuxtLink class="logo" to="/"><UiLogo /></NuxtLink>
      <p v-if="type === 'footer'" class="w-full lg:max-w-md">
        Bouw makkelijk en snel professionele pop-ups en integreer deze in je website, webshop of
        webapplicatie.
      </p>
    </div>
    <div class="flex gap-4" v-if="type === 'main'">
      <template v-for="(item, itemIndex) in mainMenuItems">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </template>
    </div>
    <div class="flex gap-10 lg:gap-20" v-if="type === 'footer'">
      <template v-for="(category, catIndex) in categories">
        <div class="flex flex-col gap-2">
          <p class="uppercase text-gray-300 text-base">{{ catIndex }}</p>
          <template v-for="item in category">
            <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
          </template>
        </div>
      </template>
    </div>
  </nav>
</template>
