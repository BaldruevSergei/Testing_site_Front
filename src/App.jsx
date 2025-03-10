import { useState } from 'react';
import Homepage from './components/homepage'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './components/auth/authpage';

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={
            <Homepage/>
            }></Route>
          <Route path='/Auth/:id' element={<AuthPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
