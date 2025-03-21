import './adminpage.scss';
import SideBar from '../sidebar/sidebar';
import {UserContext} from '../../App'
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import NoAccess from '../noaccesspage';
export default function AdminPage(){
    const {isLoggedIn, accountType} = useContext(UserContext)
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to="/Auth/AuthLinks" state={{ from: location }} />;
    }
    if(accountType !== 'admin'){
        return <NoAccess/>
    }
    const links = [
        {
            title: 'Все тесты',
            func: '',
            icon: 'fa fa-book',
        },
        {
            title: 'Все ученики',
            func: '',
            icon: 'fas fa-book-reader'
        },
        {
            title: 'Все учители',
            func: '',
            icon: 'fas fa-book-reader'
        },
        {
            title: 'Все классы',
            func: '',
            icon: 'fa fa-database'
        }
    ]
    return <div className="adminpage">
        <SideBar Links={links}/>
        <main>
            <div className="container">
                <div className="search">
                    <input type="search" placeholder='Search by ID/Name'/>
                    <button>Search</button>
                </div>
                <div className='results'>
                    
                </div>
            </div>
        </main>
    </div>
}