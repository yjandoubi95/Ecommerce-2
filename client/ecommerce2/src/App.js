import React from 'react'
import { useMediaQuery } from 'react-responsive';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div>
      <Routes>
        <Route path='/navbar' element={<Navbar/>}></Route>
      </Routes>
    </div>
  )
}

export default App