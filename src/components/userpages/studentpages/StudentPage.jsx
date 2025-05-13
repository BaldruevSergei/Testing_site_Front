import '../page.scss';
import { UserContext } from '../../../App';
import { useLocation, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import NoAccess from '../../noaccesspage';
import Sidebar from '../../sidebar/sidebar';
import Main from '../main';

export default function StudentPage() {
    const location = useLocation();
    const [currentLink, setCurrentLink] = useState(0);
    
  
    const links = [
        {
            title: 'Мои курсы',
            func: () => setCurrentLink(0),
            icon: 'fa fa-cogs',
        },
        {
            title: 'Мои тесты',
            func: () => setCurrentLink(1),
            icon: 'fas fa-book-reader',
        },
        {
            title: 'Мои оценки',
            func: () => setCurrentLink(2),
            icon: 'fa fa-graduation-cap',
        }
    ];

    const { isLoggedIn, accountType } = useContext(UserContext);

    
    if (!isLoggedIn) {
        return <Navigate to="/Auth/AuthLinks" state={{ from: location }} />;
    }

  
    if (accountType !== 'student') {
        return <NoAccess />;
    }

    return (
        <div className="studentpage page">
            <Sidebar Links={links} />
            <Main links={links} currentLink={currentLink} />
        </div>
    );
}
