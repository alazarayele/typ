import Api from "./Api";


const createCourse = (data : any)=>{
    return Api.post("course",data);
}

const postService ={
    createCourse
}

export default postService;