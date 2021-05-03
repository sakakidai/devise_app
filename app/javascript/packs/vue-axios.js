import axios from 'axios'
const VueAxiosPlugin = {}
export default VueAxiosPlugin.install = function(Vue, { axios }) {
  axios.defaults.baseURL = 'http://localhost:3000'
  axios.defaults.headers.common = {
    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  }
  Vue.axios = axios
}