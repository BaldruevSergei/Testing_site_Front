import { Link } from 'react-router-dom';
import './header.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import Links from '../Links';
import Logo from '../../assets/logo.png';
export default function Header(){
     const [menu, setMenu] = useState(false);
     const [loginMenu, setLogin] = useState(false);
     return <header>

          <div className="logo">
          <i className="fa fa-bars" id="menuBtn" onClick={() => {setMenu(!menu); setLogin(false)}}></i>
               <p><i className='fas fa-graduation-cap'></i>EduTest</p>
          </div>

          <div className="links">
               <span>
                    <Links/>
               </span>
               <button onClick={() => {setLogin(!loginMenu); setMenu(false)}}>Зайти</button>
               <div className='loginOptions' style={{height: loginMenu ? "100px" : '0',}}>
                    <Link>
                    <i className='fas fa-user-graduate'></i>Студент</Link>
                    <Link>
                    <i class='fas fa-chalkboard-teacher'></i>
                    Учитель</Link>
               </div>

               <div className="responsiveMenu" style={{height: menu ? "200px" : "0", visibility: menu ? "visible" : "hidden"}}>
                    <Links/>
               </div>
          </div>

     </header>
}

