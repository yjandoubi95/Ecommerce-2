import React from 'react'
import { useMediaQuery } from 'react-responsive';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TopHead from './components/TopHead/TopHead';
import Footer from './components/Footer/Footer';
import SIgnUp from './pages/SignUp/SIgnUp';
import Login from './pages/LogIn/Login';
import PubHome from './components/PubHome/PubHome';
import ProductCard from './components/ProductCard/ProductCard';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div>
      <TopHead/>
      <Navbar/>
      <Routes>
        <Route path='/footer' element={<Footer/>}></Route>
        <Route path='/signUp' element={<SIgnUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/pub' element={<PubHome/>}></Route>
        <Route path='/prodCard' element={<ProductCard/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App