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
    <template #not-found> <h1>Document not found</h1> </template>
  </ContentDoc>
  <!-- Footer -->
  <Footer />
</template>
