import './App.css'
import Header from './components/header'
import introEducation from './assets/education.png'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import LoginPage from './pages/loginpage';
function App() {

  return (
    <>
    <BrowserRouter>
      <div className="body">
          <Header/>
              <Routes>
                <Route path='/' element={
                  <div className="main">
                  <section> 
                    <div className="intro">
                      <div className="empty"></div>
                      <div className="intro-container">
                         <div className="intro-text">
                         <h1>Обучение и оценки</h1>
                         <p>
                         Сдайте свой экзамен здесь проще и удобнее</p>
                         <button>Сдать экзамен</button>
                         </div>
                      <div className="intro-design">
                        <img src={introEducation}/>
                      </div>
                      </div>
                    </div>
                    <div className="about">
                    </div>
                   </section>
                   </div>
                }/>
                   <Route path='/LoginPage' element={<LoginPage/>}></Route>
                  </Routes>
            <Footer/>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
