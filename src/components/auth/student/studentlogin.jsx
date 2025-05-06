import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './studentauth.scss';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function StudentLogin() {
    const [visible, setVisible] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!login || !password) {
            setWarning("Заполните логин и пароль");
            return;
        }

        try {
            const response = await fetch("https://ee13-112-72-13-26.ngrok-free.app/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true"
                },
                body: JSON.stringify({ login, password })
            });

            const text = await response.text();
            if (!response.ok) {
                setWarning(text);
            } else {
                const [, studentId, studentName] = text.split(":");
                localStorage.setItem("studentId", studentId);
                localStorage.setItem("studentName", studentName);
                setWarning('');
                navigate("/student-dashboard");
            }
        } catch (error) {
            console.error("Ошибка при подключении к серверу:", error);
            setWarning("Ошибка подключения к серверу");
        }
    };

    return (
        <div className='mainContainer'>
            <div className='container'>
                <div className="header">
                    <div className="text">Вход ученика</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input
                            type="text"
                            placeholder='Логин'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <input
                            type={visible ? "text" : "password"}
                            placeholder='Пароль'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="password-toggle" onClick={() => setVisible(!visible)}>
                            {visible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                {warning && <div className="warning">{warning}</div>}
                <div className="submit-container">
                    <button className="submit" onClick={handleLogin}>Войти</button>
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;
