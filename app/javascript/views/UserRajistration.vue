<template>
  <v-row justify="center">
    <v-col cols="12" sm="9" md="8" lg="6">
      <h2>新規登録</h2>
      <validation-observer
        ref="observer"
        v-slot="{ passed, failed }"
      >
        <form @submit.prevent="submit">
          <v-subheader>
            名前
          </v-subheader>
          <validation-provider
            v-slot="{ errors }"
            name="名前"
            rules="required|max:255"
          >
            <v-text-field
              v-model="user.name"
              :counter="255"
              :error-messages="errors"
              outlined
              placeholder="Sakaki Dai"
            ></v-text-field>
          </validation-provider>

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
              hint="8文字以上で入力してください"
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
            登録
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
  import { mapMutations } from "vuex";
  export default {
    data () {
      return {
        user: {
          name: '',
          email: '',
          password: '',
        },
        showPassword: false
      }
    },
    methods: {
      async submit () {
        await this.$refs.observer.validate()
        this.$axios
          .post('/api/v1/auth', this.user)
          .then((response) => {
            this.$router.push('/')
            this.showDialog()
          })
          .catch(error => {
            console.log(error.response)
            error.response
          })
      },
      clear () {
        this.name = ''
        this.email = ''
        this.password = ''
        this.$refs.observer.reset()
      },
      ...mapMutations(['showDialog'])
    }
  }
</script>