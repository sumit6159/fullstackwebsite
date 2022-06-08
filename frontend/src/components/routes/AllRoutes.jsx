import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../homepage/Home'
import ProductDetails from '../product/ProductDetail'
import Products from '../product/Products'



 const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}


export default AllRoutes