import './testlibrarypage.scss';
import Header from '../header';
import { act, useEffect, useState } from 'react';   

export default function TestLibrary(){
    const [newTests, setNewTests] = useState([]);
    const [previousTests, setPreviousTests] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Новые тесты','Пройденные тесты'];
    const tests = [
        {
            date: '13th October 2024',
            subject: 'Math',
            topic: 'Algebra',
            result: 'A'
        },
        {
            date: '20th October 2024',
            subject: 'Science',
            topic: 'Physics',
            result: 'B+'
        },
        {
            date: '25th October 2024',
            subject: 'History',
            topic: 'World War II',
            result: 'A-'
        },
        {
            date: '30th October 2024',
            subject: 'English',
            topic: 'Literature',
            result: 'B'
        },
        {
            date: '5th November 2024',
            subject: 'Geography',
            topic: 'Maps',
            result: 'A+'
        }
    ];
    return <>
    <div className='testlibrary'>
    <Header/>
    <main>
     <div className="container">
        <div className="tabs">
            {tabs.map((tab,index) => (
                <button onClick={() => setActiveTab(index)} className={activeTab === index ? 'active' : ''}>{tab}</button>
            ))}
        </div>
        <div className="testContainer">
            <ul className='description'> 
                <li>Дата окончания</li>
                <li>Предмет</li>
                <li>Тема работы</li>
                <li>Рез.</li>
            </ul>
            <div>
            
                {tests.map((test,index) => (
                    <ul className='test'>
                    <span>{test.date}</span>
                    <span>{test.subject}</span>
                    <span>{test.topic}</span>
                    <span>{test.result}</span>
                    </ul>
                ))}
            
            </div>
        </div>
     </div>
     </main>
    </div>
    </>
}
