import './testlibrarypage.scss';
import Header from '../header';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { Link, useLocation , Navigate} from 'react-router-dom';
import newTests from './notes';
import Oros3 from '../../assets/oros3logo.png'
import SideBar from '../sidebar/sidebar';
import NoAccess from '../noaccesspage';
export default function TestLibrary(){
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Новые тесты','Пройденные тесты'];
    const [tests, setTests] = useState([]);
    const [lastItem, setItem] = useState(12);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { isLoggedIn, accountType } = useContext(UserContext);
    const links = [
        {
            title: 'Все тесты',
            icon: 'fas fa-book-open',
            func: '',
        },
        {
            title: 'Мой класс',
            func: '',
            icon: 'fas fa-users'
        }
    ]
    // THESE TESTS ARE JUST DUMMIES 
    // USE SHIFT OR PUSH TO ADD NEW TESTS NOT PUSH, IF ITS PUSH REVERSE THE ARRAY SO THE RECENT ONES COME FROM THE TOP
    const previousTests = [
    
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
    
    // Redirect to auth page if the user is not logged in
    const location = useLocation();
    if (!isLoggedIn) {
        return <Navigate to="/Auth/AuthLinks" state={{ from: location }} />;
    }
    if(accountType === 'admin'){
        return <Navigate to='/AdminControls' state={{from: location}}/>
    }
    if(accountType === 'teacher'){
        return <Navigate to='/TeacherControls' state={{from: location}}/>
    }
    if(accountType !== 'student'){
        return <NoAccess/>
    }

    return <>
    <div className='testlibrary'>
    <SideBar Links={links}/>
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
                    <Link to={`TestPreview/${test.id}`} className={`test ${index % 2 === 0 ? 'odd' : ''}`} key={test.id}>
                    <div>{innerWidth < 730 ? <strong>Дата окончания: </strong> : ''}<p>{test.endDate}</p></div>
                    <div>{innerWidth < 730 ? <strong>Предмет: </strong> : ''}<p>{test.subject}</p></div>
                    <div>{innerWidth < 730 ? <strong>Тема: </strong> : ''}<p>{test.topic}</p></div>
                    {activeTab === 1 && <div>{innerWidth < 730 ? 'Результат: ' : ''}<p>{test.result}</p></div>}
                    </Link> 
                ))}
            </div>
            {
                tests.length < lastItem || tests.length - lastItem === 0 ? '' : 
                (<div className='loadmore'>
                    <button onClick={() => setItem(prevItem => prevItem + (tests.length - lastItem < 8 ? tests.length - lastItem : 8))}>{`Загрузить еще ${tests.length - lastItem < 8 ? tests.length - lastItem : 8} ${tests.length - lastItem === 1 ? 'тест' : 'тестов'}`}</button>
                </div>)
            }
        </div>  
     </div>
     </main>
    </div>
    </>
}
