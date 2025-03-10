import './homepage.scss';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';
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
                    <div>👋Легкий доступ для учителей.</div>
               <h1>Платформа для тестов и обучения</h1>
               <p>Онлайн-платформа для школьников, позволяющая проходить тесты, улучшать знания, проверять результаты и готовиться к экзаменам легко и удобно.</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                    <Link>Начало</Link>
                    <Link>Рабочая панель</Link>
                    </form>
               </div>
          </nav>
     </main>
     </>
}