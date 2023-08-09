import { Container, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import postService from '../../Service/post.service'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

type Input = {
    name:string,
    description:string,
    creditHour:string
}
const CreateStudent = () => {
    const navigate = useNavigate()

    const formvalidation =yup.object().shape({
            name:yup.string().required("name required"),
            description:yup.string().required("description required"),
            creditHour:yup.string().required("must fil")
    })

    
    const {register,handleSubmit,formState:{errors}}=useForm<Input>({
        resolver: yupResolver(formvalidation),
    })
    const onSubmit = (data : any)=>{
        postService.createCourse(data).then((res)=>{
            navigate("/list")
            console.log(res);
        })
    }
  return (
    <Container className="bg-slate-50 mt-20 mb-20 pb-20 rounded-lg drop-shadow-lg sm:mt-2">
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="grid grid-cols-3 mt-32 flex items-center justify-center ">
        <h1 className="mt-4 mb-4 text-2xl text-center mr-20 col-start-2 col-end-3">
          Creare Student
        </h1>
        <div className="col-start-2 col-end-3">
          <TextField
            label="First Name"
            sx={{
              width: 300,
            }}
           {...register("name")}
          />
          <p color="error" className="text-red-700 col-start-2 col-end-3">
        {errors.name?.message}
          </p>
        </div>
        <div className="col-start-2 col-end-3 pt-3">
          <TextField
            label="Description"
            sx={{
              width: 300,
            }}
            {...register("description")}
          />
          <p color="error" className="text-red-700 col-start-2 col-end-3">
          {errors.description?.message}
          </p>
        </div>
        <div className="col-start-2 col-end-3 pt-3">
          <TextField
            label="creaditHour"
            sx={{
              width: 300,
            }}
            {...register("creditHour")}
          />
          <p color="error" className="text-red-700 col-start-2 col-end-3">
          {errors.creditHour?.message}
          </p>
        </div>
        
       
        <div className="col-start-2 col-end-3 flex ml-20">
          <input
            className="mt-4 w-32 flex  justify-center  font-bold py-2  border border-yellow-400 rounded"
            type="submit"
          />
        </div>
      </div>
    </form>
  </Container>
  )
}

export default CreateStudent