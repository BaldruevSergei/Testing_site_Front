import { useState } from 'react';
import Homepage from './components/homepage'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './components/auth/authpage';
import ErrorPage from './components/errorpage';
import TestLibrary from './components/testlibrarypage';
import TestRun from './components/testrunpage/testrun';
import TestPreview from './components/testpreview';
import Contacts from './components/contactspage'

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={
            <Homepage/>
            }></Route>
          <Route path='/Auth/:id' element={<AuthPage/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
          <Route path='/TestLibrary' element={<TestLibrary/>}></Route>
          <Route path='TestLibrary/TestRun/:id' element={<TestRun/>}></Route>
          <Route path='TestLibrary/TestPreview/:id' element={<TestPreview/>}></Route>
          <Route path='/Contacts' element={<Contacts/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
