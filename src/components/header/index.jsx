import { Link } from 'react-router-dom';
import './header.scss';
export default function Header(){
     return <header>
          <div className="logo">
               <Link href='/'>EduTest</Link>
          </div>
          <div className="links">
               <span>
                    <Link href='/'>
                    <i className="fa fa-home"></i>
                    Начало
                    </Link>
                    <Link href='/'>
                    <i className="fa fa-book"></i>
                    Проверочные работы
                    </Link>
                    <Link href='/'>
                    <i className="fa fa-phone"></i>
                    Контакты
                    </Link>
               </span>
               
          </div>
     </header>
}