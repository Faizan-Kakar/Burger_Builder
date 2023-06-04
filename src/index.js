import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request =>{
    console.log(request);
    return request;
}, error=> {
    console.log(error);
    return Promise.reject(error);
})

const instance = axios.interceptors.response.use(request =>{
    console.log(request);
    return request;
}, error=> {
    console.log(error);
    return Promise.reject(error);
})

axios.defaults.baseURL= 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = "Auth-TOKEN"
axios.defaults.headers.post['Content-Type'] = "application/json"

// This is for the removal of the interceptors
// axios.interceptors.response.eject(instance);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
