import axios from 'axios';

const instance = axios.create({
    baseURL:"http://127.0.0.2:8000/api/v1",

});


//global configuration for axios
//instance.defaults.headers.common['Authorization'] = 'AUTHORIZATION TOKEN';

export default instance;