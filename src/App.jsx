import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import LoginPage from './pages/loginpage';
import TestWork from './pages/testwork';
import EducationBoy from './assets/educationboy.png'
function App() {

  return (
    <>
    <BrowserRouter>
      <div className="body">
              <Routes>
                <Route path='/' element={
                  <>
                  <Header/>
                  <Main/>
                  <Footer/>
                   </>
                }/>
                   <Route path='LoginPage' element={<LoginPage/>}></Route>
                   <Route path='TestWork' element={<TestWork/>}></Route>
                </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}
function Main(){
  return <div className="main">
  <section> 
    <div className="intro">
      <div className="intro-container">
          <div className="circle"></div>
         <div className="intro-text">
         <h1>Обучение и оценки</h1>
         <p>
         Сдайте свой экзамен здесь проще и удобнее</p>
         <Link to='TestWork'>
         <i class="fa fa-angle-double-right"></i>
          <span>Сдать экзамен</span> 
         </Link>
         </div>
         <div className="intro-design">
          <img src={EducationBoy} alt="" />
         </div>
      </div>
    </div>
    <div className="about">
    </div>
   </section>
   </div>
}
export default App;
