import React from 'react'
import ErrorIcon from "@mui/icons-material/Error"
import { Typography } from '@mui/material'
import { Link } from '@mui/material'
import "./notfound.css"

const NotFound = () => {
  return (
    <div className='PageNOtFound'>
        <ErrorIcon/>
        <Typography>Page Not Found</Typography>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default NotFound