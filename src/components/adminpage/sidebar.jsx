import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
export default function SideBar(){
    return <nav className="sidebar">
            <p><i className='fas fa-graduation-cap'></i>EduTest</p>
            <ul>
                <Link><i className="fa fa-book"></i>Все тесты</Link>
                <Link><i className='fas fa-chalkboard-teacher'></i>Все учителя</Link>
                <Link><i className='fas fa-book-reader'></i>Все ученики</Link>
                <Link><i className="fa fa-database"></i>Все классы</Link>
            </ul>
    </nav>
}