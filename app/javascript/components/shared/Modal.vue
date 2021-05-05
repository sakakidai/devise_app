<template>
  <v-row justify="center">
    <v-dialog
      v-model="$store.state.dialog"
      persistent
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">
          新規登録
        </v-card-title>
        <v-card-text>メールを送信しましたのでご確認ください</v-card-text>
        <v-row
          justify="center"
          class="pb-3"
        >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              elevation="2"
              @click="hideDialog()"
            >
              閉じる
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    ...mapMutations(["hideDialog"])
  }
};
</script>