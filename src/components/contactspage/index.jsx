import './contacts.scss';
import Header from '../header';
import Footer from '../footer';
import { useEffect, useState } from 'react';
import Oros3Logo from '../../assets/oros3.svg';

export default function Contacts() {
    return (
        <div className='contacts-page'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

function Accordion({ title, children }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="accordion-item">
            <button className="accordion-toggle" onClick={() => setOpen(!open)}>
                {open ? '▼' : '▶'} {title}
            </button>
            {open && <div className="accordion-content">{children}</div>}
        </div>
    );
}

function Main() {
    const textArray = [
        " Мы — команда молодых разработчиков.",
        " Стремимся к созданию элегантных цифровых решений.",
        " Поддерживаем чистый код и дружную атмосферу.",
        " Присоединяйтесь к нам в цифровом путешествии!",
        "Эм… что я тут делаю? Мозг отключён. "
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = textArray[currentIndex];

        if (charIndex < currentText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(currentText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            // Full text has been displayed, wait and switch to next
            const delay = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % textArray.length);
                setDisplayedText("");
                setCharIndex(0);
            }, 2000);
            return () => clearTimeout(delay);
        }
    }, [charIndex, currentIndex]);

    return (
        <main className="contacts-main">
            <section className="contacts-section" style={{ paddingTop: '120px' }}>
                <div style={{
                    background: 'linear-gradient(to right, #0077cc, #00b4d8)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    fontSize: '1.8rem',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}>
                    📨 Свяжитесь с нашей командой Oros3
                </div>

                <Accordion title="О нас">
                    <p>
                        Мы — команда молодых разработчиков, посвятивших себя созданию инновационного, красивого и полезного цифрового продукта.
                        Мы работаем в дружной атмосфере, поддерживаем друг друга и стремимся к совершенству.
                    </p>
                </Accordion>

                <Accordion title="Контакты">
                    <ul>
                        <li><strong>📧 Email:</strong> support@oros3.uz</li>
                        <li><strong>📨 Telegram:</strong> @oros3_support</li>
                    </ul>
                </Accordion>

                <Accordion title="Наша команда">
                    <ul>
                        <li> <strong>Гантулга</strong> — разработал и оформил страницу контактов</li>
                        <li> <strong>Оджаргал</strong> — дизайнер и логист пользовательского интерфейса</li>
                        <li> <strong>Эрхмэбилэг</strong> — архитектор проекта и технический лидер</li>
                        <li> <strong>Бальдруев</strong> — backend-волшебник</li>
                        <li> <strong>Буд и Сумъяа</strong> — стилизовали и реализовали компонент Header</li>
                    </ul>
                </Accordion>

                <Accordion title="Наша миссия">
                    <p>
                        Создать цифровую платформу, сочетающую в себе удобство, стабильность и элегантный дизайн. Мы хотим, чтобы каждый пользователь чувствовал удовольствие от взаимодействия с нашим продуктом.
                    </p>
                </Accordion>

                <Accordion title="Наш подход">
                    <ul>
                        <li>✔ Чистый и читаемый код</li>
                        <li>✔ Современные технологии</li>
                        <li>✔ Командная работа</li>
                        <li>✔ Страсть к улучшению</li>
                    </ul>
                </Accordion>

                {/* Typewriter Effect Section */}
                <div className="typewriter" style={{
                    padding: '20px 40px',
                    background: '#f4f4f4',
                    color: '#333',
                    borderRadius: '10px',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    marginTop: '2rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    minHeight: '50px'
                }}>
                    {displayedText}
                </div>

                <div className="logo-block" style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <img src={Oros3Logo} alt="Логотип Oros3" width="80" height="80" />
                    <p>Проект Oros3 © 2025</p>
                </div>
            </section>
        </main>
    );
}
