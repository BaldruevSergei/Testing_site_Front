import { useEffect } from "react";
import { useParams , Link} from "react-router-dom"
import StudentLogin from "./student/studentlogin";
import TeacherLogin from "./teacher/teacherlogin";
import AdminLogin from "./admin/adminlogin";
import ErrorPage from "../errorpage";
import './authpage.scss'
export default function AuthPage() {
    const { id } = useParams();
    const formComponents = {
        Student: StudentLogin,
        Teacher: TeacherLogin,
        Admin: AdminLogin
    };
    const FormComponent = formComponents[id] || null;

    return (
       <>
            {FormComponent ? 
            <div className="AuthPage">
             <Link to='/'><i className='fas fa-graduation-cap'></i></Link>
             <FormComponent /> 
            </div>
            : <ErrorPage/>}
      </>
    );
}
