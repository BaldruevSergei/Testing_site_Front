import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export default function SideBar(){
    return (
        <nav className="sidebar">
            <div className='Logo'>
                <Link to='/'><i className='fas fa-graduation-cap'></i>EduTest</Link>
                <div className='name'>Добро пожаловать!
                    <div>"Teachers name"</div>
                </div>
            </div>
            <ul>
               <Link to=""><i className="fa fa-book"></i>Мои тесты</Link>
               <Link to=""><i className='fas fa-book-reader'></i>Мои ученики</Link>
               <Link to=""><i className="fa fa-database"></i>Мои классы</Link>
            </ul>
        </nav>
    );
}