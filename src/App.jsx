import { createContext, useEffect, useState } from 'react';
import Homepage from './components/homepage'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './components/auth/authpage';
import ErrorPage from './components/errorpage';
import TestLibrary from './components/testlibrarypage';
import TestRun from './components/testrunpage/testrun';
import TestPreview from './components/testpreview';
import Contacts from './components/contactspage'
import AdminPage from './components/userpages/adminpage';
import TeacherPage from './components/userpages/teacherpage';
const UserContext = createContext();

function App() {
  const [isLoggedIn, setLogged] = useState(false); 
  const [accountType, setType] = useState('') 
  // FOR TESTING, CHANGE THE TYPE TO EITHER teacher, student, admin TO SEE THE CHANGES BETWEEN COMPONENTS ALSO CHANGE LOGGED IN TO SEE THE REQUIREMENT FOR LOGGING IN


  return (
      <UserContext.Provider value={{ isLoggedIn, accountType, setLogged, setType }}>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Auth/:id' element={<AuthPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/TestLibrary' element={<TestLibrary />} />
          <Route path='/TestLibrary/TestRun/:id' element={<TestRun />} />
          <Route path='/TestLibrary/TestPreview/:id' element={<TestPreview />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/AdminControls' element={<AdminPage/>} />
          <Route path='/TeacherControls' element={<TeacherPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;

export { UserContext };
