<template>
  <v-app id="app">
    <header-component />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <footer-component />
  </v-app>
</template>

<script>
  import HeaderComponent from './components/shared/TheHeader'
  import FooterComponent from './components/shared/TheFooter'

  export default {
    components: {
      HeaderComponent,
      FooterComponent,
    }
  }
</script>

<style scoped>
</style>
