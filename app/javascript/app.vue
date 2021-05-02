<template>
  <v-app id="app">
    <header-component />
    <v-main>
      <router-view />
    </v-main>
    <footer-component />
  </v-app>
</template>

<script>
import HeaderComponent from './components/shared/header'
import FooterComponent from './components/shared/footer'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style scoped>
</style>
