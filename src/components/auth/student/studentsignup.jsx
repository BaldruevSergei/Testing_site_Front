import { useState } from 'react';
import './studentauth.scss';
import { Link } from 'react-router-dom';
export default function StudentSignUp(){
     const createClasses = () => {
            let classes = [];
            for(let i = 8; i <= 12; i++){
                let currentChars = i === 12 ? ['A', 'Б', 'В', 'Г'] : ['A','Б','В','Г','Д','Е'];
                currentChars = i === 11 || i === 10 ? ['A', 'Б', 'В','Г','Д'] : currentChars;
                currentChars.forEach(char => {
                    classes.push(<option value={`${i}${char}`}>{`${i}${char}`}</option>);
                });
            }
            return classes;
     }
     const [visible, setVisible] = useState(false);
     const [password, setPassword] = useState('');
     const [name, setName] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [school, setSchool] = useState('');
     const [warning, setWarning] = useState('');
     const [grade, setGrade] = useState('');
     const [email, setMail] = useState('');
     const handleRegister = () => {
        if(name === '' || school === '' || grade === '' || password === '' || confirmPassword === ''|| email === ''){
            setWarning('Заполните все поля');
            return;
        }
        if(password.length < 6){
            setWarning('Пароль должен содержать минимум 6 символов');
            return;
        }
        if(name.length < 2){
            setWarning('Имя должно содержать минимум 2 символов');
            return;
        }
        if(password !== confirmPassword && school !== '' && grade !== '' && name !== ''){ 
            setWarning('Пароли не совпадают');
            return;
        }
        setWarning('');
        console.log('Registered')
     }
    return   <form className="StudentAuthSignUp" onSubmit={(e) => e.preventDefault()}>
    <h1>Регистрация студента</h1>
    <p>Привет👋</p>
    <div className='inputs'>
    <span>
    <i className='fas fa-user-alt'></i>
    <input type="text" placeholder='Имя' onChange={(e) => setName(e.target.value)} required/></span>
    <span>
    <i className="fa fa-envelope"></i>
    <input type='email' placeholder='Имайл' onChange={(e) => setMail(e.target.value)} required/></span>
    <span>
    <i className='fas fa-lock'></i>
        <input type={visible ? "text" : "password"} placeholder='Создать пароль' onChange={(e) => setPassword(e.target.value)} required/><i className={`fa fa-eye${visible ? "-slash" : ''}`} id='eye' onClick={() => setVisible(!visible)}></i></span>
    <span>
    <i className='fas fa-unlock'></i>
        <input type="password" placeholder='Повторить пароль' onChange={(e) => setConfirmPassword(e.target.value)} required /></span>
    <div className='classes'>
        <select onChange={(e) => setSchool(e.target.value)}>
            <option value=''selected>Школа</option>
            <option value="MRJS">Монгол Оросын Хамтарсан Сургууль</option>
        </select>
        <select onChange={(e) => setGrade(e.target.value)}>
            <option value="" selected>Класс</option>
            {createClasses()}
        </select>
    </div>
    </div>
    <button onClick={() => handleRegister()}>Зарегистрироваться</button>
    <span className='Warning'>{warning}</span>
    <span className='login'>Уже есть аккаунт? <Link to='/Auth/Student'>Войти</Link></span>
</form>
}