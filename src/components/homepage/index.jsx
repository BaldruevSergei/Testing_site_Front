import './homepage.scss';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import Oros3Logo from '../../assets/oros3.svg';
import { useEffect, useState } from 'react';
import TestWork from '../../assets/testworkpage.png'
import Acctestchange from '../acctestchange';
import TeacherImg from '../../assets/teacher.png';
import StudentImg from '../../assets/student.png';
import TestImg from '../../assets/testing.png';
import ResultImg from '../../assets/result.png';


export default function Homepage(){
     return <div className='homepage' >
          <Header/>
          <Main/>
          <Footer/>
     </div>
}

function Main(){
     const [currentIndex, setIndex] = useState(0);
     const [progress, setProgress] = useState(0);
     useEffect(() => {
          const interval = setInterval(() => {
               setProgress(prevProgress => {
                    if (prevProgress === 100) {
                         setIndex(prevIndex => (prevIndex + 1) % info.length);
                         return 0;
                    }
                    return prevProgress + 1;
               });
          }, 50);
          return () => clearInterval(interval);
     }, []);
     const info = [
          {
               title: 'Учитель',
               description: 'Учитель может создавать тесты, просматривать результаты и управлять учениками.',
               icon: 'fas fa-chalkboard-teacher',
               image: TeacherImg,
          },
          {
               title: 'Ученик',
               description: 'Ученик может проходить тесты, проверять результаты и улучшать свои знания.',
               icon: 'fas fa-user-graduate',
               image: StudentImg,
          },
          {
               title: 'Тестирование',
               description: 'Платформа позволяет проводить тестирование для учеников.',
               icon: 'fas fa-vials',
               image: TestImg,
          },
          {
               title: 'Результаты',
               description: 'Просматривайте результаты тестов и анализируйте их для улучшения знаний.',
               icon: 'fas fa-chart-line',
               image: ResultImg,
          },
     ];


     return <>
     <main>
          <nav>
               <div>
                    <div className='banner'>👋Легкий доступ для учителей.</div>
               <h1>Платформа для тестов и обучения</h1>
               <p>Онлайн-платформа для школьников, позволяющая проходить тесты, улучшать знания, проверять результаты и готовиться к экзаменам легко и удобно.</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                    <Link to='/TestLibrary'>Рабочая панель</Link>
                    </form>
                    <div className='contributors'>
                    <img src={Oros3Logo} alt='telegram' width='80' height='80' />
                    <i className='fas fa-graduation-cap'></i>
                    </div>
               </div>
          </nav>
          <section className='features'>
               <div>
               <ul>
                    {info.map((item, index) => (
                     <li onClick={() => {setIndex(index), setProgress(0)}}>
                         <div className='progressBar' style={{ height: currentIndex === index ? 100 : 30 }}>
                         <div className='progress' style={{ height: currentIndex === index ? progress : 0 }}></div>
                         </div>
                          <span>{item.title}
                          <p style={{display: currentIndex === index ? "block" : "none"}}>{item.description}</p>
                          </span>
                         
                      </li> 
                    ))}
               </ul>
                    <div className='info'>
                         <img src={info[currentIndex].image} alt="Image"/>
                    </div>
               </div>
          </section>
     </main>
     </>
}