<template>
  <v-row justify="center">
    <v-col cols="12" sm="9" md="8" lg="6">
      <h2>ログイン</h2>
      <validation-observer
        ref="observer"
        v-slot="{ passed, failed }"
      >
        <form @submit.prevent="submit">
          <v-subheader>
            メールアドレス
          </v-subheader>
          <validation-provider
            v-slot="{ errors }"
            name="メールアドレス"
            rules="required|email"
          >
            <v-text-field
              v-model="user.email"
              :error-messages="errors"
              required
              outlined
              placeholder="sakakidai@example.com"
            ></v-text-field>
          </validation-provider>

          <v-subheader>
            パスワード
          </v-subheader>
          <validation-provider
            v-slot="{ errors }"
            name="パスワード"
            rules="required|min:8|max:32"
          >
            <v-text-field
              v-model="user.password"
              :error-messages="errors"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              hint="At least 8 characters"
              counter="32"
              outlined
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </validation-provider>

          <v-btn
            class="mr-4"
            type="submit"
            :disabled="!passed || failed"
          >
            ログイン
          </v-btn>
          <v-btn @click="clear">
            リセット
          </v-btn>
        </form>
      </validation-observer>
    </v-col>
  </v-row>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    data () {
      return {
        user: {
          email: '',
          password: '',
        },
        showPassword: false
      }
    },
    methods: {
      async submit () {
        await this.$refs.observer.validate()
        this.$store.dispatch('login', this.user)
        this.$router.push('/')
        this.showFlash()
      },
      clear () {
        this.email = ''
        this.password = ''
        this.$refs.observer.reset()
      },
      ...mapActions(['showFlash'])
    }
  }
</script>