<template>
  <!-- Header -->
  <Header />
  <!-- Content -->
  <NuxtLayout name="home">
    <ContentDoc>
      <template #not-found>
        <section class="max-w-4xl flex flex-col gap-8">
          <h1>Er gaat iets niet goed..</h1>
          <p>
            De pagina die je probeert te bereiken is verhuisd of bestaat niet meer. Probeer het
            opnieuw of neem contact op via info@popsup.nl.
          </p>
        </section>
      </template>
    </ContentDoc>
  </NuxtLayout>
  <!-- Footer -->
  <Footer />
</template>
