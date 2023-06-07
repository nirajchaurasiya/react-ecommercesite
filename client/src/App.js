import React, { useContext } from 'react'
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
import Checkout from './components/Checkout/Checkout'
import Profile from './components/Profile/Profile'
import { AuthContext } from './Context/AuthContext'
import Editprofile from './components/EditProfile/Editprofile'
import Logout from './components/Logout/Logout'
import Dashboard from './components/Dashboard/Dashboard'
import Category from './components/Category/Category'
import CheckProductDestination from './components/CheckProductDestination/CheckProductDestination'
import FAQ from './components/FAQ/FAQ'
import Help from './components/Help/Help'
export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/search/:query' element={<Search />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/updates' element={<Updates />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/profile/:uid' element={user ? <Profile /> : <Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile/editprofile' element={<Editprofile />} />
          <Route path='/category' element={<Category />} />
          <Route path='/product/status/:pid' element={<CheckProductDestination />} />
          <Route path='/checkout' element={user ? <Checkout /> : <Login />} />
          <Route path='/profile/logout' element={<Logout />} />
          <Route path='/product/:pid' element={<ProductDetails />} />
          <Route path='/user/support/faq' element={<FAQ />} />
          <Route path='/user/support/help' element={<Help />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
