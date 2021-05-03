<template>
  <v-row justify="center">
    <v-col cols="12" sm="9" md="8" lg="6">
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
            name="Name"
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
            name="email"
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
            name="Password"
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
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </form>
      </validation-observer>
    </v-col>
  </v-row>
</template>

<script>
  import { required, email, max, regex, min } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  setInteractionMode('eager')

  extend('required', {
  ...required,
  message: '{_field_} can not be empty',
  })

  extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
  ...email,
  message: 'Email must be valid',
  })

  extend('min', {
    ...min,
    message: 'The {_field_} field must be {length} or more',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver
    },
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
        console.log('submit!!')
        this.$axios.post('/api/v1/auth', this.user).then((response) => {
          alert('success!!')
        })
      },
      clear () {
        this.name = ''
        this.email = ''
        this.password = ''
        this.$refs.observer.reset()
      }
    }
  }
</script>
