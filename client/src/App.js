import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/HomeContent/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Auth/Login/Login'
import Updates from './components/Updates/Updates'
import Register from './components/Auth/Register/Register'
import Cart from './components/Cart/Cart'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Products from './components/Products/Products'
import Search from './components/Search/Search'
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword'
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/updates' element={<Updates />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:pid' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
