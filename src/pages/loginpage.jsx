import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/loginpage.css";

function LoginPage() {
  const location = useLocation();
  const role = location.state?.role;
  return (
    <div className="LoginPage">
      <Link to="/">Начало</Link>
      <Container name={role} />
    </div>
  );
}

function Container(props) {
  const [show, setShowPassword] = useState(false);
  const [signUp, setSignUpContainer] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedClass, setSelectedClass] = useState(""); 
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState('')
  const togglePasswordVisibility = () => setShowPassword(!show);
  const [warning, setWarning] = useState('')
  const toggleSignUp = () => {
      setSignUpContainer(!signUp);
      setUsername("");
      setPassword(""); 
      setSelectedSchool(""); 
      setSelectedClass(""); 
      setWarning('')
  };
  const handleSubmit = (e) => {
      e.preventDefault()
      if(password.length < 8){
            setWarning("Ваш пароль не может быть короче 8 символов");
      } else {
            setWarning("")
      }
  }
  const handleSchoolChange = (e) => {
      const SchoolValue = e.target.value
      setSelectedSchool(SchoolValue)
};
  const handleClassChange = (e) => {
      const ClassValue = e.target.value
      setSelectedClass(ClassValue)
};

  const isStudent = props.name === "Студент";

  const content = !signUp ? (
    <div className="loginContainer">
      <h1>{capitalizeFirstLetter(props.name)}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <span>
        <i class='fas fa-user-circle'></i>
          <input type="text" placeholder="Имя пользователя" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </span>
        <span>
          <i className="fa fa-lock"></i>
          <input type={show ? "text" : "password"} placeholder="Пароль" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          <i className={`fa ${show ? "fa-eye-slash" : "fa-eye"}`} onClick={togglePasswordVisibility}></i>
        </span>
        <span className="remember">
          <input type="checkbox" id="RememberMe" />
          <label htmlFor="RememberMe">Запомнить меня?</label>
        </span>
        <button>Войти</button>
        <p className="warning"></p>
      </form>
      {isStudent && <p>Нет аккаунта? <span onClick={toggleSignUp}>Создать</span></p>}
    </div>
  ) : (
    <div className="loginContainer">
      <h1>Создать аккаунт</h1>
      <form onSubmit={handleSubmit}>
        <span>
          <i className="fa fa-user-circle-o"></i>
          <input type="text" placeholder="Имя пользователя" required value={username} onChange={(e) => setUsername(e.target.value)}/>
        </span>
        <span>
          <i className="fa fa-lock"></i>
          <input type={show ? "text" : "password"} placeholder="Пароль" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          <i className={`fa ${show ? "fa-eye-slash" : "fa-eye"}`} onClick={togglePasswordVisibility}></i>
        </span>
        
        {/* School Selection */}
        <select value={selectedSchool} onChange={handleSchoolChange} className="schoolInfo" required>
          <option value="">Название школы</option>
          <option value="MRJS">Монголия-Российская совместная школа</option>
        </select>

        {/* Class Selection */}
        <select value={selectedClass} onChange={handleClassChange} required>
          <option value="">Класс</option>
          <CreateClasses />
        </select>

        <span className="remember">
          <input type="checkbox" id="RememberMe" />
          <label htmlFor="RememberMe">Запомнить меня?</label>
        </span>
        <button type="submit">Зарегистрироваться</button>
        <p className="warning">{warning}</p>
      </form>
      {isStudent && <p>Уже есть аккаунт? <span onClick={toggleSignUp}>Войти</span></p>}
    </div>
  );

  return <>{content}</>;
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function CreateClasses() {
  const options = [];

  for (let i = 12; i >= 6; i--) {
    const letters = i === 12 ? ["А", "Б", "В", "Г"] : ["А", "Б", "В", "Г", "Д"];

    letters.forEach((letter) => {
      options.push(
        <option key={`${i}${letter}`} value={`${i}${letter}`}>
          {`${i}${letter}`}
        </option>
      );
    });
  }
  
  return <>{options}</>;
}

export default LoginPage;
