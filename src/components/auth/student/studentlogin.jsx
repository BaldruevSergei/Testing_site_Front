import { useState, useEffect } from 'react';
import './studentauth.scss';
import { Link } from 'react-router-dom';
import { authLogin, getStudents } from '../../../api/services';

export default function StudentLogin(){
    const [visible, setVisible] = useState(false);

    const [studentInfo, setStudentInfo] = useState({
        login: '',
        password: '',
    })

    const confirmLogin = async () => {
        try {
          const response = await authLogin({
            login: studentInfo.login,
            password: studentInfo.password
          });

        } catch (error) {
        }
      };
    const handleChange = (e) => {
        const {name, value} = e.target;
        setStudentInfo((prevInfo) => ({
            ...prevInfo,       
            [name]: value         
        }));
    }

    return <>
     <form className="StudentAuth" onSubmit={(e) => e.preventDefault()}>
        <h1>Вход Студента</h1>
        <p>Привет, с возвращением! 👋</p>
        <div className='inputs'>
        <span>
        <i className='fas fa-user-alt'></i>
        <input name="login"type="text" placeholder='Имя' required value={studentInfo.login} onChange={handleChange}/></span>
        <span>
        <i className='fas fa-lock'></i>
            <input name="password" type={visible ? "text" : "password"} placeholder='Пароль' onChange={handleChange} value={studentInfo.password} required/><i className={`fa fa-eye${visible ? "-slash" : ''}`} id='eye' onClick={() => setVisible(!visible)}></i></span>
        </div>
        <button onClick={() => confirmLogin()}>Войти</button>
        <span className="Warning"></span>
        <span className='checkbox'><span><input type='checkbox' id='remember'/><label for="remember">Запомнить меня</label></span> <Link>Забыли пароль?</Link></span>
        <span className='noAccount'>Нет аккаунта? <Link to='/Auth/StudentSignUp'>Регистрация</Link></span>
    </form>
    </>
}