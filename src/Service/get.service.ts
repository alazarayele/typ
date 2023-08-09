import Api from "./Api";


const getCourse = () => {
    return Api.get("Course");
} 
const getService = {
    getCourse
}
export default getService;