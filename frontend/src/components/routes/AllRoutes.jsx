import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../homepage/Home'


 const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}


export default AllRoutes