import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  }
});
export default instance;