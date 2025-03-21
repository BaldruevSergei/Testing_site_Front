import { Link } from "react-router-dom"
export default function Links(){
     return <>
     <Link to='/'>
     <i className="fa fa-home"></i>
     Начало
     </Link>
     <Link to='/TestLibrary'>
     <i className="fa fa-book"></i>
     Рабочая панель
     </Link>
     <Link to='/Contacts'>
     <i className="fa fa-phone"></i>
     Контакты
     </Link>
     </>
}