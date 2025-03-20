import { Link } from "react-router-dom";
export default function AuthLinks(){
    return (<>
        <div className="AuthPage">
        <Link to='/' className="home"><i className='fas fa-graduation-cap'></i></Link>
         <Link to='/Auth/Teacher' className="side">
         <i class='fas fa-chalkboard-teacher'></i>
         <div>
            Для <span>учителей</span>
        </div>
         </Link>
         <Link to='/Auth/Student' className="middle">
         <i className="fas fa-book-reader"></i>
         <div>Для <span>школьников</span></div>
         </Link>
         <Link to='/Auth/Admin'className="side">
         <i class='fas fa-shield-alt'></i>
         <div>Для <span>админа</span></div>
         </Link>
        </div>
        </>)
}