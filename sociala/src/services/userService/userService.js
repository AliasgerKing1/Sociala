import axios from 'axios';

const apiUrl = "http://localhost:4000/api/"
let addUser = (obj) => {
      return axios.post(apiUrl + "user", obj)
    }

    export {addUser};