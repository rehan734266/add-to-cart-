// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import Home from './Component/Home/Home'
import ProductDetails from './ProductDetails/ProductDetails'
import Shopinglist from './Component/Shopinglist/Shopinglist'
import "./App.css"



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          
          <Route path='/shoping' element={<Shopinglist/>}></Route>
          
          
          
          <Route path='/Select/:id' element={<ProductDetails />}></Route>

          {/* <Route path='' element={<Slider></Slider>}></Route> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App