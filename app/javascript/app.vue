<template>
  <v-app id="app">
    <header-component />
    <v-main>
      <v-container>
        <modal-component />
        <router-view />
      </v-container>
    </v-main>
    <footer-component />
  </v-app>
</template>

<script>
  import HeaderComponent from './components/shared/TheHeader'
  import FooterComponent from './components/shared/TheFooter'
  import ModalComponent from './components/shared/Modal'

  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      ModalComponent,
    },
  }
</script>

<style>
</style>
