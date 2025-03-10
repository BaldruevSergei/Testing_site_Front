import { useState } from 'react';
import './adminlogin.scss';
export default function AdminLogin() {
    const [visible, setVisible] = useState(false);

    return <>
    <form className="AdminAuth" onSubmit={(e) => e.preventDefault()}>
        <h1>Вход администратора</h1>
        <p>Привет, с возвращением! 👋</p>
        <div className='inputs'>
        <span>
        <i className='fas fa-user-alt'></i>
        <input type="text" placeholder='Имя' required/></span>
        <span>
        <i className='fas fa-lock'></i>
            <input type={!visible ? "text" : "password"} placeholder='Пароль' required/><i className={`fa fa-eye${!visible ? "-slash" : ''}`} id='eye' onClick={() => setVisible(!visible)}></i></span>
        </div>
        <button>Зайти</button>
    </form>
    </>
}