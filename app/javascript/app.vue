<template>
  <v-app id="app">
    <header-component />
    <br>
    <br>
    <router-view />
    <br>
    <br>
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
  },
}
</script>

<style scoped>
</style>
