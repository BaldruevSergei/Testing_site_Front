
import {  Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/loginpage.css';
function LoginPage() {
      const location = useLocation()
      const role = location.state?.role
return <div className="LoginPage">
            <Link to="/">Начало</Link>
            <Container name={role}/>
      </div>
}
function Container(props){
      const [show, showPassword] = useState(false);
      const togglePasswordVisibility = () => {
            showPassword(!show);
      };

      const isStudent = props.name === "Студент" ? true : false;
      const content = 
            <div className="loginContainer">
                  <h1>{capitalizeFirstLetter(props.name)}</h1>
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
                  {isStudent ? <p>Нет аккаунта? <span><Link to='/SignUpPage'>Создать</Link></span></p> : ''}
            </div>
      return (
            <>{content}</>
      );
}
const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
};
function CreateClasses() {
      const options = [];
  
      for (let i = 12; i >= 6; i--) {
          const letters = i === 12 ? ['А', 'Б', 'В', 'Г'] : ['А', 'Б', 'В', 'Г', 'Д'];
  
          letters.forEach(letter => {
              options.push(
                  <option key={`${i}${letter}`} value={`${i}${letter}`}>{`${i}${letter}`}</option>
              );
          });
      }
      console.log(options)
      return <>{options}</>;
  }
export default LoginPage;