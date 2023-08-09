import { TableCell } from '@mui/material'
import React from 'react'
import { course } from '../../Interface/types'

type Props = {}

const Rows = ({data}:any) => {
  return (
<>
<TableCell component="th" scope="row">
                 {data.name}
               </TableCell>
               <TableCell align="right">{data.description}</TableCell>
               <TableCell align="right">{data.creditHour}</TableCell>
               </>  )
}

export default Rows