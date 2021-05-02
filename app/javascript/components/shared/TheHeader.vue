<template>
  <div>
    <v-app-bar
      app
      dark
      fixed
      color="#f5c11e"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>HeaderComponent</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
          >
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      group: null,
      menuItems: [
        {
          name: 'HOME',
          url: '#'
        },
        {
          name: 'ABOUT',
          url: '#'
        },
        {
          name: 'WORK',
          url: '#'
        },
        {
          name: 'SERVICE',
          url: '#'
        },
      ]
    }
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>

<style scoped>
</style>