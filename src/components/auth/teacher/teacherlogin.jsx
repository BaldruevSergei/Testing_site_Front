import { useState } from 'react';
import './teacher.scss';
export default function TeacherLogin(){
    const [visible, setVisible] = useState(false);
    return <>
     <form className="TeacherAuth" onSubmit={(e) => e.preventDefault()}>
        <h1>Вход Учителя</h1>
        <p>Привет, с возвращением! 👋</p>
        <div className='inputs'>
        <span>
        <i className='fas fa-user-alt'></i>
        <input type="text" placeholder='Имя' required/></span>
        <span>
        <i className='fas fa-lock'></i>
            <input type={visible ? "text" : "password"} placeholder='Пароль' required/><i className={`fa fa-eye${visible ? "-slash" : ''}`} id='eye' onClick={() => setVisible(!visible)}></i></span>
        </div>
        <button>Войти</button>
        <span className='Warning'></span>
    </form>
    </>
}