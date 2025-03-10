import { Link } from "react-router-dom"
export default function Links(){
     return <>
     <Link to='/'>
     <i className="fa fa-home"></i>
     Начало
     </Link>
     <Link to='/'>
     <i className="fa fa-book"></i>
     Проверочные работы
     </Link>
     <Link to='/'>
     <i className="fa fa-phone"></i>
     Контакты
     </Link>
     </>
}