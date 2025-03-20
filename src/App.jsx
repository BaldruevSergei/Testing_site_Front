import { createContext, useState } from 'react';
import Homepage from './components/homepage'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './components/auth/authpage';
import ErrorPage from './components/errorpage';
import TestLibrary from './components/testlibrarypage';
import TestRun from './components/testrunpage/testrun';
import TestPreview from './components/testpreview';
import Contacts from './components/contactspage'
const UserContext = createContext();

function App() {
  const [isLoggedIn, setLogged] = useState(false);  
  return (
    <UserContext.Provider value={isLoggedIn}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Auth/:id' element={<AuthPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/TestLibrary' element={<TestLibrary />} />
          <Route path='/TestLibrary/TestRun/:id' element={<TestRun />} />
          <Route path='/TestLibrary/TestPreview/:id' element={<TestPreview />} />
          <Route path='/Contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;

export { UserContext };
