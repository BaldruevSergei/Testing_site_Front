import './adminpage.scss';
import Sidebar from './sidebar';
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
    return <div className="adminpage">
        <Sidebar/>
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