import { useState } from 'react';
import Homepage from './components/homepage'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './components/auth/authpage';
import ErrorPage from './components/errorpage';

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={
            <Homepage/>
            }></Route>
          <Route path='/Auth/:id' element={<AuthPage/>}></Route>
          <Route path='/:url' element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
