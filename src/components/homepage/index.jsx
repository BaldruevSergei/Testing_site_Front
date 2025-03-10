import './homepage.scss';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import Oros3Logo from '../../assets/oros3.svg';
export default function Homepage(){
     return <div className='homepage' >
          <Header/>
          <Main/>
          <Footer/>
     </div>
}

function Main(){
     return <>
     <main>
          <nav>
               <div>
                    <div className='banner'>👋Легкий доступ для учителей.</div>
               <h1>Платформа для тестов и обучения</h1>
               <p>Онлайн-платформа для школьников, позволяющая проходить тесты, улучшать знания, проверять результаты и готовиться к экзаменам легко и удобно.</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                    <Link>Начало</Link>
                    <Link>Рабочая панель</Link>
                    </form>
                    <div className='contributors'>
                    <img src={Oros3Logo} alt='telegram' width='80' height='80' />
                    <i className='fas fa-graduation-cap'></i>
                    </div>
               </div>
          </nav>
          <section className='features'>
               <div>
                    
               </div>
          </section>
     </main>
     </>
}