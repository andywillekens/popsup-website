<template>
  <div
    class="appNav flex flex-col md:flex-row items-start md:items-center gap-6 md:border-l md:border-gray-950 md:pl-4 lg:pl-8">
    <NuxtLink class="text-gray-400 no-underline" to="https://app.popsup.nl/login"
      >Inloggen</NuxtLink
    >
    <UiCoreButton
      to="https://app.popsup.nl/create-account"
      label="Start proefperiode"
      tag="nuxt-link"
      theme="alt-border" />
  </div>
</template>
