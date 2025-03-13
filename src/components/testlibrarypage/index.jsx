import './testlibrarypage.scss';
import Header from '../header';
import { useEffect, useState } from 'react';   
import { Link } from 'react-router-dom';


export default function TestLibrary(){
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Новые тесты','Пройденные тесты'];
    const [tests, setTests] = useState([]);
    const [lastItem, setItem] = useState(12);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const newTests = [
        
    ];
    // THE MOST RECENT TESTS COME FIRST SO THAT MEANS THAT THE FIRST TEST IS INDEX 0
    // THESE TESTS ARE JUST DUMMIES 
    // USE SHIFT TO ADD NEW TESTS NOT PUSH
    const previousTests = [
        {
            'date': '01.01.2022',
            'subject': 'Физика',
            'topic': 'Квантовая механика',
            'result': '95%'
        },
        {
            'date': '02.01.2022',
            'subject': 'Химия',
            'topic': 'Органическая химия',
            'result': '88%'
        },
        {
            'date': '03.01.2022',
            'subject': 'Биология',
            'topic': 'Генетика',
            'result': '92%'
        },
        {
            'date': '04.01.2022',
            'subject': 'История',
            'topic': 'Древний Рим',
            'result': '85%'
        },
        {
            'date': '05.01.2022',
            'subject': 'География',
            'topic': 'Климатические зоны',
            'result': '90%'
        },
        {
            'date': '06.01.2022',
            'subject': 'Литература',
            'topic': 'Русская классика',
            'result': '87%'
        },
        {
            'date': '07.01.2022',
            'subject': 'Английский язык',
            'topic': 'Грамматика',
            'result': '93%'
        },
        {
            'date': '08.01.2022',
            'subject': 'Информатика',
            'topic': 'Алгоритмы',
            'result': '96%'
        },
        {
            'date': '09.01.2022',
            'subject': 'Физкультура',
            'topic': 'Здоровый образ жизни',
            'result': '89%'
        },
        {
            'date': '10.01.2022',
            'subject': 'Математика',
            'topic': 'Дифференциальные уравнения',
            'result': '94%'
        },
        {
            'date': '11.01.2022',
            'subject': 'Экономика',
            'topic': 'Микроэкономика',
            'result': '91%'
        },
        {
            'date': '12.01.2022',
            'subject': 'Социология',
            'topic': 'Социальные структуры',
            'result': '86%'
        },
        {
            'date': '13.01.2022',
            'subject': 'Философия',
            'topic': 'Экзистенциализм',
            'result': '88%'
        },
        {
            'date': '14.01.2022',
            'subject': 'Психология',
            'topic': 'Когнитивная психология',
            'result': '92%'
        },
        {
            'date': '15.01.2022',
            'subject': 'Музыка',
            'topic': 'Классическая музыка',
            'result': '90%'
        },
        {
            'date': '16.01.2022',
            'subject': 'Искусство',
            'topic': 'Ренессанс',
            'result': '87%'
        },
        {
            'date': '17.01.2022',
            'subject': 'Право',
            'topic': 'Конституционное право',
            'result': '93%'
        },
    ].reverse();
    useEffect(() => {
        changeTab(0);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    const changeTab = (index) => {  
        index === 0 ? setTests(newTests) : setTests(previousTests);
        setItem(12);
    }
    return <>
    <div className='testlibrary'>
    <Header/>
    <main>
     <div className="container">
        <div className="tabs">
            {tabs.map((tab,index) => (
                <button onClick={() => {setActiveTab(index); changeTab(index)}} className={activeTab === index ? 'active' : ''}>{tab}</button>
            ))}
        </div>
        <div className="testContainer">
            <ul className={`description ${activeTab === 0 ? 'new' : ''}`} > 
                <li>Дата окончания</li>
                <li>Предмет</li>
                <li>Тема работы</li>
                <span><li>Результат</li></span>
            </ul>
            <div className={`testsLibrary ${tests.length < 1 ? 'empty' : ''}`}>
                {tests.length === 0 ? activeTab === 0 ? 'У вас нет новых тестов' : 'Вы еще не проходили тесты' : tests.slice(0, lastItem).map((test, index) => (
                    <Link key={index} className={`test ${index % 2 === 0 ? 'odd' : ''}`}>
                    <div>{innerWidth < 730 ? 'Дата окончания: ' : ''}<p>{test.date}</p></div>
                    <div>{innerWidth < 730 ? 'Предмет: ' : ''}<p>{test.subject}</p></div>
                    <div>{innerWidth < 730 ? 'Тема: ' : ''}<p>{test.topic}</p></div>
                    {activeTab === 1 && <div>{innerWidth < 730 ? 'Результат: ' : ''}<p>{test.result}</p></div>}
                    </Link> 
                ))}
            </div>
            <div className='loadmore' style={{display: tests.length < lastItem || tests.length - lastItem === 0? 'none' : 'flex'}}>
            <button onClick={() => setItem(prevItem => prevItem + (tests.length - lastItem < 8 ? tests.length - lastItem : 8))}>{`Загрузить еще ${tests.length - lastItem < 8 ? tests.length - lastItem : 8} ${tests.length - lastItem === 1 ? 'тест' : 'тестов'}`}</button>
            </div>
        </div>
     </div>
     </main>
    </div>
    </>
}
