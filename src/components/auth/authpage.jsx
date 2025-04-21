import { useContext, useEffect } from "react";
import { useParams , Link, Navigate, useLocation} from "react-router-dom"
import StudentLogin from "./student/studentlogin";
import TeacherLogin from "./teacher/teacherlogin";
import AdminLogin from "./admin/adminlogin";
import ErrorPage from "../errorpage";
import StudentSignUp from "./student/studentsignup";
import AuthLinks from './AuthLinks';
import './authpage.scss'
import { UserContext } from "../../App";
export default function AuthPage() {
    const {isLoggedIn} = useContext(UserContext)
    const { id } = useParams();
    const formComponents = {
        Student: StudentLogin,
        Teacher: TeacherLogin,
        Admin: AdminLogin,
        StudentSignUp: StudentSignUp,
        AuthLinks: AuthLinks,
    };
    const FormComponent = formComponents[id] || null;
    const location = useLocation();
    if (isLoggedIn) {
        return <Navigate to="/TestLibrary" state={{ from: location }} />;
    }
    return (
       <>
            {FormComponent ? 
            <div className="AuthPage">
             <Link to='/' className="home"><i className='fas fa-graduation-cap'></i></Link>
             <FormComponent /> 
            </div>
            : <ErrorPage/>}
      </>
    );
}
