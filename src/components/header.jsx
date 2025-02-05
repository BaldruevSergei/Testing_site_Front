import React, { useState } from 'react';
import '../styles/header.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Header() {
     return (
          <header>
               <ResponsiveMenu />
               <div className='logo'>"LOGOHERE"</div>
               <div className="links">
                    <ul>
                         <li><Link to="/">Начало</Link></li>
                         <li><Link to="/TestWork">Проверочные работы</Link></li>
                         <li>Контакты</li>
                    </ul>
                    <LoginMenu/>
               </div>
          </header>
     );
}
function LoginMenu() {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     return (
          <div>
               <div className="accountDashboard">
                    <button type="button" onClick={toggleMenu}>Зайти</button>
                    <div className="userProfile"></div>
                    <div className="login-menu" style={{ height: menuOpen ? '200px' : '0', border: menuOpen ? '' : 'transparent', background: menuOpen ? '' : 'transparent'}}>
                         {menuOpen && (
                              <ul>
                                   <li><Link to="/LoginPage" state={{role: 'Учитель'}} onClick={() => setMenuOpen(false)}>Учитель</Link></li>
                                   <li><Link to="/LoginPage" state={{role: 'Студент'}} onClick={() => setMenuOpen(false)}>Студент</Link></li>
                                   <li><Link to="/LoginPage" state={{role: 'Админ'}} onClick={() => setMenuOpen(false)}>Админ</Link></li>
                              </ul>
                         )}
                    </div>
               </div>
          </div>
     );
}
function ResponsiveMenu() {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     return (
          <div>
               <div className='responsive-menuBtn' onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
               </div>
               {menuOpen && (
                    <ul className="responsive-menu">
                         <li><Link to="/">Начало</Link></li>
                         <li><Link to="/TestWork">Проверочные работы</Link></li>
                         <li>Контакты</li>
                    </ul>
               )}
          </div>
     );
}

export default Header;