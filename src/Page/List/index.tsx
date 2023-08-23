import React, { useEffect, useRef, useState } from 'react'
import getService from '../../Service/get.service'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { course } from '../../Interface/types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Rows from '../../Component/Course/Rows';
import { Button, TextField } from '@mui/material';
import deleteService from '../../Service/delete.service';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import updateService from '../../Service/put.service';

const List = () => {
  const navigate = useNavigate();

        const [open, setOpen] = React.useState(false);
        const [openEdit, setEditOpen] = React.useState(false);
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };
    const [course,setCourse] = useState<any>();
    const [loading,setLoading] = useState<Boolean>(false);
    useEffect (()=>{
        getService.getCourse().then((res)=>{
            console.log(res);
            setLoading(true);
            setCourse(res);
        })
    },[])
    console.log(course);
    var courseid = useRef<number>()
    var name = useRef("")
    var description = useRef<string>()
    var creaditHour=useRef<number>()
    const hadleClickOpen=(id:any) =>{
      setOpen(true);
      course?.data.map((response:course)=>{
        
        if  (response.id===id)
        {
          courseid.current = response.id;
          console.log(response.id);
        }
      })
      
    }
      const {register,handleSubmit} = useForm()

    const hadleEditOpen=(id:any) =>{
      setOpen(true);
      course?.data.map((response:course)=>{
        
        if  (response.id===id)
        {
          courseid.current = response.id;
          name.current = response.name;
          description.current = response.description;
          creaditHour.current = response.creditHour;
          console.log(response.id);
          console.log(description.current);
          console.log(name.current);
          console.log(creaditHour.current);
          
          
          
        }
      })
      
    }

    const handleDelete =()=>{
      deleteService.deleteCourse(courseid.current).then((res)=>{
         navigate(0);   
      })
    }
    const onSubmit = (data:any) =>{
      
      updateService.updateCoures(data,courseid.current).then((res) =>{
        navigate(0);
        
      })
    }
    
  return (
    
 <>
   
 {loading ? (
       <>
       <div className='mt-32'>
       <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
           <TableRow>
             <TableCell>Name</TableCell>
             <TableCell >Description</TableCell>
             <TableCell >CreditHour</TableCell>
            
           </TableRow>
         </TableHead>
         <TableBody>
           {course?.data?.map((data:course) => (
             <TableRow
               key={data.name}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell component="th" scope="row">
                 {data.name}
               </TableCell>
               <TableCell >{data.description}</TableCell>
               <TableCell >{data.creditHour}</TableCell>
               <TableCell >
               <Button onClick={()=>hadleEditOpen(data.id)}>Edit</Button>
                 <Button onClick={()=>hadleClickOpen(data.id)}>Delete</Button>
             
                 </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     </div>
     </>
 ):(<></>)}
    <Dialog
        open={openEdit}
        onClose={handleEditClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           DO you WANT
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleClose} autoFocus>
            NO
          </Button>
        </DialogActions>
      </Dialog>
      

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-6 gap-2'>
              <TextField
              defaultValue={name.current}
              label="name"
              className='col-start-2 col-end-6'
              size='small'
              {...register("name")}
              />
                <TextField
              defaultValue={description.current}
              label="description"
              className='col-start-2 col-end-6'
              size='small'
              {...register("description")}
              />
              
                <TextField
              defaultValue={creaditHour.current}
              label="creditHour"
              className='col-start-2 col-end-6'
              size='small'
              {...register("creditHour")}
              />
              <input
              defaultValue={courseid.current}
              type='hidden'></input>

             
              <div className="col-start-4 col-end-5 flex ml-20">
                <Button>fff</Button>
          <input
            className="mt-4 w-32 flex  justify-center fixed  font-bold py-2  border border-yellow-400 rounded"
            type="submit"
          />
        </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            NO
          </Button>
        </DialogActions>
      </Dialog>
 </>
  )
}

export default List