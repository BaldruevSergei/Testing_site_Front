import { Link } from 'react-router-dom';
import './header.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import Links from '../Links';
import Logo from '../../assets/logo.png';
export default function Header(){
     const [menu, setMenu] = useState(false);
     const [loginMenu, setLogin] = useState(false);
     const [isLoggedIn, setLogged] = useState(false);
     return <header>

          <div className="logo">
          <i className="fa fa-bars" id="menuBtn" onClick={() => {setMenu(!menu); setLogin(false)}}></i>
               <p><i className='fas fa-graduation-cap'></i>EduTest</p>
          </div>

          <div className="links">
               <span>
                    <Links/>
               </span>
               {!isLoggedIn &&
               (<><button onClick={() => {setLogin(!loginMenu); setMenu(false)}}>Зайти</button>
               <div className='loginOptions' style={{height: loginMenu ? "150px" : '0',}}>
                    <Link to='/Auth/Student'>
                    <i className='fas fa-user-graduate'></i>Студент</Link>
                    <Link to='/Auth/Teacher'>
                    <i className='fas fa-chalkboard-teacher'></i>
                    Учитель</Link>
                    <Link to='/Auth/Admin'>
                    <i className="fa fa-shield"></i>
                    Админ</Link>
               </div></>)}
               {isLoggedIn && (
                    <div className="profile">
                         <img src={Logo} alt="" onClick={() => {setLogin(!loginMenu); setMenu(false)}}/>
                              <div className="profileMenu" style={{height: loginMenu ? '200px' : 0}}>
                                   <span>
                                   <div className="pfp">
                                        <img src={Logo} alt="" />
                                   </div>
                                   <div className="studentinfo">
                                        <li>Имя: <div></div></li>
                                        <li>Класс: <div></div> </li>
                                        <li>Имайл: <div></div></li>
                                        <li>Роль: <div></div></li>
                                   </div>
                                   </span>
                                   <button>Редактировать профиль</button>
                              </div>
                    </div>
               )}
               <div className="responsiveMenu" style={{height: menu ? "200px" : "0", visibility: menu ? "visible" : "hidden"}}>
                    <Links/>
               </div>
          </div>

     </header>
}

