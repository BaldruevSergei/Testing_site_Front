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
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },
        {
            'date': '12.12.2021',
            'subject': 'Математика',
            'topic': 'Подготовка к ЕГЭ',
            'result': '100%'
        },

    ];
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
            <button onClick={() => setItem(prevItem => prevItem + tests.length - lastItem)}>{`Загрузить еще ${tests.length - lastItem} ${tests.length - lastItem === 1 ? 'тест' : 'тестов'}`}</button>
            </div>
        </div>
     </div>
     </main>
    </div>
    </>
}
