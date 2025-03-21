
import './teacherpage.scss';
import { UserContext } from '../../App';
import { useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import NoAccess from '../noaccesspage';
import Sidebar from '../sidebar/sidebar'
export default function TeacherPage(){
    const location = useLocation();
    const links = [
        {
            title: 'Мои тесты',
            func: '',
            icon: 'fa fa-book',
        },
        {
            title: 'Мои ученики',
            func: '',
            icon: 'fas fa-book-reader'
        },
        {
            title: 'Мои классы',
            func: '',
            icon: 'fa fa-database'
        }
    ]
    const {isLoggedIn, accountType} = useContext(UserContext);
    if (!isLoggedIn) {
        return <Navigate to="/Auth/AuthLinks" state={{ from: location }} />;
    }
    if(accountType !== 'teacher'){
        return <NoAccess/>
    }
    return <div className="teacherpage">
        <Sidebar Links={links}/>
        <main>
            <div className="container">
                <div className="search">
                    <input type="search" placeholder='Search By ID/Name'/>
                    <button>Найти</button>
                </div>
            </div>
        </main>
    </div>
}