import Api from "./Api";


const updateCoures=(data:any,id:any)=>{
//  console.log(id);
   console.log(data);
   
   
   return Api.put(`/Course/${id}`,data);
}

const updateService = {
   updateCoures
}

export default updateService;