import '../page.scss';
import SideBar from '../../sidebar/sidebar';
import {UserContext} from '../../../App'
import { useContext , useEffect, useState} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import NoAccess from '../../noaccesspage';
import Main from '../main'
export default function AdminPage(){
    const {isLoggedIn, accountType} = useContext(UserContext)
    const location = useLocation();
    const [currentLink, setCurrentLink] = useState(0);


    if (!isLoggedIn) {
        return <Navigate to="/Auth/AuthLinks" state={{ from: location }} />;
    }
    if(accountType !== 'admin'){
        return <NoAccess/>
    }

    const links = [
        {
            title: 'Все тесты',
            func: () => setCurrentLink(0),
            icon: 'fa fa-book',
            number: 'тестов'
  
        },
        {
            title: 'Все ученики',
            func: () => setCurrentLink(1),
            icon: 'fas fa-book-reader',
            number: 'учеников'
     
        },
        {
            title: 'Все учители',
            func: () => setCurrentLink(2),
            icon: 'fas fa-chalkboard-teacher',
            number: 'учителей'
            
        },
        {
            title: 'Все классы',
            func: () => setCurrentLink(3),
            icon: 'fa fa-database',
            number: 'класс'
           
        }
    ]


    return <div className="adminpage page">
        <SideBar Links={links}/>
        <Main links={links} currentLink={currentLink}/>
    </div>
}