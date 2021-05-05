import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  }
});
// 書いている途中
// instance.interceptors.response.use((response) => {
//   if (response.headers['access-token']) {

//   }
// })

export default instance;