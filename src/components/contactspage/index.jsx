import './contacts.scss'
import './contacts.scss';
import Header from '../header'
export default function Contacts() {
    return (
        <>
        <Header/>
        <div className="contacts-page">
            <h1>О проекте EXAMDIRECT.COM</h1>

            <div className="contact-block">
                <h3>Название компании</h3>
                <p>ООО EXAMDIRECT</p>
            </div>

            <div className="contact-block">
                <h3>Телефон</h3>
                <p>+976 9934 3567</p>
            </div>

            <div className="contact-block">
                <h3>Описание проекта</h3>
                <p>
                    Это клиентская часть системы тестирования, разработанная с использованием React и Vite.
                    Приложение предоставляет удобный интерфейс для учителей и учеников, позволяя управлять тестами,
                    проходить их и просматривать результаты.
                </p>
            </div>

            <div className="contact-block">
                <h3>Технологии</h3>
                <ul>
                    <li><strong>Язык программирования:</strong> JavaScript ES6+</li>
                    <li><strong>Библиотека:</strong> React</li>
                    <li><strong>Инструмент сборки:</strong> Vite</li>
                    <li><strong>Стили:</strong> CSS</li>
                    <li><strong>Управление состоянием:</strong> пропсы и контекст</li>
                </ul>
            </div>
        </div>
        </>
    );
}
