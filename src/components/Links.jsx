import { Link } from "react-router-dom"
export default function Links(){
     return <>
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
     </>
}