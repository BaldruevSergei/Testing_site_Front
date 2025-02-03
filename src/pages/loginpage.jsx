import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/loginpage.css';
function LoginPage() {
 const params = useParams()
return <div className="LoginPage">
            <Link to="/">Начало</Link>
            <Container params={params} />
      </div>
}
function Container({ params }){
      const [show, showPassword] = useState(false);
      const togglePasswordVisibility = () => {
            showPassword(!show);
      };
      const [signUp, signUpContainer] = useState(false);
      function toggleSignUp(){
            signUpContainer(!signUp)
      }
      const isStudent = params.name === "student" ? true : false;
      const content = !signUp ? (
            <div className="loginContainer">
                  <h1>{capitalizeFirstLetter(params.name)}</h1>
                  <form onSubmit={(e) => { e.preventDefault(); }}>
                        <span>
                              <i className="fa fa-user-circle-o"></i>
                              <input type="text" placeholder='Имя пользователя' required />
                        </span>
                        <span>
                              <i className="fa fa-lock"></i>
                              <input type={show ? "text" : "password"} placeholder='Пароль' required />
                              <i className={`fa ${show ? "fa-eye-slash" : "fa-eye"}`} onClick={togglePasswordVisibility}></i>
                        </span>
                        <span className='remember'>
                              <input type="checkbox" id="RememberMe" />
                              <label htmlFor="RememberMe">Запомнить меня?</label>
                        </span>
                        <button>Войти</button>
                        <p className='warning'></p>
                  </form>
                  {isStudent ? <p>Нет аккаунта? <span onClick={toggleSignUp}>Создать</span></p> : ''}
            </div>
      ) : (
            <div className="loginContainer">
                  <h1>Создать аккаунт</h1>
                  <form onSubmit={(e) => { e.preventDefault(); }}>
                        <span>
                              <i className="fa fa-user-circle-o"></i>
                              <input type="text" placeholder='Имя пользователя' required />
                        </span>
                        <span>
                              <i className="fa fa-lock"></i>
                              <input type={show ? "text" : "password"} placeholder='Пароль' required />
                              <i className={`fa ${show ? "fa-eye-slash" : "fa-eye"}`} onClick={togglePasswordVisibility}></i>
                        </span>
                              <select className='schoolInfo'>
                                    <option selected>Название школы</option>
                                    <option value="">Монголия-Российская совместная школа</option>
                              </select>
                        <span className='remember'>
                              <input type="checkbox" id="RememberMe" />
                              <label htmlFor="RememberMe">Запомнить меня?</label>
                        </span>
                        <button>Зарегистрироваться</button>
                        <p className='warning'></p>
                  </form>
                  {isStudent ? <p>Уже есть аккаунт? <span onClick={toggleSignUp}>Войти</span></p> : ''}
            </div>
      );
      return (
            <>{content}</>
      );
}
const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
};

export default LoginPage;