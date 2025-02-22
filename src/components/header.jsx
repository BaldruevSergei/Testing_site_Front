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
                         <li>Проверочные работы</li>
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
               </div>
               {menuOpen && (
                    <div className="login-menu">
                         <ul>
                              <li>Учитель</li>
                              <li>Студент</li>
                              <li>Админ</li>
                         </ul>
                    </div>
               )}
          </div>
     )
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
                         <li>Начало</li>
                         <li>Проверочные работы</li>
                         <li>Контакты</li>
                    </ul>
               )}
          </div>
     );
}

export default Header;