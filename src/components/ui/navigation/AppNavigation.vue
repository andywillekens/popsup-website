<template>
  <div
    class="appNav flex flex-col md:flex-row md:items-center gap-4 md:border-l md:border-purple-200 md:pl-4 lg:pl-8">
    <CoreButton
      to="https://app.popsup.nl/login"
      label="Inloggen"
      tag="nuxt-link"
      theme="alt-grey" />
    <CoreButton
      to="https://app.popsup.nl/create-account"
      label="Start proefperiode"
      tag="nuxt-link"
      theme="default" />
  </div>
</template>
