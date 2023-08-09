import React, { useEffect, useState } from 'react'
import getService from '../../Service/get.service'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { course } from '../../Interface/types';

import Rows from '../../Component/Course/Rows';

const List = () => {
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
  return (
    
 <>
 {loading ? (
       <>
       <div className='mt-32'>
       <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
           <TableRow>
             <TableCell>Dessert (100g serving)</TableCell>
             <TableCell align="right">Calories</TableCell>
             <TableCell align="right">Fat&nbsp;(g)</TableCell>
            
           </TableRow>
         </TableHead>
         <TableBody>
           {course?.data?.map((data:course) => (
             <TableRow
               key={data.name}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <Rows data={data}/>
               
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     </div>
     </>
 ):(<></>)}
 </>
  )
}

export default List