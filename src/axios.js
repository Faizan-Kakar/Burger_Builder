import axios from "axios";

const instant = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

instant.defaults.headers.post['Content-type'] = "instances are used here/jason";

export default axios;