<template>
  <!-- Header -->
  <Header />
  <!-- Content -->
  <ContentDoc :path="$route.path">
    <template v-slot="{ doc }">
      <NuxtLayout :name="doc.layout">
        <ContentRenderer :value="doc" />
      </NuxtLayout>
    </template>
    <!-- 404 -->
    <template #not-found>
      <h1>Oeps! Er ging iets niet goed..</h1>
      <p>Er is iets misgegaan bij het laden van de pagina of de pagina is verplaatst.</p>
    </template>
  </ContentDoc>
  <!-- Footer -->
  <Footer />
</template>
