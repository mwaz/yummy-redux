import axios from 'axios';

const baseUrl = 'http://0.0.0.0:5000/yummy_api/v1';
export default {
  user: {
    login: credentials =>
      axios
        .post(` ${baseUrl}/auth/login`, credentials)
        .then(response => response.data),

    register: userdetails =>
      axios
        .post(` ${baseUrl}/auth/register`, userdetails)
        .then(response => response.data)
  }
};
