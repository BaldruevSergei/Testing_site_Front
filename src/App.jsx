import { useState } from 'react';
import Homepage from './components/homepage'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={
            <Homepage/>
            }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
