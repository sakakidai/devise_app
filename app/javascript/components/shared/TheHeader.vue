<template>
  <div>
    <v-app-bar
      app
      dark
      fixed
      color="#f5c11e"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
          to="/"
          class="router-link"
        >
          HeaderComponent
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="isAuthenticated">
        <v-btn
          color="#fff"
          depressed
          outlined
          @click="logout()"
        >
          ログアウト
        </v-btn>
      </template>
      <template v-if="!isAuthenticated">
        <router-link
          to="/login"
          class="router-link"
        >
          <v-btn
            color="#fff"
            depressed
            outlined
          >
            ログイン
          </v-btn>
        </router-link>
        <router-link
          to="/signup"
          class="router-link"
        >
          <v-btn
            color="#fff"
            depressed
            outlined
            class="ml-4"
          >
            新規登録
          </v-btn>
        </router-link>
      </template>
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
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.accessToken !== null;
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
.router-link {
  text-decoration: none;
  color: #fff;
}
</style>