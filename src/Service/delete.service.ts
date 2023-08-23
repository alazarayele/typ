import Api from "./Api"
const deleteCourse = (id:any) => {
    return Api.delete(`Course/${id}`);
} 
const deleteService = {
    deleteCourse
}
export default deleteService;