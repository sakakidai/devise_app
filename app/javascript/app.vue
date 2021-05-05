<template>
  <v-app id="app">
    <header-component />
    <v-main>
      <flash-component />
      <v-container>
        <div>{{ $store.state }}</div>
        <router-view />
      </v-container>
    </v-main>
    <footer-component />
    <modal-component />
  </v-app>
</template>

<script>
  import HeaderComponent from './components/shared/TheHeader';
  import FooterComponent from './components/shared/TheFooter';
  import ModalComponent from './components/shared/Modal';
  import FlashComponent from './components/shared/Flash';

  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      ModalComponent,
      FlashComponent,
    },
  };
</script>

<style>
</style>
