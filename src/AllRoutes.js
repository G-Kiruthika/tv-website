import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/screen/home/Home'
import Products from '../src/screen/products/Products'
import LoginForm from './screen/loginform/LoginForm'
import Signup from '../src/screen/signup/Signup'
const AllRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/products' element ={<Products/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    )
}
export default AllRoutes