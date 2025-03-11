import { useState } from 'react';
import './studentauth.scss';
import { Link } from 'react-router-dom';

export default function StudentLogin(){
    const [visible, setVisible] = useState(false);
    return <>
     <form className="StudentAuth" onSubmit={(e) => e.preventDefault()}>
        <h1>Вход Студента</h1>
        <p>Привет, с возвращением! 👋</p>
        <div className='inputs'>
        <span>
        <i className='fas fa-user-alt'></i>
        <input type="text" placeholder='Имя' required/></span>
        <span>
        <i className='fas fa-lock'></i>
            <input type={visible ? "text" : "password"} placeholder='Пароль' required/><i className={`fa fa-eye${visible ? "-slash" : ''}`} id='eye' onClick={() => setVisible(!visible)}></i></span>
        </div>
        <button>Зайти</button>
        <span className='checkbox'><span><input type='checkbox' id='remember'/><label for="remember">Запомнить меня</label></span> <Link>Забыли пароль?</Link></span>
        <span className='noAccount'>Нет аккаунта? <Link to='/Auth/StudentSignUp'>Регистрация</Link></span>
    </form>
    </>
}