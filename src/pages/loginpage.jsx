
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
      const [selectedValue, setValue] = useState('')
      const setSelectedValue = event => {
            const value = event.target.value;
            setValue(value);
            console.log(value)
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
                              <select value={selectedValue} onChange={setSelectedValue} className='schoolInfo'>
                                    <option selected>Название школы</option>
                                    <option value="MRJS">Монголия-Российская совместная школа</option>
                              </select>
                              <select value={selectedValue} onChange={setSelectedValue}>
                                    <option selected>Класс</option>
                                    <CreateClasses/>
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