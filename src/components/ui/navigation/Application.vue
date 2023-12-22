<template>
  <div
    class="appNav flex flex-col md:flex-row md:items-center gap-4 md:border-l md:border-gray-950 md:pl-4 lg:pl-8">
    <UiCoreButton
      to="https://app.popsup.nl/login"
      label="Inloggen"
      tag="nuxt-link"
      theme="alt-grey" />
    <UiCoreButton
      to="https://app.popsup.nl/create-account"
      label="Start proefperiode"
      tag="nuxt-link"
      theme="alt" />
  </div>
</template>
