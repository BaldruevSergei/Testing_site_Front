import { useEffect } from "react";
import { useParams , Link} from "react-router-dom"
import StudentLogin from "./student/studentlogin";
import TeacherLogin from "./teacher/teacherlogin";
import AdminLogin from "./admin/adminlogin";
import ErrorPage from "../errorpage";
import StudentSignUp from "./student/studentsignup";
import './authpage.scss'
export default function AuthPage() {
    const { id } = useParams();
    const formComponents = {
        Student: StudentLogin,
        Teacher: TeacherLogin,
        Admin: AdminLogin,
        StudentSignUp: StudentSignUp,
    };
    const FormComponent = formComponents[id] || null;

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
