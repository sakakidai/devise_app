import Vue from 'vue'
import { required, email, max, min } from 'vee-validate/dist/rules';
import { extend, ValidationObserver, ValidationProvider, setInteractionMode, localize } from 'vee-validate';
import ja from 'vee-validate/dist/locale/ja.json';

setInteractionMode('eager');

localize('ja', ja);

extend('required', required);
extend('email', email);
extend('max', max);
extend('min', min);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);