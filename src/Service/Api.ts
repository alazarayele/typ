import axios from "axios";

const axiosCreate = axios.create({
    baseURL:"http://localhost:5167/api/",
    headers:{"Content-Type":"Application/json"}
})
export default axiosCreate;