
import '../page.scss';
import { UserContext } from '../../../App';
import { useLocation, Navigate } from 'react-router-dom';
import { useContext , useState} from 'react';
import NoAccess from '../../noaccesspage';
import Sidebar from '../../sidebar/sidebar'
import Main from '../main';
export default function TeacherPage(){
    const location = useLocation();
    const [currentLink, setCurrentLink] = useState(0);
    const links = [
        {
            title: 'Мои тесты',
            func: () => setCurrentLink(0),
            icon: 'fa fa-book',
        },
        {
            title: 'Мои ученики',
            func: () => setCurrentLink(1),
            icon: 'fas fa-book-reader'
        },
        {
            title: 'Мои классы',
            func: () => setCurrentLink(2),
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
    return <div className="teacherpage page">
        <Sidebar Links={links}/>
        <Main links={links} currentLink={currentLink}/>
    </div>
}