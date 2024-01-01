import React from 'react'
import { useMediaQuery } from 'react-responsive';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TopHead from './components/TopHead/TopHead';
import Footer from './components/Footer/Footer';

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div>
      <TopHead/>
      <Navbar/>
      <Routes>
        <Route path='/footer' element={<Footer/>}></Route>
      </Routes>
    </div>
  )
}

export default App