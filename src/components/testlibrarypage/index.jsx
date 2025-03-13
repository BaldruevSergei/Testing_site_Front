import './testlibrarypage.scss';
import Header from '../header';
import { useEffect, useState } from 'react';   
import { Link } from 'react-router-dom';


export default function TestLibrary(){
    const newTests = [
        {
            date: "23rd October 2024",
            subject: "Math",
            topic: "Algebra",
            result: "B",
        },
        {
            date: "23rd October 2024",
            subject: "Math",
            topic: "Algebra",
            result: "B",
        },
        {
            date: "23rd October 2024",
            subject: "Math",
            topic: "Algebra",
            result: "B",
        },
        {
            date: "23rd October 2024",
            subject: "Math",
            topic: "Algebra",
            result: "B",
        },
    ];
    const previousTests = [
        {
            date: "15th September 2025",
            subject: "Physics",
            topic: "Magnets",
            result: "C",
        },
        {
            date: "15th September 2025",
            subject: "Physics",
            topic: "Magnets",
            result: "C",
        },
        {
            date: "15th September 2025",
            subject: "Physics",
            topic: "Magnets",
            result: "C",
        },
        {
            date: "15th September 2025",
            subject: "Physics",
            topic: "Magnets",
            result: "C",
        },
        {
            date: "15th September 2025",
            subject: "Physics",
            topic: "Magnets",
            result: "C",
        }
    ]
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Новые тесты','Пройденные тесты'];
    const [tests, setTests] = useState([]);

    useEffect(() => {
        changeTab(0);
    }, [])
    const changeTab = (index) => {  
        index === 0 ? setTests(newTests) : setTests(previousTests);
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
            <ul className='description'> 
                <li>Дата окончания</li>
                <li>Предмет</li>
                <li>Тема работы</li>
                <li>Рез.</li>
            </ul>
            <div>
            
                {tests.map((test,index) => (
                    <Link className={`test ${index % 2 === 0 ? 'odd' : ''}`}>
                    <span>{test.date}</span>
                    <span>{test.subject}</span>
                    <span>{test.topic}</span>
                    <span>{test.result}</span>
                    </Link>
                ))}
            
            </div>
        </div>
     </div>
     </main>
    </div>
    </>
}
