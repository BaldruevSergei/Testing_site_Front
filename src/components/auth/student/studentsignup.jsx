import { useState } from 'react';
import './studentauth.scss';
import { Link } from 'react-router-dom';
export default function StudentSignUp(){
     const [visible, setVisible] = useState(false);
    return   <form className="StudentAuthSignUp" onSubmit={(e) => e.preventDefault()}>
    <h1>Student Register</h1>
    <p>Привет👋</p>
    <div className='inputs'>
    <span>
    <i className='fas fa-user-alt'></i>
    <input type="text" placeholder='Имя' required/></span>
    <span>
    <i className='fas fa-lock'></i>
        <input type={visible ? "text" : "password"} placeholder='Создать пароль' required/><i className={`fa fa-eye${visible ? "-slash" : ''}`} id='eye' onClick={() => setVisible(!visible)}></i></span>
    <span>
    <i className='fas fa-unlock'></i>
        <input type={visible ? "text" : "password"} placeholder='Повторить пароль' required/></span>
    </div>
    <button>Register</button>
    <span className='login'>Have an account? <Link to='/Auth/Student'>Login</Link></span>
</form>
}