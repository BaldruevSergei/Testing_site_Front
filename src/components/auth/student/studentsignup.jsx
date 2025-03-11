import { useState } from 'react';
import './studentauth.scss';
import { Link } from 'react-router-dom';
export default function StudentSignUp(){
     const createClasses = () => {
            let classes = [];
            for(let i = 1; i <= 12; i++){
                classes.push(<option value={i}>{i}</option>)
            }
            return classes;
     }
     const [visible, setVisible] = useState(false);
     const [password, setPassword] = useState('');
     const [school, setSchool] = useState('');
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
        <input type="password" placeholder='Повторить пароль' required /></span>
    <span className='schoolAndClasses'>
        <select onChange={(e) => setSchool(e.target.value)}>
            <option value=''selected>Школа</option>
            <option value="MRJS">Монгол Оросын Хамтарсан Сургууль</option>
        </select>
        <select>
            <option value="" selected>Класс</option>
            {createClasses()}
        </select>
    </span>
    </div>
    <button>Register</button>
    <span className='Warning'></span>
    <span className='login'>Have an account? <Link to='/Auth/Student'>Login</Link></span>
</form>
}