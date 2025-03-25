import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './sidebar.scss'
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
export default function SideBar(props){
    const [menu, setMenu] = useState(false);
    const {accountType} = useContext(UserContext)
    return (
        <nav className="sidebar" style={{justifyContent: !menu ? 'space-between' : 'flex-end'}}>
            {!menu ? (<Link to='/' className='logo'><i className='fas fa-graduation-cap'></i>EduTest</Link>) : ''}
            <i className={`fa fa-${!menu ? 'bars' : 'close'}`} id='toggleMenu' onClick={() => setMenu(!menu)}></i>
            <div className='container' style={{minHeight: menu ? '300px' : '0', height: menu ? 'auto' : '0'}}>
            <Link className='back' to='/'><i className='fas fa-graduation-cap'></i>EduTest</Link>
            <div className='profile'>
                <span className='pfp'><img src='' alt="" /><Link>Профиль</Link></span>
                <span className='info'>
                    <p>Name</p>
                    <p>Роль: {accountType}</p>
                    <div><Link><i className='fas fa-user-circle'></i><span>Мой Профиль</span></Link>
                    <Link><i className='fas fa-user-alt-slash'></i><span>Выйти</span></Link>
                    </div>
                </span>
            </div>
            <ul>
               {props.Links.map(({title,func,icon},index) => (
                <>
                <span onClick={func}><i className={`${icon}`}></i>{title}</span>
                </>
               ))}
            </ul>
            </div>
        </nav>
    );
}